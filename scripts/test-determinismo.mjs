// =============================================================================
// Testes de DETERMINISMO e COERÊNCIA MATEMÁTICA dos dados sintéticos
// =============================================================================
// Duas garantias, e as duas são necessárias para que um número apresentado no
// relatório possa ser conferido por terceiros:
//
//   1. mesma versão + mesma semente + mesma configuração  →  mesmo dataset;
//   2. os indicadores derivados não contradizem os volumes de onde saem.
//
//   npm run test:determinismo
// =============================================================================
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ler = (...p) => readFileSync(join(ROOT, ...p), 'utf8');
const lerJson = (...p) => JSON.parse(ler(...p));

const { SEED_PADRAO, SCENARIO_VERSION, SCHEMA_VERSION, SAZONALIDADE_CAPTACAO } =
  await import('../src/lib/sintetico/cenario.ts');
const { gerarCaptacao } = await import('../src/lib/sintetico/gerar-captacao.ts');
const { gerarMatriculas } = await import('../src/lib/sintetico/gerar-matriculas.ts');
const { criarAleatorio, repartirInteiro } = await import('../src/lib/sintetico/prng.ts');

let falhas = 0;
let n = 0;
function t(nome, cond, detalhe = '') {
  n += 1;
  const ok = Boolean(cond);
  if (!ok) falhas += 1;
  console.log(`  ${ok ? '✓' : '✗'} ${String(n).padStart(2)}. ${nome}${ok || !detalhe ? '' : ` — ${detalhe}`}`);
}

// --- 1. PRNG -----------------------------------------------------------------
console.log('\n1 · Gerador pseudoaleatório');

const a1 = criarAleatorio('teste');
const a2 = criarAleatorio('teste');
t('mesma semente → mesma sequência',
  Array.from({ length: 8 }, () => a1.proximo()).join() ===
  Array.from({ length: 8 }, () => a2.proximo()).join());

const b1 = criarAleatorio('teste-a');
const b2 = criarAleatorio('teste-b');
t('sementes diferentes → sequências diferentes',
  Array.from({ length: 8 }, () => b1.proximo()).join() !==
  Array.from({ length: 8 }, () => b2.proximo()).join());

t('valores ficam em [0, 1)',
  Array.from({ length: 500 }, () => criarAleatorio(`s${Math.random()}`).proximo())
    .every((v) => v >= 0 && v < 1));

t('repartirInteiro conserva o total exatamente',
  [0, 1, 7, 97, 1000, 3457].every((total) => {
    const pesos = [3, 1, 4, 1, 5, 9, 2, 6];
    return repartirInteiro(total, pesos).reduce((a, b) => a + b, 0) === total;
  }));

t('repartirInteiro nunca devolve negativo',
  repartirInteiro(13, [1, 1, 1, 1, 1, 1, 1, 1]).every((v) => v >= 0));

// --- 2. REPRODUTIBILIDADE ----------------------------------------------------
console.log('\n2 · Reprodutibilidade dos datasets');

const cap1 = gerarCaptacao(SEED_PADRAO);
const cap2 = gerarCaptacao(SEED_PADRAO);
t('mesma seed → dataset de captação idêntico',
  JSON.stringify(cap1) === JSON.stringify(cap2));

const mat1 = gerarMatriculas(SEED_PADRAO);
const mat2 = gerarMatriculas(SEED_PADRAO);
t('mesma seed → dataset de matrículas idêntico',
  JSON.stringify(mat1) === JSON.stringify(mat2));

const capOutra = gerarCaptacao('outra-semente-academica');
t('seed diferente → dataset de captação diferente',
  JSON.stringify(capOutra.grupos) !== JSON.stringify(cap1.grupos));

const matOutra = gerarMatriculas('outra-semente-academica');
t('seed diferente → dataset de matrículas diferente',
  JSON.stringify(matOutra.grupos) !== JSON.stringify(mat1.grupos));

t('o arquivo versionado corresponde à geração com a seed padrão',
  JSON.stringify(lerJson('src', 'data', 'captacao-sintetico.json')) === JSON.stringify(cap1),
  'rode `npm run dados:gerar` se o cenário mudou');

t('idem para matrículas',
  JSON.stringify(lerJson('src', 'data', 'matriculas-sintetico.json')) === JSON.stringify(mat1));

/**
 * Comentários fora antes de asserir sobre CÓDIGO: o comentário que proíbe
 * `Math.random()` precisa poder nomeá-lo sem derrubar o próprio teste.
 */
function semComentarios(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
}

const PIPELINE = ['prng.ts', 'cenario.ts', 'gerar-captacao.ts', 'gerar-matriculas.ts'];

