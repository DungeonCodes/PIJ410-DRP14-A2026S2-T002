// Proteção da baseline e contratos de roteamento. Não grava arquivos nem atualiza hashes.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { CURRENT_UI_VERSION, UI_VERSIONS, canonicalTarget, isUIVersion, versionedPath } from '../src/lib/interface.ts';
import { MODULOS, moduloDaRota, rotaHabilitada } from '../src/lib/fases.ts';
import { BASELINE_V1 } from './ui-v1-baseline.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
assert.equal(CURRENT_UI_VERSION, UI_VERSIONS[0], 'V2 não é promovida automaticamente');
assert.deepEqual(UI_VERSIONS, ['v1', 'v2']);
assert.equal(isUIVersion('v3'), false);
assert.equal(isUIVersion('old'), false);
for (const version of UI_VERSIONS) {
  for (const modulo of MODULOS) {
    const path = versionedPath(version, modulo.rota);
    assert.equal(moduloDaRota(path)?.chave, modulo.chave);
    assert.equal(rotaHabilitada(path), modulo.habilitado);
  }
  assert.equal(rotaHabilitada(versionedPath(version, '/organico/subrota')), false);
}
assert.equal(canonicalTarget('/ads/google', { anos: '2021,2022', campanhas: 'Cenario-A' }),
  `${versionedPath(CURRENT_UI_VERSION, '/ads/google')}?anos=2021%2C2022&campanhas=Cenario-A`);
assert.equal(canonicalTarget('/captacao', { safras: ['2025', '2026'] }),
  `${versionedPath(CURRENT_UI_VERSION, '/captacao')}?safras=2025&safras=2026`);
assert.equal(canonicalTarget('/'), versionedPath(CURRENT_UI_VERSION));
assert.match(read('src/ui/v2/index.ts'), /pages:\s*\{\s*\.\.\.UI_V1\.pages,\s*'\/ads\/google': GoogleV2\s*\}/,
  'Única evolução técnica V2 autorizada: Google Ads sazonal; demais páginas herdadas');
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
console.log(`UI: versões, aliases, gates e única extensão técnica V2 verificados; ${Object.keys(BASELINE_V1).length} arquivos V1 protegidos.`);
