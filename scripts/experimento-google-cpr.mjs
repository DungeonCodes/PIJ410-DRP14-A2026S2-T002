// Execução local e offline. Não aceita entrada externa nem consulta plataformas.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { gerarAds, ADS_SEED } from '../src/lib/sintetico/gerar-ads.ts';
import { executarExperimento } from '../src/lib/ads/google-ml.ts';

const argumentos = process.argv.slice(2);
if (argumentos.some((a) => a !== '--verificar')) throw new Error('Única opção permitida: --verificar');
const dataset = gerarAds(ADS_SEED);
const resultado = {
  meta: dataset.meta,
  escopo: 'Experimento exploratório sintético restrito a Google Ads; sem evidência operacional ou validação da comunidade.',
  ...executarExperimento(dataset.google),
};
for (const [nome, conteudo] of [['ads-sintetico.json', dataset], ['google-cpr-experimento.json', resultado]]) {
  const caminho = fileURLToPath(new URL(`../src/data/${nome}`, import.meta.url));
  // Precisão registrada explícita; evita dependência de formatação de floats.
  const texto = `${JSON.stringify(conteudo, (_chave, valor) => typeof valor === 'number' ? Number(valor.toFixed(12)) : valor, 2)}\n`;
  if (argumentos.includes('--verificar')) {
    const versionado = readFileSync(caminho, 'utf8').replace(/\r\n/g, '\n');
    if (versionado !== texto) throw new Error(`Artefato divergente: ${nome}`);
  } else {
    writeFileSync(caminho, texto, 'utf8');
  }
}
console.log(JSON.stringify({ seed: ADS_SEED, treino: resultado.treino, teste: resultado.teste, excluidas: resultado.excluidas, purgadas: resultado.purgadas, metricas: resultado.metricas, verificacao: argumentos.includes('--verificar') }, null, 2));
