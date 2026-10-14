import assert from 'node:assert/strict';
import { gerarPublicacoes, calcularScore, classificarPublicacoes, ORGANICO_CENARIO } from '../src/lib/v4/organico.ts';
import { calcularPlano, PLANO_OCUPACAO } from '../src/lib/v4/gestao.ts';

const a = gerarPublicacoes();
const b = gerarPublicacoes();
assert.deepEqual(a, b, 'mesma semente produz as mesmas publicações');
assert.equal(a.length, 12);
assert.equal(new Set(a.map((p) => p.id)).size, a.length);
assert.deepEqual(Object.keys(a[0]).sort(), ['alcance', 'id', 'interacoes', 'periodo', 'rotulo']);
assert.ok(a.every((p) => p.periodo.startsWith('2022-') && p.alcance !== null && p.alcance >= 0));
assert.ok(a.every((p) => p.interacoes === null || (p.interacoes >= 0 && p.interacoes <= p.alcance)));
assert.equal(a.filter((p) => p.interacoes === null).length, 1);
assert.equal(a.filter((p) => p.interacoes === 0).length, 1);
assert.equal(calcularScore({ id: 'sem', periodo: '2022-01', rotulo: 'sem', alcance: 100, interacoes: null }).score, null);
assert.equal(calcularScore({ id: 'zero-denom', periodo: '2022-01', rotulo: 'zero', alcance: 0, interacoes: 0 }).score, null);
assert.notEqual(calcularScore({ id: 'zero-real', periodo: '2022-01', rotulo: 'zero', alcance: 100, interacoes: 0 }).score, null);
assert.equal(ORGANICO_CENARIO.pesos.interacaoPorAlcance + ORGANICO_CENARIO.pesos.alcance, 1);

const ranking = classificarPublicacoes(a);
assert.equal(ranking.length, a.length);
assert.equal(ranking.at(-1).score, null, 'ausência fica fora do ranking');
assert.deepEqual(ranking.filter((p) => p.score !== null).map((p) => p.posicao), Array.from({ length: 11 }, (_, i) => i + 1));
assert.ok(ranking.slice(0, -2).every((p, i) => p.score >= ranking[i + 1].score));
const iguais = classificarPublicacoes([
  { id: 'ORG-B', periodo: '2022-01', rotulo: 'B', alcance: 100, interacoes: 10 },
  { id: 'ORG-A', periodo: '2022-01', rotulo: 'A', alcance: 100, interacoes: 10 },
]);
assert.deepEqual(iguais.map((p) => p.id), ['ORG-A', 'ORG-B'], 'ID resolve empate total');

const plano = calcularPlano();
assert.deepEqual(Object.keys(PLANO_OCUPACAO.turmas[0]).sort(), ['etapa', 'id', 'ocupacaoAlvo', 'vagas']);
assert.equal(plano.vagas, PLANO_OCUPACAO.turmas.reduce((s, t) => s + t.vagas, 0));
assert.equal(plano.vagasAlvo, plano.linhas.reduce((s, t) => s + Math.round(t.vagas * t.ocupacaoAlvo), 0));
assert.ok(plano.linhas.every((t) => t.vagasAlvo <= t.vagas && t.vagasAlvo >= 0));
assert.match(PLANO_OCUPACAO.origem, /independente/);
console.log('V4: geração sintética, ausências, zero, score, ordenação e premissas fictícias verificados.');
