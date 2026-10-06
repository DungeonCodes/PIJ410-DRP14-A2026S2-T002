import { metricasGoogle, type LinhaGoogle } from './metricas.ts';

export const FEATURES_CPR = ['cprAnterior', 'ctrAnterior', 'cpcAnterior', 'logCliquesAnterior', 'mesSeno', 'mesCosseno'] as const;
export const CORTE_TREINO = '2021-07-01';
export const CORTE_AVALIACAO = '2023-04-01';

export interface AmostraCPR {
  campanha: string;
  emissao: string;
  periodoFeature: string;
  featureDisponivelEm: string;
  targetDisponivelEm: string;
  x: number[];
  y: number;
}

export function prepararAmostras(linhas: readonly LinhaGoogle[]) {
  const indice = new Map<string, LinhaGoogle>();
  for (const linha of linhas) {
    const chave = `${linha.campanha}|${linha.periodo}`;
    if (indice.has(chave)) throw new Error('Campanha e período duplicados');
    indice.set(chave, linha);
  }
  const amostras: AmostraCPR[] = [];
  let excluidas = 0;
  for (const linha of [...linhas].sort((a, b) => a.periodo.localeCompare(b.periodo) || a.campanha.localeCompare(b.campanha))) {
    const [ano, mes] = linha.periodo.split('-').map(Number);
    // t−2: o mês imediatamente anterior ainda não está maduro no dia 1 de t.
    const periodoFeature = new Date(Date.UTC(ano, mes - 3, 1)).toISOString().slice(0, 10);
    const anterior = indice.get(`${linha.campanha}|${periodoFeature}`);
    if (!anterior || anterior.cobertura !== 'fechado' || anterior.disponivelEm > linha.periodo || linha.cobertura !== 'fechado') {
      excluidas += 1;
      continue;
    }
    const historico = metricasGoogle([anterior]);
    const target = metricasGoogle([linha]).cpr;
    if (historico.cpr === null || historico.ctrPct === null || historico.cpc === null || historico.cliques === null || target === null) {
      excluidas += 1;
      continue;
    }
    amostras.push({
      campanha: linha.campanha, emissao: linha.periodo, periodoFeature,
      featureDisponivelEm: anterior.disponivelEm, targetDisponivelEm: linha.disponivelEm,
      x: [historico.cpr, historico.ctrPct, historico.cpc, Math.log1p(historico.cliques), Math.sin(2 * Math.PI * mes / 12), Math.cos(2 * Math.PI * mes / 12)],
      y: target,
    });
  }
  return { amostras, excluidas };
}

export function separarTemporal(amostras: readonly AmostraCPR[], corte = CORTE_TREINO, avaliacao = CORTE_AVALIACAO) {
  const treino = amostras.filter((a) => a.emissao < corte && a.targetDisponivelEm < corte);
  const teste = amostras.filter((a) => a.emissao >= corte && a.targetDisponivelEm <= avaliacao);
  if (!treino.length || !teste.length) throw new Error('Split temporal sem treino ou teste');
  if (amostras.some((a) => a.featureDisponivelEm > a.emissao || a.periodoFeature >= a.emissao)) {
    throw new Error('Feature futura ou indisponível na emissão');
  }
  return { treino, teste, purgadas: amostras.length - treino.length - teste.length };
}

