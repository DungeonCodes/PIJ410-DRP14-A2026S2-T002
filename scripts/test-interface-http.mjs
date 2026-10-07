// Requer build local em execução. Só consulta loopback, nunca ambientes publicados.
import assert from 'node:assert/strict';
import { CURRENT_UI_VERSION, versionedPath } from '../src/lib/interface.ts';

const argument = process.argv.slice(2);
assert.ok(argument.length <= 1 && (!argument[0] || argument[0].startsWith('--url=')));
const base = new URL(argument[0]?.slice(6) ?? 'http://127.0.0.1:3101');
assert.ok(['127.0.0.1', 'localhost', '[::1]'].includes(base.hostname) && base.protocol === 'http:');

const rows = [];
async function get(path, expected) {
  const response = await fetch(new URL(path, base), { redirect: 'manual', signal: AbortSignal.timeout(20000) });
  const html = await response.text();
  assert.equal(response.status, expected, path);
  rows.push({ route: path, expected, result: response.status });
  return { html, location: response.headers.get('location') };
}

function linksDaNavegacao(html) {
  return [...html.matchAll(/href="(\/(?!_next)[^"?#]*)[^" ]*"/g)].map((match) => match[1]);
}

const v1Ativas = ['/v1', '/v1/captacao', '/v1/matriculas'];
const v1Ads = ['/v1/ads', '/v1/ads/google', '/v1/ads/meta', '/v1/ads/estrategia'];
const v2Ativas = ['/v2', '/v2/captacao', '/v2/matriculas', '/v2/ads', '/v2/ads/google', '/v2/ads/meta', '/v2/ads/estrategia'];

for (const path of v1Ativas) {
  const { html } = await get(path, 200);
  assert.ok(html.includes('V1'), `Identificador V1 ausente em ${path}`);
  assert.ok(linksDaNavegacao(html).every((link) => link === '/v1' || link.startsWith('/v1/')));
  assert.ok(!linksDaNavegacao(html).some((link) => link.startsWith('/v1/ads')), `Ads apareceu na navegação V1: ${path}`);
}
for (const path of v1Ads) await get(path, 404);

for (const path of v2Ativas) {
  const { html } = await get(path, 200);
  assert.ok(html.includes('V2'), `Identificador V2 ausente em ${path}`);
  assert.ok(linksDaNavegacao(html).every((link) => link === '/v2' || link.startsWith('/v2/')));
}

const captacaoV1 = await get('/v1/captacao?safras=2025&ciclos=EI', 200);
const captacaoV2 = await get('/v2/captacao?safras=2025&ciclos=EI', 200);
assert.ok(!captacaoV1.html.includes('Evolução temporal'));
assert.ok(captacaoV1.html.includes('Contatos por mês') && captacaoV1.html.includes('Visitas por mês'));
assert.ok(captacaoV2.html.includes('Evolução temporal'));
assert.ok(captacaoV2.html.includes('Séries exibidas na evolução temporal'));
assert.ok(!captacaoV2.html.includes('Contatos por mês') && !captacaoV2.html.includes('Visitas por mês'));
assert.ok(captacaoV2.html.includes('Matrículas do funil'));
assert.ok(captacaoV2.html.includes('Funil de captação') && captacaoV2.html.includes('Situação dos contatos'));
const captacaoV2OutroCiclo = await get('/v2/captacao?safras=2025&ciclos=EM', 200);
assert.notEqual(captacaoV2.html, captacaoV2OutroCiclo.html, 'Filtro de ciclo altera o recorte V2');
const matriculasV2 = await get('/v2/matriculas?safras=2025&ciclos=EI', 200);
assert.ok(matriculasV2.html.includes('Efetivação de matrículas por mês'), 'Histórico próprio de Matrículas preservado');

const googleV2 = await get('/v2/ads/google?anos=2022&campanhas=Cenario-A', 200);
assert.ok(googleV2.html.includes('data-experimento="cpr-sazonal-v2"'), 'Previsão sazonal ausente na V2');

for (const path of ['/v1/organico', '/v1/gestao', '/v1/arquitetura', '/v2/organico', '/v2/gestao', '/v2/arquitetura']) {
  await get(path, 404);
}

for (const path of ['/captacao?safras=2025%2C2026&ciclos=EI', '/matriculas']) {
  const canonical = await get(path, 307);
  assert.equal(canonical.location, `/${CURRENT_UI_VERSION}${path}`);
}
for (const path of ['/ads', '/ads/google', '/ads/meta', '/ads/estrategia']) await get(path, 404);
for (const path of ['/v3/captacao', '/old/captacao', '/v1/inexistente', '/v2/ads/inexistente']) await get(path, 404);

assert.equal(CURRENT_UI_VERSION, 'v1');
assert.equal(versionedPath(CURRENT_UI_VERSION, '/captacao'), '/v1/captacao');
console.table(rows);
console.log('HTTP: V1 pré-Ads, V2 com Ads/ML, aliases explícitos e bloqueios aprovados.');
