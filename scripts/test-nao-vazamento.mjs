// =============================================================================
// Teste de NÃO VAZAMENTO — procura indícios de cópia vinda do sistema real
// =============================================================================
// FAIL CLOSED. Este teste varre o runtime acadêmico (src/, scripts/, configs)
// atrás de qualquer coisa que só poderia ter vindo do ambiente operacional:
// identificadores de conta, nomes institucionais reais, PII, segredos,
// caminhos locais do projeto de referência e formatos de arquivo proibidos.
//
// PRINCÍPIO: este script NÃO imprime segredo nenhum. Ele nunca lê `.env`,
// nunca mostra prefixo, sufixo, tamanho ou hash de credencial. Reporta apenas
// ARQUIVO e o NOME da regra violada — o suficiente para agir, nada além disso.
//
//   npm run test:nao-vazamento
// =============================================================================
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

let falhas = 0;
let n = 0;
function t(nome, cond, detalhe = '') {
  n += 1;
  const ok = Boolean(cond);
  if (!ok) falhas += 1;
  console.log(`  ${ok ? '✓' : '✗'} ${String(n).padStart(2)}. ${nome}${ok || !detalhe ? '' : ` — ${detalhe}`}`);
}

/** Áreas que compõem o runtime acadêmico. `docs/` é científico e fica fora. */
const AREAS = ['src', 'scripts'];
const ARQUIVOS_RAIZ = ['package.json', 'next.config.ts', 'tsconfig.json', 'eslint.config.mjs', 'postcss.config.mjs'];

function varrer(dir) {
  const abs = join(ROOT, dir);
  if (!existsSync(abs)) return [];
  const saida = [];
  for (const nome of readdirSync(abs)) {
    const rel = `${dir}/${nome}`;
    if (nome === 'node_modules' || nome === '.next') continue;
    if (statSync(join(ROOT, rel)).isDirectory()) saida.push(...varrer(rel));
    else saida.push(rel);
  }
  return saida;
}

const ARQUIVOS = [...AREAS.flatMap(varrer), ...ARQUIVOS_RAIZ.filter((f) => existsSync(join(ROOT, f)))];
const TEXTO = new Map(
  ARQUIVOS.filter((f) => ['.ts', '.tsx', '.mjs', '.js', '.json', '.css', '.md'].includes(extname(f)))
    .map((f) => [f, readFileSync(join(ROOT, f), 'utf8')]),
);

/** Este próprio script contém os padrões; ele é a exceção óbvia. */
const AUTO = 'scripts/test-nao-vazamento.mjs';
const alvos = () => [...TEXTO.entries()].filter(([f]) => f !== AUTO);

function violacoes(regex) {
  return alvos().filter(([, src]) => regex.test(src)).map(([f]) => f);
}

console.log(`\nVarredura: ${ARQUIVOS.length} arquivos do runtime acadêmico (src/, scripts/, configs)`);
console.log('docs/ não é varrido: é a zona científica, governada por outro controle.\n');

// --- 1. IDENTIDADE INSTITUCIONAL REAL ---------------------------------------
console.log('1 · Nomes e identidade institucional real');

const PROIBIDOS_NOME = [
  ['nome da instituição parceira', /sapucaia/i],
  ['handle de rede social operacional', /@colegio\w+/i],
  ['sistema acadêmico do ambiente real', /\bsisalu\b/i],
  ['nome de CRM operacional', /alta\s*capta[çc][ãa]o/i],
];
for (const [rotulo, re] of PROIBIDOS_NOME) {
  const v = violacoes(re);
  t(`sem ${rotulo}`, v.length === 0, v.join(', '));
}

t('a identidade usada é a entidade fictícia declarada',
  TEXTO.get('src/lib/identidade.ts')?.includes('Instituição Educacional Alfa') === true);

