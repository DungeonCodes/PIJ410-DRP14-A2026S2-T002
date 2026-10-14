import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { cprTemporal, gerarAnunciosMeta, gerarPalavrasGoogle, rankingGoogle, rankingMeta, repartir } from '../src/lib/v4/ads.ts';

const dados = JSON.parse(readFileSync(new URL('../src/data/ads-sintetico.json', import.meta.url), 'utf8'));
const meta = dados.social.filter((l) => l.periodo.startsWith('2022-12'));
const google = dados.google.filter((l) => l.periodo.startsWith('2022-12'));
const anuncios = gerarAnunciosMeta(meta);
const palavras = gerarPalavrasGoogle(google);
assert.deepEqual(anuncios, gerarAnunciosMeta(meta));
assert.deepEqual(palavras, gerarPalavrasGoogle(google));
assert.equal(anuncios.length, 5);
assert.equal(palavras.length, 8);
assert.ok(anuncios.every((a) => a.nome.includes('fictício') && a.id.includes('Cenario-Social-A')));
assert.ok(palavras.every((p) => p.palavra.includes('Cenario-') && !/matrícula|pessoa|lead/i.test(p.palavra)));
const centavos = (n) => Math.round(n * 100);
assert.equal(anuncios.reduce((s, a) => s + centavos(a.investimento), 0), centavos(meta[0].investimento));
assert.equal(anuncios.reduce((s, a) => s + a.resultados, 0), meta[0].resultados);
for (const linha of google) {
  const partes = palavras.filter((p) => p.campanha === linha.campanha);
  assert.equal(partes.reduce((s, p) => s + centavos(p.custo), 0), centavos(linha.investimento));
  assert.equal(partes.reduce((s, p) => s + p.cliques, 0), linha.cliques);
  assert.equal(partes.reduce((s, p) => s + centavos(p.conversoes), 0), centavos(linha.conversoes));
  assert.ok(partes.every((p) => p.cpr === (p.conversoes === 0 ? null : p.custo / p.conversoes)));
}
assert.ok(rankingMeta(anuncios).slice(0, -1).every((a, i) => a.cpr <= rankingMeta(anuncios)[i + 1].cpr));
const validas = rankingGoogle(palavras).filter((p) => p.cpr !== null);
assert.ok(validas.slice(0, -1).every((p, i) => p.cpr <= validas[i + 1].cpr));
assert.ok(rankingGoogle(palavras).slice(-2).every((p) => p.cpr === null));
assert.deepEqual(repartir(null, [60, 40], 2), [null, null]);
assert.deepEqual(repartir(0, [60, 40], 2), [0, 0]);
const metaZero = gerarAnunciosMeta([{ ...meta[0], resultados: 0 }]);
assert.ok(metaZero.every((a) => a.cpr === null));
const googleAusente = gerarPalavrasGoogle([{ ...google[0], investimento: null, conversoes: null }]);
assert.ok(googleAusente.every((p) => p.cpr === null && p.custo === null && p.conversoes === null));
const empateMeta = [
  { id: 'B', investimento: 10, resultados: 2, cpr: 5 },
  { id: 'A', investimento: 10, resultados: 2, cpr: 5 },
  { id: 'C', investimento: 5, resultados: 0, cpr: null },
];
assert.deepEqual(rankingMeta(empateMeta).map((p) => p.id), ['A', 'B', 'C']);
assert.deepEqual(rankingGoogle(empateMeta.map((p) => ({ ...p, custo: p.investimento, conversoes: p.resultados }))).map((p) => p.id), ['A', 'B', 'C']);
const temporal = cprTemporal(google, meta, ['2022-12', '2022-11']);
assert.equal(temporal[0].cprGoogle, google.reduce((s, l) => s + l.investimento, 0) / google.reduce((s, l) => s + l.conversoes, 0));
assert.equal(temporal[0].cprMeta, meta[0].investimento / meta[0].resultados);
assert.deepEqual(temporal[1], { mes: '2022-11', cprGoogle: null, cprMeta: null });
assert.equal(cprTemporal([{ ...google[0], conversoes: 0 }], [{ ...meta[0], resultados: 0 }], ['2022-12'])[0].cprMeta, null);
assert.equal(cprTemporal([{ ...google[0], conversoes: 0 }], [{ ...meta[0], resultados: 0 }], ['2022-12'])[0].cprGoogle, null);
assert.ok(!('cprGeral' in temporal[0]));
const ui = readFileSync(new URL('../src/ui/v4/index.tsx', import.meta.url), 'utf8');
assert.match(ui, /GoogleV4/);
assert.match(ui, /MetaV4/);
assert.match(ui, /EstrategiaV4/);
for (const version of ['v1', 'v2', 'v3']) {
  const source = readFileSync(new URL(`../src/ui/${version}/index.ts`, import.meta.url), 'utf8');
  assert.doesNotMatch(source, /GoogleV4|MetaV4|EstrategiaV4|v4\/ads/);
}
console.log('V4 Ads: partições, CPR, rankings, ausência, zero, desempates e isolamento verificados.');
