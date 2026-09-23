// =============================================================================
// Testes do FEATURE GATE ACADÊMICO
// =============================================================================
// Um módulo bloqueado precisa desaparecer de TRÊS superfícies e ainda falhar
// fechado na URL direta. São quatro garantias independentes; este arquivo
// verifica as quatro.
//
//   npm run test:fases
// =============================================================================
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ler = (...p) => readFileSync(join(ROOT, ...p), 'utf8');

const {
  MODULOS,
  FASES,
  PROJETO_INICIADO_EM,
  moduloDaRota,
  moduloHabilitado,
  modulosHabilitados,
  modulosDaFase,
  rotaHabilitada,
} = await import('../src/lib/fases.ts');

let falhas = 0;
let n = 0;
function t(nome, cond, detalhe = '') {
  n += 1;
  const ok = Boolean(cond);
  if (!ok) falhas += 1;
  console.log(`  ${ok ? '✓' : '✗'} ${String(n).padStart(2)}. ${nome}${ok || !detalhe ? '' : ` — ${detalhe}`}`);
}

const DISPONIVEIS = ['/captacao', '/matriculas'];
const BLOQUEADAS = ['/ads', '/ads/google', '/ads/meta', '/ads/estrategia', '/organico', '/gestao', '/arquitetura'];

// --- 1. CATÁLOGO -------------------------------------------------------------
console.log('\n1 · Catálogo de fases');

t('data de início da adaptação acadêmica é 27/08/2026', PROJETO_INICIADO_EM === '2026-08-27');
t('a Fase 1 é a única ativa',
  Object.entries(FASES).filter(([, v]) => v.situacao === 'ativa').map(([k]) => k).join(',') === '1');
t('Fase 1 = Captação + Matrículas',
  modulosDaFase(1).map((m) => m.chave).join(',') === 'captacao,matriculas');
t('Fase 2 = os quatro módulos de Ads',
  modulosDaFase(2).map((m) => m.chave).join(',') === 'ads,ads-google,ads-meta,ads-estrategia');
t('Fase 3 = Reels orgânicos', modulosDaFase(3).map((m) => m.chave).join(',') === 'organico');
t('Fase 4 = Gestão + Arquitetura',
  modulosDaFase(4).map((m) => m.chave).join(',') === 'gestao,arquitetura');
t('exatamente 2 módulos habilitados', modulosHabilitados().length === 2);
t('todo módulo de fase > 1 está bloqueado',
  MODULOS.filter((m) => m.fase > 1).every((m) => m.habilitado === false));
t('nenhuma rota do catálogo se repete',
  new Set(MODULOS.map((m) => m.rota)).size === MODULOS.length);

// --- 2. DISPONIBILIDADE POR ROTA --------------------------------------------
console.log('\n2 · Disponibilidade por rota');

for (const rota of DISPONIVEIS) {
  t(`${rota} → disponível`, rotaHabilitada(rota) === true);
}
for (const rota of BLOQUEADAS) {
  t(`${rota} → bloqueado`, rotaHabilitada(rota) === false);
}

t('sub-rota de módulo bloqueado herda o bloqueio (/ads/meta/<id>)',
  rotaHabilitada('/ads/meta/12345') === false &&
  moduloDaRota('/ads/meta/12345')?.chave === 'ads-meta');

t('match mais específico vence: /ads não ativa os filhos',
  moduloDaRota('/ads')?.chave === 'ads' && moduloDaRota('/ads/google')?.chave === 'ads-google');

t('barra final e query não mudam a decisão',
  rotaHabilitada('/captacao/') === true &&
  rotaHabilitada('/captacao?safras=2025') === true &&
  rotaHabilitada('/ads/') === false);

t('fail closed: chave desconhecida NÃO é liberada',
  moduloHabilitado('inexistente') === false && moduloHabilitado('') === false);

t('rota fora do catálogo não é governada pelo gate',
  rotaHabilitada('/') === true && moduloDaRota('/') === null);

// --- 3. AS ROTAS BLOQUEADAS FALHAM FECHADAS ---------------------------------
console.log('\n3 · Rotas bloqueadas falham fechadas no servidor');

t('o guarda de servidor usa notFound()',
  ler('src', 'lib', 'gate-servidor.ts').includes('notFound()'));

