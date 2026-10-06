// Gera apenas o novo artefato derivado do dataset acadêmico existente. Sem rede/relógio.
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { executarSazonal } from '../src/lib/ads/google-sazonal.ts';

const args = process.argv.slice(2);
if (args.some((a) => a !== '--verificar')) throw new Error('Única opção permitida: --verificar');
const fonte = new URL('../src/data/ads-sintetico.json', import.meta.url);
const origem = readFileSync(fonte, 'utf8');
const dataset = JSON.parse(origem);
const resultado = { ...executarSazonal(dataset.google, dataset.meta), datasetSha256: createHash('sha256').update(origem).digest('hex') };
const serializar = (r) => `${JSON.stringify(r, (_k, v) => typeof v === 'number' ? Number(v.toFixed(12)) : v, 2)}\n`;
const texto = serializar(resultado);
// Segunda execução independente obrigatória; inclui métricas, pontes e todas as previsões.
if (texto !== serializar({ ...executarSazonal(dataset.google, dataset.meta), datasetSha256: resultado.datasetSha256 })) throw new Error('Não reproduzível');
const destino = new URL('../src/data/google-cpr-sazonal.json', import.meta.url);
if (args.includes('--verificar')) {
  if (readFileSync(destino, 'utf8') !== texto) throw new Error('Artefato sazonal divergente');
} else writeFileSync(destino, texto, 'utf8');
console.log(JSON.stringify({ audit: resultado.audit, trainPeriod: resultado.trainPeriod, testPeriod: resultado.testPeriod,
  finalTrainPeriod: resultado.finalTrainPeriod, baselineMetrics: resultado.baselineMetrics, modelMetrics: resultado.modelMetrics,
  comparison: resultado.comparison, walkForward: resultado.walkForward.metricas, forecastBridges: resultado.forecastBridges,
  forecastPeriod: [resultado.futureForecast[0].periodo, resultado.futureForecast.at(-1).periodo], sha256: createHash('sha256').update(texto).digest('hex'), verificacao: args.includes('--verificar') }, null, 2));
