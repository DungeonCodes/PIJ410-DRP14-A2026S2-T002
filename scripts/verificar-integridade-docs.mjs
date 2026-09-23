// =============================================================================
// Verificador de integridade da ZONA CIENTÍFICA PROTEGIDA
// =============================================================================
// O scaffolding científico da UNIVESP já existia neste repositório antes da
// iniciativa de espelhamento arquitetural. Ele não pode ser reorganizado,
// reescrito nem "melhorado" — a aplicação acadêmica é construída AO REDOR dele.
//
// Este script não altera nada. Ele apenas calcula o SHA-256 de cada arquivo da
// zona protegida e compara com uma linha de base gravada FORA do repositório
// (no diretório temporário do sistema), para que nenhum arquivo de hash seja
// depositado dentro da documentação científica.
//
//   node scripts/verificar-integridade-docs.mjs --baseline   grava a linha de base
//   node scripts/verificar-integridade-docs.mjs --verificar  compara com ela
//
// Sai com código 1 se QUALQUER arquivo protegido mudou, sumiu ou apareceu.
// Fail closed: na dúvida, falha.
// =============================================================================
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASELINE_DIR = join(tmpdir(), 'pij410-integridade');
const BASELINE = join(BASELINE_DIR, 'baseline.json');

/**
 * Zona protegida. `docs/migracao-modelo/**` fica DE FORA por decisão explícita:
 * é a única área documental onde esta iniciativa pode escrever.
 */
const PROTEGIDO_DIRS = ['docs/univesp', 'docs/relatorio', 'outputs'];
const PROTEGIDO_GLOB_RAIZ = { dir: 'docs', ext: '.md' }; // docs/*.md, só nível 1

function listarArquivos(dir) {
  const abs = join(ROOT, dir);
  if (!existsSync(abs)) return [];
  const saida = [];
  for (const nome of readdirSync(abs)) {
    const p = join(abs, nome);
    if (statSync(p).isDirectory()) saida.push(...listarArquivos(relative(ROOT, p).replace(/\\/g, '/')));
    else saida.push(relative(ROOT, p).replace(/\\/g, '/'));
  }
  return saida;
}

export function arquivosProtegidos() {
  const saida = new Set();
  for (const d of PROTEGIDO_DIRS) for (const f of listarArquivos(d)) saida.add(f);
  const raiz = join(ROOT, PROTEGIDO_GLOB_RAIZ.dir);
  if (existsSync(raiz)) {
    for (const nome of readdirSync(raiz)) {
      const p = join(raiz, nome);
      if (statSync(p).isFile() && nome.endsWith(PROTEGIDO_GLOB_RAIZ.ext)) {
        saida.add(`${PROTEGIDO_GLOB_RAIZ.dir}/${nome}`);
      }
    }
  }
  return [...saida].sort();
}

export function inventario() {
  const mapa = {};
  for (const rel of arquivosProtegidos()) {
    const buf = readFileSync(join(ROOT, rel));
    mapa[rel] = { sha256: createHash('sha256').update(buf).digest('hex'), bytes: buf.length };
  }
  return mapa;
}

const modo = process.argv.includes('--verificar') ? 'verificar' : 'baseline';
const atual = inventario();

if (modo === 'baseline') {
  mkdirSync(BASELINE_DIR, { recursive: true });
  writeFileSync(BASELINE, JSON.stringify(atual, null, 1), 'utf8');
  console.log(`LINHA DE BASE gravada · ${Object.keys(atual).length} arquivos protegidos`);
  console.log(`local: ${BASELINE}  (fora do repositório, por decisão)`);
  for (const [f, v] of Object.entries(atual)) {
    console.log(`  ${v.sha256.slice(0, 16)}…  ${String(v.bytes).padStart(9)}  ${f}`);
  }
  process.exit(0);
}

if (!existsSync(BASELINE)) {
  console.error('✗ linha de base ausente — rode primeiro com --baseline.');
  process.exit(1);
}

const base = JSON.parse(readFileSync(BASELINE, 'utf8'));
const alterados = [];
const sumidos = [];
const novos = [];

for (const [f, v] of Object.entries(base)) {
  if (!atual[f]) sumidos.push(f);
  else if (atual[f].sha256 !== v.sha256) alterados.push(f);
}
for (const f of Object.keys(atual)) if (!base[f]) novos.push(f);

const total = Object.keys(base).length;
console.log(`ZONA CIENTÍFICA PROTEGIDA · ${total} arquivos conferidos`);
console.log(`  docs/univesp/**  docs/relatorio/**  docs/*.md  outputs/**`);
console.log(`  (docs/migracao-modelo/** fica fora: é a única área permitida)\n`);

if (alterados.length === 0 && sumidos.length === 0 && novos.length === 0) {
  console.log(`✓ ANTES = DEPOIS — os ${total} arquivos protegidos estão byte a byte inalterados.`);
  process.exit(0);
}

console.error('✗ STOP — a zona protegida mudou:');
for (const f of alterados) console.error(`   ALTERADO: ${f}`);
for (const f of sumidos) console.error(`   SUMIU   : ${f}`);
for (const f of novos) console.error(`   NOVO    : ${f}`);
process.exit(1);