// --- 2. IDENTIFICADORES OPERACIONAIS ----------------------------------------
console.log('\n2 · Identificadores de contas e objetos de plataforma');

const PROIBIDOS_ID = [
  ['ID de conta de anúncios (act_…)', /\bact_\d{6,}/],
  ['ID numérico longo de campanha/anúncio (15+ dígitos)', /\b\d{15,}\b/],
  ['ID de usuário do Instagram Graph', /\b1784\d{12,}\b/],
  ['ID de planilha do Google Sheets', /\b[A-Za-z0-9_-]{40,}\b(?=.*sheet)/i],
];
for (const [rotulo, re] of PROIBIDOS_ID) {
  const v = violacoes(re);
  t(`sem ${rotulo}`, v.length === 0, v.join(', '));
}

// --- 3. PII -----------------------------------------------------------------
console.log('\n3 · Dados pessoais');

const PROIBIDOS_PII = [
  ['e-mail de pessoa/instituição', /[\w.+-]+@(?!example\.)[\w-]+\.[a-z]{2,}/i],
  // Exige DDD entre parênteses ou hífen separador. A versão frouxa deste
  // padrão casava com constante hexadecimal do PRNG (`0x01000193`) — um falso
  // positivo que treinaria o leitor a ignorar o resultado da varredura.
  ['telefone brasileiro', /\(\d{2}\)\s?9?\d{4}[-\s]?\d{4}|\b9\d{4}-\d{4}\b|\b\d{2}\s9\d{4}-\d{4}\b/],
  ['CPF', /\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/],
  ['CEP com logradouro', /\b\d{5}-\d{3}\b/],
];
for (const [rotulo, re] of PROIBIDOS_PII) {
  const v = violacoes(re);
  t(`sem ${rotulo}`, v.length === 0, v.join(', '));
}

/**
 * Coleta os NOMES DE CAMPO de um JSON, recursivamente.
 *
 * A varredura de PII tem de olhar campo, não valor. `"Telefone"` como VALOR do
 * campo `canal` é o rótulo de uma categoria de origem de contato — inventada, e
 * tão sensível quanto a palavra "Site". Já um CAMPO chamado `telefone` seria um
 * lugar onde um telefone caberia, e é isso que precisa não existir.
 */
function camposDe(caminho) {
  const chaves = new Set();
  const coletar = (o) => {
    if (Array.isArray(o)) return o.forEach(coletar);
    if (o && typeof o === 'object') {
      for (const k of Object.keys(o)) {
        chaves.add(k.toLowerCase());
        coletar(o[k]);
      }
    }
  };
  coletar(JSON.parse(readFileSync(join(ROOT, caminho), 'utf8')));
  return chaves;
}

const CAMPOS_PII = [
  'nome', 'nomealuno', 'nomeresponsavel', 'aluno', 'responsavel', 'email',
  'telefone', 'celular', 'cpf', 'rg', 'datanascimento', 'endereco', 'bairro',
  'cep', 'matricula_id', 'id',
];

for (const [rotulo, arquivo] of [
  ['matrículas', 'src/data/matriculas-sintetico.json'],
  ['captação', 'src/data/captacao-sintetico.json'],
]) {
  const campos = camposDe(arquivo);
  const achados = CAMPOS_PII.filter((p) => campos.has(p));
  t(`o dataset de ${rotulo} não tem NENHUM campo capaz de guardar PII`,
    achados.length === 0, `campos: ${achados.join(', ')}`);
}

// --- 4. SEGREDOS -------------------------------------------------------------
console.log('\n4 · Segredos e credenciais');

// Nenhum valor é impresso: só a existência do arquivo ou do padrão.
t('nenhum arquivo .env no repositório',
  !readdirSync(ROOT).some((f) => f === '.env' || f.startsWith('.env.')),
  'presença detectada — remova antes de prosseguir');

