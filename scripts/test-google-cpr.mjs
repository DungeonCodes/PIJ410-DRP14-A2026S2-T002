import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { gerarAds, ADS_SEED } from '../src/lib/sintetico/gerar-ads.ts';
import { metricasGoogle, metricasMeta, razao, somaCompleta } from '../src/lib/ads/metricas.ts';
import { prepararAmostras, separarTemporal, treinarLinear, preverLinear, metricasRegressao, executarExperimento } from '../src/lib/ads/google-ml.ts';

const dataset = gerarAds();
assert.deepEqual(dataset, gerarAds());
assert.notDeepEqual(dataset, gerarAds('outro-cenario-ads'));
assert.equal(razao(20, 0), null);
assert.equal(razao(0, 5), 0);
assert.equal(somaCompleta([2, null]), null);
assert.equal(somaCompleta([]), null);
assert.throws(() => razao(-1, 2));
assert.throws(() => razao(1, -2));
const linha = (investimento, conversoes) => ({ ...dataset.google[0], investimento, conversoes });
assert.equal(metricasGoogle([linha(20, 2), linha(80, 4)]).cpr, 100 / 6);
assert.throws(() => metricasMeta(dataset.social));
assert.equal(metricasGoogle([linha(10, 0)]).cpr, null);
assert.equal(metricasGoogle([linha(null, 2)]).cpr, null);

const { amostras, excluidas } = prepararAmostras(dataset.google);
assert.ok(excluidas > 0);
assert.ok(amostras.every((a) => a.featureDisponivelEm <= a.emissao && a.periodoFeature < a.emissao));
assert.throws(() => prepararAmostras([...dataset.google, dataset.google[0]]));
const split = separarTemporal(amostras);
assert.ok(split.treino.every((a) => a.targetDisponivelEm < '2021-07-01'));
assert.ok(split.teste.every((a) => a.emissao >= '2021-07-01'));
assert.ok(split.purgadas > 0);
assert.throws(() => separarTemporal([{ ...amostras[0], featureDisponivelEm: '2099-01-01' }, ...amostras.slice(1)]));

// Só variar o outcome de t modifica y, nunca as features emitidas no início de t.
const alvo = dataset.google.find((l) => l.campanha === 'Cenario-A' && l.periodo === '2022-12-01');
const modificado = dataset.google.map((l) => l === alvo ? { ...l, investimento: l.investimento * 7, conversoes: l.conversoes / 2 } : l);
const original = amostras.find((a) => a.campanha === alvo.campanha && a.emissao === alvo.periodo);
const alterada = prepararAmostras(modificado).amostras.find((a) => a.campanha === alvo.campanha && a.emissao === alvo.periodo);
assert.deepEqual(original.x, alterada.x);
assert.notEqual(original.y, alterada.y);

// Solver conferido contra uma relação conhecida, incluindo extrapolação.
const x = Array.from({ length: 20 }, (_, i) => [i, i % 3]);
const y = x.map(([a, b]) => 7 + 2 * a - 3 * b);
const conhecido = treinarLinear(x, y);
assert.ok(Math.abs(preverLinear(conhecido, [25, 2]) - 51) < 1e-9);
assert.throws(() => treinarLinear(x.map(([a]) => [a, a]), y));
assert.deepEqual(metricasRegressao([1, 2, 3], [1, 2, 3]), { mae: 0, rmse: 0, r2: 1 });
assert.equal(metricasRegressao([3, 3], [3, 4]).r2, null);
assert.throws(() => metricasRegressao([], []));
assert.throws(() => metricasRegressao([1], [NaN]));

// Alterar TODOS os outcomes de teste não altera o scaler nem o ajuste de treino.
const antes = executarExperimento(dataset.google);
const depois = executarExperimento(dataset.google.map((l) => l.periodo >= '2021-07-01' && l.investimento !== null ? { ...l, investimento: l.investimento * 2 } : l));
assert.deepEqual(antes.modelo, depois.modelo);
assert.deepEqual(antes, executarExperimento(dataset.google));
for (const seed of ['ads-alfa', 'ads-beta', 'ads-gama']) {
  const resultado = executarExperimento(gerarAds(seed).google);
  assert.ok(Number.isFinite(resultado.metricas.linear.mae));
  assert.ok(Number.isFinite(resultado.metricas.persistencia.rmse));
}
const versionado = JSON.parse(readFileSync(new URL('../src/data/ads-sintetico.json', import.meta.url), 'utf8'));
assert.deepEqual(versionado, gerarAds(ADS_SEED));
// O runtime apresenta resultados de ML somente por um componente ligado ao Google.
const arquivosRuntime = readdirSync(new URL('../src/', import.meta.url), { recursive: true }).filter((p) => /\.tsx?$/.test(p));
for (const arquivo of arquivosRuntime) {
  const fonte = readFileSync(new URL(`../src/${arquivo.replaceAll('\\', '/')}`, import.meta.url), 'utf8');
  if (fonte.includes('google-cpr-experimento.json')) assert.equal(arquivo.replaceAll('\\', '/'), 'components/google-cpr-resultados.tsx');
  if (fonte.includes("from '@/components/google-cpr-resultados'")) assert.equal(arquivo.replaceAll('\\', '/'), 'ui/v1/pages/google.tsx');
  if (fonte.includes('executarExperimento(') || fonte.includes('treinarLinear(')) assert.equal(arquivo.replaceAll('\\', '/'), 'lib/ads/google-ml.ts');
}
console.log('Google CPR: determinismo, métricas, QR, maturação, split, ausência e prevenção de leakage verificados.');
