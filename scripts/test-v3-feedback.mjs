import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calcularAlcanceMeta, calcularLeadsGoogle, calcularLeadsMeta, efetivacaoMensal } from '../src/lib/v3/calculos.ts';

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');
const matriculas = JSON.parse(read('src/data/matriculas-sintetico.json'));
const ads = JSON.parse(read('src/data/ads-sintetico.json'));
const ml = JSON.parse(read('src/data/google-cpr-sazonal.json'));

assert.deepEqual(efetivacaoMensal([
  { periodo: '2022-01', rotulo: 'Jan/2022', visitas: 20, matriculas: 5 },
  { periodo: '2022-02', rotulo: 'Fev/2022', visitas: 0, matriculas: 0 },
  { periodo: '2022-03', rotulo: 'Mar/2022', visitas: null, matriculas: null },
]).map((p) => p.percentual), [25, null, null]);
assert.equal(calcularLeadsGoogle(100), 7);
assert.equal(calcularLeadsGoogle(null), null);
assert.equal(calcularLeadsMeta(100), 55);
assert.equal(calcularAlcanceMeta(100, 10), 730);
assert.equal(calcularAlcanceMeta(null, 10), null);

const grupo = matriculas.grupos.find((g) => g.safra === 2023 && g.ciclo === 'EI');
assert.ok(grupo.turmas.some((t) => t.turma === 'Infantil 1' && t.total === t.novas + t.rematriculas));
assert.ok(matriculas.safrasIndeterminadas.includes(2022));
assert.ok(ads.google[0].cliques !== undefined && ads.google[0].conversoes !== undefined);
assert.ok(ads.social[0].indicador === 'conversa' && ads.social.some((l) => l.indicador === 'interacao'));
assert.equal(ml.modelMetrics.r2 < 0, true);
assert.equal(ml.modelMetrics.mae > ml.baselineMetrics.persistencia.mae, true);
assert.equal(ml.modelMetrics.mae < ml.baselineMetrics.sazonal.mae, true);

const v3 = read('src/ui/v3/pages/estrategia.tsx') + read('src/ui/v3/graficos.tsx');
assert.match(v3, /Bases sintéticas independentes/);
assert.doesNotMatch(v3, /matrículas (geradas|do Google|do Meta)/i);
assert.match(read('src/ui/v3/previsao.tsx'), /Previsão experimental · desempenho limitado/);
assert.equal(ads.meta.synthetic, true);
console.log('V3: cálculos, ausência, séries existentes, limites de Ads e ML verificados.');