const PROIBIDOS_SEGREDO = [
  ['token de acesso Meta/Graph', /EAA[A-Za-z0-9]{20,}/],
  ['chave privada PEM', /BEGIN (RSA )?PRIVATE KEY/],
  ['chave de API Google', /AIza[0-9A-Za-z_-]{30,}/],
  ['JWT', /eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\./],
  ['service account', /"type":\s*"service_account"/],
  ['leitura de variável de ambiente sensível', /process\.env\.(META|GOOGLE|SUPABASE|NEXT_PUBLIC_SUPABASE)\w*/],
];
for (const [rotulo, re] of PROIBIDOS_SEGREDO) {
  const v = violacoes(re);
  t(`sem ${rotulo}`, v.length === 0, v.join(', '));
}

t('a aplicação não lê NENHUMA variável de ambiente',
  violacoes(/process\.env\./).filter((f) => f.startsWith('src/')).length === 0);

// --- 5. INTEGRAÇÕES REAIS ----------------------------------------------------
console.log('\n5 · Integrações reais');

const PROIBIDOS_REDE = [
  ['chamada a graph.facebook.com', /graph\.facebook\.com/],
  ['chamada a googleapis.com', /googleapis\.com/],
  ['cliente Supabase', /@supabase\//],
  ['SDK googleapis', /from\s+['"]googleapis['"]/],
  ['fetch() no runtime da aplicação', /\bfetch\s*\(/],
];
for (const [rotulo, re] of PROIBIDOS_REDE) {
  const v = violacoes(re).filter((f) => f.startsWith('src/'));
  t(`sem ${rotulo}`, v.length === 0, v.join(', '));
}

t('package.json não declara SDK de plataforma real',
  (() => {
    const pkg = JSON.parse(TEXTO.get('package.json'));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    return !['googleapis', '@supabase/supabase-js', '@supabase/ssr', 'xlsx', 'facebook-nodejs-business-sdk']
      .some((d) => d in deps);
  })());

// --- 6. CAMINHOS E ARTEFATOS DO PROJETO DE REFERÊNCIA -----------------------
console.log('\n6 · Caminhos e artefatos do projeto de referência');

const PROIBIDOS_CAMINHO = [
  ['caminho local do projeto de referência', /campanha[_-]sapucaia/i],
  ['pasta de dados do projeto de referência', /05-dados|ads-inbox|meta-write/i],
  ['caminho absoluto de máquina', /[A-Z]:\\Users\\/],
];
for (const [rotulo, re] of PROIBIDOS_CAMINHO) {
  const v = violacoes(re);
  t(`sem ${rotulo}`, v.length === 0, v.join(', '));
}

const EXT_PROIBIDA = ['.csv', '.xlsx', '.xls', '.jsonl'];
const encontrados = ARQUIVOS.filter((f) => EXT_PROIBIDA.includes(extname(f)));
t('nenhum CSV/XLSX/JSONL no runtime acadêmico', encontrados.length === 0, encontrados.join(', '));

t('os únicos JSON de dado são os dois datasets sintéticos',
  (() => {
    const jsons = ARQUIVOS.filter((f) => f.startsWith('src/data/') && f.endsWith('.json')).sort();
    return jsons.join(',') === 'src/data/captacao-sintetico.json,src/data/matriculas-sintetico.json';
  })());

t('todo dataset se declara sintético',
  ['captacao-sintetico.json', 'matriculas-sintetico.json'].every((f) => {
    const ds = JSON.parse(readFileSync(join(ROOT, 'src', 'data', f), 'utf8'));
    return ds.meta?.synthetic === true;
  }));

console.log(`\n${falhas === 0 ? 'TODAS AS ' + n + ' VERIFICAÇÕES PASSARAM ✓' : falhas + ' de ' + n + ' VERIFICAÇÕES FALHARAM ✗'}`);
console.log('[nenhum segredo lido, impresso ou resumido durante a varredura]');
process.exit(falhas === 0 ? 0 : 1);