t('o guarda NÃO usa redirect (não disfarça rollout de erro de navegação)',
  !/redirect\s*\(/.test(ler('src', 'lib', 'gate-servidor.ts')));

for (const rota of BLOQUEADAS) {
  const arq = join('src', 'app', '(app)', ...rota.split('/').filter(Boolean), 'page.tsx');
  const src = ler(...arq.split(/[\\/]/));
  const chave = MODULOS.find((m) => m.rota === rota).chave;
  t(`${rota} chama exigirModuloHabilitado('${chave}')`,
    src.includes(`exigirModuloHabilitado('${chave}')`));
  t(`${rota} não lê dado nem consome API`,
    !/captacao-data|matriculas-data|fetch\(|process\.env/.test(src));
}

for (const rota of DISPONIVEIS) {
  const chave = rota.slice(1);
  const src = ler('src', 'app', '(app)', chave, 'page.tsx');
  t(`${rota} também passa pelo gate (não confia em estar na Fase 1)`,
    src.includes(`exigirModuloHabilitado('${chave}')`));
}

// --- 4. INVISIBILIDADE NAS SUPERFÍCIES DE NAVEGAÇÃO -------------------------
console.log('\n4 · Módulos bloqueados somem da navegação');

/**
 * Remove comentários antes de asserir sobre CÓDIGO. Sem isso, um comentário
 * que cita a própria construção (ou que proíbe uma expressão nomeando-a) faz o
 * teste disparar sobre a documentação em vez do comportamento.
 */
function semComentarios(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
}

const nav = semComentarios(ler('src', 'components', 'sidebar-nav.tsx'));

t('sidebar e menu mobile derivam de modulosHabilitados()',
  (nav.match(/modulosHabilitados\(\)/g) || []).length === 2,
  `ocorrências no código: ${(nav.match(/modulosHabilitados\(\)/g) || []).length}`);

t('a navegação não tem lista própria de rotas hardcoded',
  !/'\/ads'|'\/organico'|'\/gestao'|'\/arquitetura'/.test(nav));

// Varre TODO o src em busca de link para rota bloqueada.
function tsx(dir) {
  const saida = [];
  for (const nome of readdirSync(join(ROOT, dir))) {
    const rel = `${dir}/${nome}`;
    if (statSync(join(ROOT, rel)).isDirectory()) saida.push(...tsx(rel));
    else if (/\.tsx?$/.test(nome)) saida.push(rel);
  }
  return saida;
}
const fontes = tsx('src').filter((f) => !f.endsWith('lib/fases.ts'));

for (const rota of BLOQUEADAS) {
  const culpados = fontes.filter((f) => {
    // Ignora a própria página da rota bloqueada.
    if (f.includes(`app/(app)${rota}/page.tsx`)) return false;
    return ler(...f.split('/')).includes(`href="${rota}"`) || ler(...f.split('/')).includes(`href='${rota}'`);
  });
  t(`nenhum link interno aponta para ${rota}`, culpados.length === 0, culpados.join(', '));
}

t('a home lista fases futuras sem transformá-las em link',
  (() => {
    const home = ler('src', 'app', '(app)', 'page.tsx');
    // Os cards clicáveis vêm de modulosHabilitados(); as fases futuras saem
    // como <li>, não como <Link>.
    return home.includes('modulosHabilitados()') && home.includes('<li');
  })());

// --- 5. IDENTIFICAÇÃO ACADÊMICA ---------------------------------------------
console.log('\n5 · Identificação acadêmica visível');

const shell = ler('src', 'components', 'app-shell.tsx');
const ident = ler('src', 'lib', 'identidade.ts');

t('o selo de dados sintéticos existe e tem texto inequívoco',
  ident.includes("'Ambiente acadêmico · dados sintéticos'"));

t('o selo aparece no desktop E no mobile',
  (shell.match(/<SeloSintetico/g) || []).length >= 2);

// Sobre o CÓDIGO, não sobre os comentários: o comentário que veta a expressão
// precisa poder nomeá-la.
t('nenhuma formulação ambígua ("dados reais") chega à tela',
  !/dados reais/i.test(semComentarios(ident)) && !/dados reais/i.test(semComentarios(shell)));

console.log(`\n${falhas === 0 ? 'TODOS OS ' + n + ' TESTES PASSARAM ✓' : falhas + ' de ' + n + ' TESTES FALHARAM ✗'}`);
process.exit(falhas === 0 ? 0 : 1);
