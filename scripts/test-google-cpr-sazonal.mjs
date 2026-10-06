import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { agregarSerie, ajustarSazonal, descreverSazonalidade, executarSazonal, moverMes, prepararSazonal, preverHorizonte } from '../src/lib/ads/google-sazonal.ts';

const dataset = JSON.parse(readFileSync(new URL('../src/data/ads-sintetico.json', import.meta.url), 'utf8'));
const { google, meta } = dataset;
const serie = agregarSerie(google), samples = prepararSazonal(serie), a = executarSazonal(google, meta);
assert.deepEqual(a, executarSazonal(google, meta));
assert.deepEqual(agregarSerie([...google].reverse()), serie, 'Ordem das linhas não altera agregação');
assert.throws(() => agregarSerie([...google, google[0]]));
assert.throws(() => executarSazonal(google, { ...meta, synthetic: false }));
assert.throws(() => executarSazonal(google.filter((l) => l.periodo >= '2022-01-01'), meta), /insuficiente/);
assert.equal(serie.length, 73);
assert.equal(a.audit.mesesValidos, 71);
assert.equal(a.audit.cprValidosCampanha, 284);
assert.equal(serie.find((m) => m.periodo === '2018-11-01').cpr, null);
assert.equal(serie.at(-1).cpr, null, 'Mês provisório não vira observação');
const primeiro = google.filter((l) => l.periodo === serie[0].periodo);
assert.equal(serie[0].cpr, primeiro.reduce((s, l) => s + l.investimento, 0) / primeiro.reduce((s, l) => s + l.conversoes, 0));
assert.notEqual(serie[0].cpr, primeiro.reduce((s, l) => s + l.investimento / l.conversoes, 0) / primeiro.length);
assert.ok(serie.find((m) => m.periodo === '2022-12-01').cpr > 0, 'Zero numa campanha não elimina custo do total com denominador agregado positivo');
const semMes = agregarSerie(google.filter((l) => l.periodo !== '2020-07-01'));
assert.equal(semMes.find((m) => m.periodo === '2020-07-01').motivo, 'mes_ausente');
assert.equal(a.seasonalIndex.length, 12);
assert.equal(a.seasonalIndex[10].nAnos, 5);
assert.ok(descreverSazonalidade(serie).every((s) => s.nAnos >= 5));
assert.ok(samples.every((s) => s.lags.every((l) => l.periodo < s.periodo && l.disponivelEm <= s.periodo)));
assert.equal(a.trainPeriod.amostras, 44);
assert.equal(a.trainPeriod.fim, '2021-11-01', 'Dezembro imaturo no corte é purgado');
assert.equal(a.testPeriod.amostras, 12);
assert.equal(a.finalTrainPeriod.amostras, 57);
assert.deepEqual(a.features, ['month_sin', 'month_cos', 'time_index', 'cpr_t2', 'cpr_t12']);
// Outcomes de teste não alteram ajuste/scaler nem previsões de origem fixa.
const alterado = executarSazonal(google.map((l) => l.periodo >= '2022-01-01' && l.investimento !== null ? { ...l, investimento: l.investimento * 3 } : l), meta);
assert.deepEqual(a.evaluationModel, alterado.evaluationModel);
assert.deepEqual(a.testPredictions.map((r) => [r.linear, r.persistencia, r.sazonal]), alterado.testPredictions.map((r) => [r.linear, r.persistencia, r.sazonal]));
// Target contemporâneo não altera features emitidas para o mesmo mês.
const mod = prepararSazonal(agregarSerie(google.map((l) => l.periodo === '2022-03-01' ? { ...l, investimento: l.investimento * 2 } : l)));
assert.deepEqual(samples.find((s) => s.periodo === '2022-03-01').x, mod.find((s) => s.periodo === '2022-03-01').x);
assert.notEqual(samples.find((s) => s.periodo === '2022-03-01').y, mod.find((s) => s.periodo === '2022-03-01').y);
assert.ok(a.walkForward.previsoes.every((r) => r.ultimoTargetTreino < r.periodo && r.ultimoDisponivelEm <= r.periodo));
assert.equal(a.futureForecast.length, 12);
assert.equal(a.futureForecast[0].periodo, moverMes(serie.at(-1).periodo, 1));
assert.equal(a.futureForecast.at(-1).periodo, moverMes(serie.at(-1).periodo, 12));
assert.ok(a.futureForecast.every((r) => Number.isFinite(r.cprPrevisto) && r.lags.every((l) => l.periodo < r.periodo)));
assert.equal(a.forecastBridges[0].periodo, '2023-01-01');
assert.equal(a.futureForecast[1].lags[0].fonte, 'estimado', 'Março usa ponte de janeiro, não CPR provisório');
assert.equal(a.futureForecast.at(-1).lags[1].fonte, 'estimado', 'Janeiro seguinte usa ponte sazonal estimada');
assert.ok(a.futureForecast.some((p, i) => i && p.cprPrevisto < a.futureForecast[i - 1].cprPrevisto), 'Nenhum crescimento obrigatório');
const provis = executarSazonal(google.map((l) => l.cobertura === 'provisorio' ? { ...l, investimento: l.investimento * 100 } : l), meta);
assert.deepEqual(a.finalModel, provis.finalModel);
assert.deepEqual(a.futureForecast, provis.futureForecast, 'Valores provisórios nunca usados escondidos');
// Disponibilidade tardia altera elegibilidade, não é ignorada.
const tardio = serie.map((s) => s.periodo === '2021-11-01' ? { ...s, disponivelEm: '2022-03-01' } : s);
assert.ok(!prepararSazonal(tardio).some((s) => s.periodo === '2022-01-01'));
const ajustado = ajustarSazonal(samples, '2022-01-01');
const forecast = preverHorizonte(serie, ajustado.modelo, '2022-01-01', 12, '2022-01-01', 'linear');
assert.ok(forecast.previsoes.flatMap((p) => p.lags).filter((l) => l.periodo >= '2022-01-01').every((l) => l.fonte === 'estimado'));
// Só o componente V2 importa o novo artefato; modelo científico nunca treinado na UI.
for (const path of readdirSync(new URL('../src/', import.meta.url), { recursive: true }).filter((p) => /\.tsx?$/.test(p))) {
  const p = path.replaceAll('\\', '/'), s = readFileSync(new URL(`../src/${p}`, import.meta.url), 'utf8');
  if (s.includes("from '@/data/google-cpr-sazonal.json'")) assert.equal(p, 'ui/v2/components/previsao-cpr-sazonal.tsx');
  if (p.endsWith('.tsx')) assert.ok(!s.includes('executarSazonal(') && !s.includes('ajustarSazonal('));
}
console.log('CPR sazonal: agregação, ausência, maturação, purga, scaler, leakage, holdout recursivo, rolling origin, pontes e V2 verificados.');
