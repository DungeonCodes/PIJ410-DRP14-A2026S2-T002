// Proteção da baseline e contratos de roteamento. Não grava arquivos nem atualiza hashes.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { CURRENT_UI_VERSION, UI_VERSIONS, canonicalTarget, isUIVersion, versionedPath } from '../src/lib/interface.ts';
import { MODULOS, moduloDaRota, modulosDaVersao, rotaHabilitada, rotaHabilitadaNaVersao } from '../src/lib/fases.ts';
import { BASELINE_V1 } from './ui-v1-baseline.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
assert.equal(CURRENT_UI_VERSION, UI_VERSIONS[0], 'V2 não é promovida automaticamente');
assert.deepEqual(UI_VERSIONS, ['v1', 'v2']);
assert.equal(isUIVersion('v3'), false);
assert.equal(isUIVersion('old'), false);
for (const version of UI_VERSIONS) {
  const chavesDaVersao = new Set(modulosDaVersao(version).map((m) => m.chave));
  for (const modulo of MODULOS) {
    const path = versionedPath(version, modulo.rota);
    assert.equal(moduloDaRota(path)?.chave, modulo.chave);
    assert.equal(rotaHabilitada(path), modulo.habilitado);
    assert.equal(rotaHabilitadaNaVersao(version, path), modulo.habilitado && chavesDaVersao.has(modulo.chave));
  }
  assert.equal(rotaHabilitadaNaVersao(version, versionedPath(version, '/organico/subrota')), false);
}
assert.deepEqual(modulosDaVersao('v1').map((m) => m.chave), ['captacao', 'matriculas']);
assert.deepEqual(modulosDaVersao('v2').map((m) => m.chave),
  ['captacao', 'matriculas', 'ads', 'ads-google', 'ads-meta', 'ads-estrategia']);
assert.equal(canonicalTarget('/captacao', { safras: ['2025', '2026'] }),
  `${versionedPath(CURRENT_UI_VERSION, '/captacao')}?safras=2025&safras=2026`);
assert.equal(canonicalTarget('/'), versionedPath(CURRENT_UI_VERSION));
assert.doesNotMatch(read('src/ui/v1/index.ts'), /'\/ads(?:\/|')/, 'V1 não registra páginas Ads');
for (const route of ['/ads', '/ads/google', '/ads/meta', '/ads/estrategia']) {
  assert.ok(read('src/ui/v2/index.ts').includes(`'${route}'`), `V2 registra ${route}`);
}
assert.match(read('src/ui/v2/pages/google.tsx'), /<GoogleV1 \{\.\.\.props\} \/>/, 'Baseline Google é preservada na composição V2');
assert.match(read('src/ui/v2/pages/google.tsx'), /<PrevisaoCPRSazonal \/>/);
assert.match(read('src/components/sidebar-nav.tsx'), /versionedPath\(version, m\.rota\)/);
assert.match(read('src/ui/v1/pages/home.tsx'), /versionedPath\(version, m\.rota\)/);
assert.match(read('src/components/filtros.tsx'), /usePathname\(\)/, 'Filtros conservam o prefixo da versão');
for (const [path, expected] of Object.entries(BASELINE_V1)) {
  const normalized = read(path).replace(/\r\n/g, '\n');
  assert.equal(createHash('sha256').update(normalized).digest('hex'), expected,
    `Baseline V1 modificada: ${path}. Exceção crítica exige motivo documentado e revisão humana.`);
}
function checkUI(path) {
  for (const entry of readdirSync(`${root}${path}`, { withFileTypes: true })) {
    const next = `${path}/${entry.name}`;
    if (entry.isDirectory()) checkUI(next);
    else assert.equal(/\.(json|csv|xlsx|jsonl)$/.test(entry.name), false, `Dataset duplicado em ${next}`);
  }
}
checkUI('src/ui');
console.log(`UI: composição histórica V1/V2, aliases e gates verificados; ${Object.keys(BASELINE_V1).length} arquivos protegidos.`);