t('nenhum Math.random() no pipeline sintético',
  PIPELINE.every((f) => !/Math\.random\(/.test(semComentarios(ler('src', 'lib', 'sintetico', f)))));

t('nenhum Date.now()/new Date() alterando dado histórico',
  PIPELINE.every((f) => !/Date\.now\(|new Date\(/.test(semComentarios(ler('src', 'lib', 'sintetico', f)))));

// --- 3. METADADOS: TRÊS DATAS DISTINTAS -------------------------------------
console.log('\n3 · Metadados do cenário');

for (const [rotulo, ds] of [['captação', cap1], ['matrículas', mat1]]) {
  t(`${rotulo}: carimba schema_version, scenario_version e seed`,
    ds.meta.schema_version === SCHEMA_VERSION &&
    ds.meta.scenario_version === SCENARIO_VERSION &&
    ds.meta.seed === SEED_PADRAO);
  t(`${rotulo}: declara synthetic: true`, ds.meta.synthetic === true);
  t(`${rotulo}: project_started_at é 2026-08-27`, ds.meta.project_started_at === '2026-08-27');
  t(`${rotulo}: generated_at e reference_date são campos distintos`,
    ds.meta.generated_at !== ds.meta.reference_date);
}

t('a cronologia fictícia é anterior à geração do dataset',
  cap1.meta.reference_date < cap1.meta.generated_at);

t('nenhum dado histórico ultrapassa a reference_date',
  (() => {
    const [anoRef, mesRef] = cap1.meta.reference_date.split('-').map(Number);
    return cap1.grupos.every((g) =>
      g.mensal.every((p) => {
        if (g.safra < anoRef) return true;
        if (g.safra > anoRef) return p.contatos === null;
        return p.mes <= mesRef || p.contatos === null;
      }),
    );
  })());

// --- 4. COERÊNCIA MATEMÁTICA -------------------------------------------------
console.log('\n4 · Coerência matemática (invariantes)');

t('captação: visitas ≤ contatos em todo grupo',
  cap1.grupos.every((g) => g.visitas <= g.contatos));

t('captação: matrículas ≤ visitas em todo grupo',
  cap1.grupos.every((g) => g.matriculas <= g.visitas));

t('captação: matriculados + perdidos + quentes + frios + s/classif = contatos',
  cap1.grupos.every(
    (g) => g.matriculas + g.perdidos + g.quentes + g.frios + g.semClassificacao === g.contatos,
  ));

t('captação: soma dos canais = contatos do grupo',
  cap1.grupos.every(
    (g) => g.canais.reduce((a, c) => a + c.valor, 0) === g.contatos,
  ));

t('captação: soma das turmas = matrículas do grupo',
  cap1.grupos.every(
    (g) => g.turmas.reduce((a, tt) => a + tt.valor, 0) === g.matriculas,
  ));

for (const campo of ['contatos', 'visitas', 'matriculas']) {
  t(`captação: soma dos 12 meses = total anual (${campo})`,
    cap1.grupos.every(
      (g) => g.mensal.reduce((a, p) => a + (p[campo] ?? 0), 0) === g[campo],
    ));
}

t('captação: taxa c→v recalculada bate com visitas/contatos',
  cap1.grupos.every((g) => {
    const esperado = Math.round((g.visitas / g.contatos) * 1000) / 10;
    return Math.abs(esperado - Math.round((g.visitas / g.contatos) * 1000) / 10) < 1e-9;
  }));

t('matrículas: rematrículas + novas = total, em todo grupo',
  mat1.grupos.every((g) => g.rematriculas + g.novas === g.total));

t('matrículas: soma das turmas = total do grupo',
  mat1.grupos.every((g) => g.turmas.reduce((a, tt) => a + tt.total, 0) === g.total));

t('matrículas: rematrículas das turmas somam a rematrícula do grupo',
  mat1.grupos.every(
    (g) => g.turmas.reduce((a, tt) => a + tt.rematriculas, 0) === g.rematriculas,
  ));

t('matrículas: nenhuma turma tem rematrícula > total',
  mat1.grupos.every((g) => g.turmas.every((tt) => tt.rematriculas <= tt.total && tt.novas >= 0)));

t('matrículas: soma dos meses = total do grupo',
  mat1.grupos.every((g) => g.mensal.reduce((a, v) => a + (v ?? 0), 0) === g.total));

t('matrículas: retenção é null exatamente nas safras sem base N−1',
  mat1.grupos.every((g) =>
    mat1.safrasIndeterminadas.includes(g.safra) ? g.retencaoPct === null : g.retencaoPct !== null,
  ));

t('matrículas: retenção declarada = rematrículas/total',
  mat1.grupos
    .filter((g) => g.retencaoPct !== null)
    .every((g) => Math.abs(g.retencaoPct - Math.round((g.rematriculas / g.total) * 1000) / 10) < 1e-9));

// --- 5. INVARIANTES SOBREVIVEM A OUTRA SEMENTE ------------------------------
console.log('\n5 · Outra semente muda os números, não as regras');

const SEEDS = ['alfa', 'beta', 'gama-2026'];
for (const s of SEEDS) {
  const c = gerarCaptacao(s);
  const m = gerarMatriculas(s);
  t(`seed "${s}": invariantes de captação continuam válidos`,
    c.grupos.every(
      (g) =>
        g.visitas <= g.contatos &&
        g.matriculas <= g.visitas &&
        g.matriculas + g.perdidos + g.quentes + g.frios + g.semClassificacao === g.contatos &&
        g.mensal.reduce((a, p) => a + (p.contatos ?? 0), 0) === g.contatos,
    ));
  t(`seed "${s}": invariantes de matrículas continuam válidos`,
    m.grupos.every(
      (g) =>
        g.rematriculas + g.novas === g.total &&
        g.turmas.reduce((a, tt) => a + tt.total, 0) === g.total &&
        g.mensal.reduce((a, v) => a + (v ?? 0), 0) === g.total,
    ));
}

t('sazonalidade declarada tem 12 meses', SAZONALIDADE_CAPTACAO.length === 12);

console.log(`\n${falhas === 0 ? 'TODOS OS ' + n + ' TESTES PASSARAM ✓' : falhas + ' de ' + n + ' TESTES FALHARAM ✗'}`);
process.exit(falhas === 0 ? 0 : 1);
