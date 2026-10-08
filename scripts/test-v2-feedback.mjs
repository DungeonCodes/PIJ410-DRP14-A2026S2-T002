import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { evolucaoTemporal } from '../src/ui/v2/temporal.ts';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const captacao = JSON.parse(read('src/data/captacao-sintetico.json'));
const matriculas = JSON.parse(read('src/data/matriculas-sintetico.json'));

assert.deepEqual(captacao.safras, matriculas.safras);
assert.deepEqual(captacao.ciclos, matriculas.ciclos);
assert.equal(captacao.grupos.every((g) => g.mensal.length === 12), true);
assert.equal(matriculas.grupos.every((g) => g.mensal.length === 12), true);

const mensal = (safras, ciclos) => {
  const grupos = captacao.grupos.filter((g) => safras.includes(g.safra) && ciclos.includes(g.ciclo));
  const pontos = (campo) => Array.from({ length: 12 }, (_, indice) => ({
    mes: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'][indice],
    mesIndice: indice,
    ...Object.fromEntries(safras.map((safra) => {
      const valores = grupos.filter((g) => g.safra === safra).map((g) => g.mensal[indice]?.[campo] ?? null);
      return [String(safra), valores.length && valores.some((v) => v !== null)
        ? valores.reduce((soma, v) => soma + (v ?? 0), 0) : null];
    })),
  }));
  return { mensal: { contatos: pontos('contatos'), visitas: pontos('visitas'), matriculas: pontos('matriculas') } };
};

const todos = evolucaoTemporal(mensal([2025, 2026], captacao.ciclos), [2025, 2026]);
assert.equal(todos.length, 24);
assert.equal(todos[0].periodo, '2025-01');
assert.equal(todos.at(-1).periodo, '2026-12');
assert.equal(todos[0].contatos, captacao.grupos.filter((g) => g.safra === 2025).reduce((n, g) => n + g.mensal[0].contatos, 0));
assert.deepEqual(
  [todos.find((p) => p.periodo === '2026-09').contatos,
    todos.find((p) => p.periodo === '2026-09').visitas,
    todos.find((p) => p.periodo === '2026-09').matriculas],
  [null, null, null], 'Mês futuro do dataset permanece ausente',
);

const filtrado = evolucaoTemporal(mensal([2025], ['EI']), [2025]);
assert.equal(filtrado.length, 12);
assert.equal(filtrado[0].contatos, captacao.grupos.find((g) => g.safra === 2025 && g.ciclo === 'EI').mensal[0].contatos);
assert.notEqual(filtrado[0].contatos, todos[0].contatos);

const vazio = evolucaoTemporal({ mensal: {
  contatos: [{ mes: 'Jan', mesIndice: 0, '2026': null }, { mes: 'Fev', mesIndice: 1, '2026': 0 }],
  visitas: [{ mes: 'Jan', mesIndice: 0, '2026': null }, { mes: 'Fev', mesIndice: 1, '2026': 0 }],
  matriculas: [{ mes: 'Jan', mesIndice: 0, '2026': null }, { mes: 'Fev', mesIndice: 1, '2026': 0 }],
} }, [2026]);
assert.deepEqual([vazio[0].contatos, vazio[0].visitas, vazio[0].matriculas], [null, null, null]);
assert.deepEqual([vazio[1].contatos, vazio[1].visitas, vazio[1].matriculas], [0, 0, 0]);

const paginaV1 = read('src/ui/v1/pages/captacao.tsx');
const paginaV2 = read('src/ui/v2/pages/captacao.tsx');
assert.equal((paginaV1.match(/<GraficoMensal/g) ?? []).length, 3);
assert.equal((paginaV2.match(/<GraficoMensal/g) ?? []).length, 0);
assert.ok(paginaV2.includes('<EvolucaoTemporal'));
for (const serie of ['Contatos', 'Visitas', 'Matrículas do funil']) {
  assert.ok(read('src/ui/v2/components/evolucao-temporal.tsx').includes(serie));
}
console.log('FB-V1-P1-001: granularidade mensal, filtros, ausência/zero e composição V1/V2 verificados.');
