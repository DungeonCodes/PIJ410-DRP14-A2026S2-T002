// =============================================================================
// Geração dos datasets sintéticos versionados (FASE 1: Captação + Matrículas)
// =============================================================================
// Passo de PREPARAÇÃO LOCAL. A aplicação NUNCA gera dado em runtime: ela lê os
// JSONs que este script grava em `src/data/`. Cada regeração vira um diff
// auditável no git.
//
//   npm run dados:gerar                 usa a semente padrão do cenário
//   npm run dados:gerar -- --seed=x     gera com outra semente (não grava por
//                                       cima sem --escrever)
//
// Sem rede, sem token, sem leitura de qualquer base operacional.
// =============================================================================
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'src', 'data');

const { SEED_PADRAO, SCENARIO_VERSION, SCHEMA_VERSION } = await import('../src/lib/sintetico/cenario.ts');
const { gerarCaptacao } = await import('../src/lib/sintetico/gerar-captacao.ts');
const { gerarMatriculas } = await import('../src/lib/sintetico/gerar-matriculas.ts');

const argSeed = process.argv.find((a) => a.startsWith('--seed='));
const seed = argSeed ? argSeed.slice('--seed='.length) : SEED_PADRAO;
const escrever = !argSeed || process.argv.includes('--escrever');

const captacao = gerarCaptacao(seed);
const matriculas = gerarMatriculas(seed);

console.log('='.repeat(70));
console.log('DATASETS SINTÉTICOS — FASE 1');
console.log('='.repeat(70));
console.log(`schema_version   : ${SCHEMA_VERSION}`);
console.log(`scenario_version : ${SCENARIO_VERSION}`);
console.log(`seed             : ${seed}${argSeed ? '  (alternativa)' : '  (padrão)'}`);
console.log(`generated_at     : ${captacao.meta.generated_at}`);
console.log(`reference_date   : ${captacao.meta.reference_date}`);
console.log(`período histórico: ${captacao.safras[0]}–${captacao.safras[captacao.safras.length - 1]} (cronologia fictícia)`);
console.log();

const totC = captacao.grupos.reduce((a, g) => a + g.contatos, 0);
const totV = captacao.grupos.reduce((a, g) => a + g.visitas, 0);
const totM = captacao.grupos.reduce((a, g) => a + g.matriculas, 0);
console.log(`Captação  : ${captacao.grupos.length} grupos (safra × ciclo)`);
console.log(`            ${totC} contatos → ${totV} visitas → ${totM} matrículas`);
console.log(`            c→v ${((totV / totC) * 100).toFixed(1)}% · v→m ${((totM / totV) * 100).toFixed(1)}%`);

const totT = matriculas.grupos.reduce((a, g) => a + g.total, 0);
const totR = matriculas.grupos.reduce((a, g) => a + g.rematriculas, 0);
console.log(`Matrículas: ${matriculas.grupos.length} grupos (safra × ciclo)`);
console.log(`            ${totT} matrículas · ${totR} rematrículas · ${totT - totR} novas`);

if (!escrever) {
  console.log('\n(semente alternativa sem --escrever: nada foi gravado)');
  process.exit(0);
}

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'captacao-sintetico.json'), `${JSON.stringify(captacao, null, 1)}\n`, 'utf8');
writeFileSync(join(OUT, 'matriculas-sintetico.json'), `${JSON.stringify(matriculas, null, 1)}\n`, 'utf8');

console.log(`\nGravado: src/data/captacao-sintetico.json`);
console.log(`Gravado: src/data/matriculas-sintetico.json`);
console.log('\n[sem rede · sem token · nenhuma base operacional lida]');
