// Requer build local em execução. Só consulta loopback, nunca ambientes publicados.
import assert from 'node:assert/strict';
import { CURRENT_UI_VERSION, UI_VERSIONS, versionedPath } from '../src/lib/interface.ts';
import { MODULOS } from '../src/lib/fases.ts';

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
function mainText(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert.ok(main, 'Conteúdo principal ausente');
  return main.replace(/<script\b[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
for (const modulo of [{ rota: '/', habilitado: true }, ...MODULOS]) {
  let previous;
  for (const version of UI_VERSIONS) {
    const path = versionedPath(version, modulo.rota);
    const { html } = await get(path, modulo.habilitado ? 200 : 404);
    if (!modulo.habilitado) continue;
    assert.ok(html.includes(`Versão de interface: <!-- -->${version.toUpperCase()}`) ||
      html.includes(`Versão de interface: ${version.toUpperCase()}`), `Identificador ausente em ${path}`);
    assert.ok(html.includes('Instituição Educacional Alfa') && html.includes('Ambiente acadêmico · dados sintéticos'));
    const text = mainText(html);
    if (previous !== undefined) assert.equal(text, previous, `Paridade inicial: ${modulo.rota}`);
    previous = text;
    const links = [...html.matchAll(/href="(\/(?!_next)[^"?#]*)[^" ]*"/g)].map((m) => m[1]);
    assert.ok(links.filter((link) => !link.startsWith('/_')).every((link) => link === `/${version}` || link.startsWith(`/${version}/`)),
      `Link troca de versão em ${path}`);
  }
  const canonical = await get(modulo.rota, modulo.habilitado ? 307 : 404);
  if (modulo.habilitado) assert.equal(canonical.location, versionedPath(CURRENT_UI_VERSION, modulo.rota));
}
for (const path of ['/captacao?safras=2025%2C2026&ciclos=EI', '/ads/google?anos=2022&campanhas=Cenario-A']) {
  const canonical = await get(path, 307);
  assert.equal(canonical.location, `/${CURRENT_UI_VERSION}${path}`);
  const first = await get(`/${UI_VERSIONS[0]}${path}`, 200);
  const second = await get(`/${UI_VERSIONS[1]}${path}`, 200);
  assert.equal(mainText(first.html), mainText(second.html), `Paridade com filtros: ${path}`);
}
for (const path of ['/v3/captacao', '/old/captacao', '/v1/inexistente', '/v2/ads/inexistente']) await get(path, 404);
console.table(rows);
console.log('HTTP: versões, canônicas, filtros, bloqueios e paridade inicial aprovados.');