// Regressão linear OLS com intercepto, padronização aprendida SOMENTE no treino
// e QR por Gram–Schmidt modificado com reortogonalização. Sem ajuste no teste.
export function treinarLinear(x: readonly number[][], y: readonly number[]) {
  const n = x.length;
  const p = x[0]?.length ?? 0;
  if (!p || n <= p + 1 || y.length !== n || x.some((linha) => linha.length !== p || linha.some((v) => !Number.isFinite(v))) || y.some((v) => !Number.isFinite(v))) {
    throw new Error('Matriz de treino inválida');
  }
  const medias = Array.from({ length: p }, (_, j) => x.reduce((s, l) => s + l[j], 0) / n);
  const desvios = medias.map((media, j) => Math.sqrt(x.reduce((s, l) => s + (l[j] - media) ** 2, 0) / n));
  const colunas = [Array(n).fill(1) as number[], ...medias.map((media, j) => x.map((l) => (l[j] - media) / (desvios[j] || 1)))];
  const q: number[][] = [];
  const r = Array.from({ length: p + 1 }, () => Array(p + 1).fill(0) as number[]);
  for (let j = 0; j <= p; j += 1) {
    const v = [...colunas[j]];
    for (let passagem = 0; passagem < 2; passagem += 1) {
      for (let k = 0; k < j; k += 1) {
        const projecao = q[k].reduce((s, valor, i) => s + valor * v[i], 0);
        r[k][j] += projecao;
        for (let i = 0; i < n; i += 1) v[i] -= projecao * q[k][i];
      }
    }
    r[j][j] = Math.sqrt(v.reduce((s, valor) => s + valor ** 2, 0));
    if (r[j][j] < 1e-10) throw new Error('Features linearmente dependentes');
    q.push(v.map((valor) => valor / r[j][j]));
  }
  const coeficientes = q.map((coluna) => coluna.reduce((s, v, i) => s + v * y[i], 0));
  for (let j = p; j >= 0; j -= 1) {
    for (let k = j + 1; k <= p; k += 1) coeficientes[j] -= r[j][k] * coeficientes[k];
    coeficientes[j] /= r[j][j];
  }
  return { medias, desvios, coeficientes };
}

export function preverLinear(modelo: ReturnType<typeof treinarLinear>, x: readonly number[]) {
  if (x.length !== modelo.medias.length || x.some((v) => !Number.isFinite(v))) throw new Error('Features de previsão inválidas');
  return modelo.coeficientes[0] + x.reduce((s, v, j) => s + modelo.coeficientes[j + 1] * (v - modelo.medias[j]) / (modelo.desvios[j] || 1), 0);
}

export function metricasRegressao(real: readonly number[], previsto: readonly number[]) {
  if (!real.length || real.length !== previsto.length || [...real, ...previsto].some((v) => !Number.isFinite(v))) throw new Error('Avaliação inválida');
  const media = real.reduce((s, v) => s + v, 0) / real.length;
  const sse = real.reduce((s, v, i) => s + (v - previsto[i]) ** 2, 0);
  const sst = real.reduce((s, v) => s + (v - media) ** 2, 0);
  return { mae: real.reduce((s, v, i) => s + Math.abs(v - previsto[i]), 0) / real.length, rmse: Math.sqrt(sse / real.length), r2: sst > 0 ? 1 - sse / sst : null };
}

export function executarExperimento(linhas: readonly LinhaGoogle[]) {
  const preparacao = prepararAmostras(linhas);
  const { treino, teste, purgadas } = separarTemporal(preparacao.amostras);
  const modelo = treinarLinear(treino.map((a) => a.x), treino.map((a) => a.y));
  const previsoes = teste.map((a) => ({ campanha: a.campanha, periodo: a.emissao, observado: a.y, persistencia: a.x[0], linear: preverLinear(modelo, a.x) }));
  const y = previsoes.map((p) => p.observado);
  return {
    features: FEATURES_CPR, corteTreino: CORTE_TREINO, corteAvaliacao: CORTE_AVALIACAO,
    treino: treino.length, teste: teste.length, excluidas: preparacao.excluidas, purgadas,
    primeiroTreino: treino[0].emissao, ultimoTreino: treino[treino.length - 1].emissao,
    primeiroTeste: teste[0].emissao, ultimoTeste: teste[teste.length - 1].emissao,
    metricas: { persistencia: metricasRegressao(y, previsoes.map((p) => p.persistencia)), linear: metricasRegressao(y, previsoes.map((p) => p.linear)) },
    previsoesNegativas: previsoes.filter((p) => p.linear < 0).length,
    modelo, previsoes,
  };
}
