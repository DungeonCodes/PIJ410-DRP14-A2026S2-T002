// Experimento mensal separado, offline. Não altera o experimento por campanha.
import { metricasGoogle, type LinhaGoogle } from './metricas.ts';
import { treinarLinear as ajustarOLS, preverLinear as estimarOLS, metricasRegressao } from './google-ml.ts';

export const FEATURES_SAZONAIS = ['month_sin', 'month_cos', 'time_index', 'cpr_t2', 'cpr_t12'] as const;
type Modelo = ReturnType<typeof ajustarOLS>;
export type Metodo = 'linear' | 'persistencia' | 'sazonal';
export interface MesCPR {
  periodo: string; indice: number; cpr: number | null; disponivelEm: string;
  investimento: number | null; conversoes: number | null; motivo: string | null;
}
export interface AmostraSazonal {
  periodo: string; disponivelEm: string; x: number[]; y: number;
  lags: { periodo: string; disponivelEm: string }[];
}
export function moverMes(periodo: string, delta: number) {
  const [ano, mes] = periodo.split('-').map(Number);
  return new Date(Date.UTC(ano, mes - 1 + delta, 1)).toISOString().slice(0, 10);
}
const media = (v: readonly number[]) => v.reduce((s, x) => s + x, 0) / v.length;
const calendario = (periodo: string, indice: number) => {
  const mes = Number(periodo.slice(5, 7));
  return [Math.sin(2 * Math.PI * mes / 12), Math.cos(2 * Math.PI * mes / 12), indice];
};

export function agregarSerie(linhas: readonly LinhaGoogle[]) {
  if (!linhas.length) throw new Error('Histórico vazio');
  const campanhas = [...new Set(linhas.map((l) => l.campanha))].sort();
  const grupos = new Map<string, LinhaGoogle[]>();
  const chaves = new Set<string>();
  for (const l of linhas) {
    if (!/^\d{4}-(0[1-9]|1[0-2])-01$/.test(l.periodo) || !/^\d{4}-\d{2}-\d{2}$/.test(l.disponivelEm)) throw new Error('Data inválida');
    const chave = `${l.campanha}|${l.periodo}`;
    if (chaves.has(chave)) throw new Error('Campanha/mês duplicado');
    chaves.add(chave);
    grupos.set(l.periodo, [...(grupos.get(l.periodo) ?? []), l]);
  }
  const periodos = [...grupos.keys()].sort();
  const serie: MesCPR[] = [];
  for (let p = periodos[0]; p <= periodos.at(-1)!; p = moverMes(p, 1)) {
    const grupo = [...(grupos.get(p) ?? [])].sort((a, b) => a.campanha.localeCompare(b.campanha));
    const m = metricasGoogle(grupo);
    const motivo = !grupo.length ? 'mes_ausente' : grupo.length !== campanhas.length ? 'campanha_ausente'
      : grupo.some((l) => l.cobertura === 'provisorio') ? 'provisorio'
      : m.cobertura !== 'fechado' || m.cpr === null ? 'cobertura_ou_denominador_invalido' : null;
    serie.push({ periodo: p, indice: serie.length, cpr: motivo ? null : m.cpr,
      disponivelEm: grupo.map((l) => l.disponivelEm).sort().at(-1) ?? moverMes(p, 1),
      investimento: m.investimento, conversoes: m.conversoes, motivo });
  }
  return serie;
}

export function descreverSazonalidade(serie: readonly MesCPR[]) {
  const validos = serie.filter((m) => m.cpr !== null);
  if (!validos.length) throw new Error('Sem CPR mensal válido');
  const global = media(validos.map((m) => m.cpr!));
  return Array.from({ length: 12 }, (_, i) => {
    const meses = validos.filter((m) => Number(m.periodo.slice(5, 7)) === i + 1);
    const valores = meses.map((m) => m.cpr!).sort((a, b) => a - b);
    const n = valores.length;
    const suficiente = n >= 2;
    const medio = suficiente ? media(valores) : null;
    return { mes: i + 1, anos: meses.map((m) => Number(m.periodo.slice(0, 4))), nAnos: n,
      media: medio, mediana: suficiente ? (valores[Math.floor((n - 1) / 2)] + valores[Math.floor(n / 2)]) / 2 : null,
      minimo: suficiente ? valores[0] : null, maximo: suficiente ? valores[n - 1] : null,
      desvioPadrao: suficiente ? Math.sqrt(media(valores.map((v) => (v - medio!) ** 2))) : null,
      indice: medio !== null && global > 0 ? medio / global : null };
  });
}

export function prepararSazonal(serie: readonly MesCPR[]) {
  const mapa = new Map(serie.map((m) => [m.periodo, m]));
  const amostras: AmostraSazonal[] = [];
  for (const m of serie) {
    const lags = [2, 12].map((lag) => mapa.get(moverMes(m.periodo, -lag)));
    if (m.cpr === null || lags.some((l) => !l || l.cpr === null || l.disponivelEm > m.periodo)) continue;
    amostras.push({ periodo: m.periodo, disponivelEm: m.disponivelEm,
      x: [...calendario(m.periodo, m.indice), ...lags.map((l) => l!.cpr!)], y: m.cpr,
      lags: lags.map((l) => ({ periodo: l!.periodo, disponivelEm: l!.disponivelEm })) });
  }
  return amostras;
}
export function ajustarSazonal(amostras: readonly AmostraSazonal[], origem: string) {
  const treino = amostras.filter((a) => a.periodo < origem && a.disponivelEm <= origem);
  if (treino.length < 24) throw new Error('Histórico insuficiente: menos de 24 amostras elegíveis');
  return { modelo: ajustarOLS(treino.map((a) => a.x), treino.map((a) => a.y)), treino };
}

// Uma única origem para todo o horizonte. Nunca incorpora targets do horizonte como lags reais.
// Pontes em meses sem observação elegível são estimativas, registradas separadamente.
export function preverHorizonte(serie: readonly MesCPR[], modelo: Modelo, inicio: string, horizonte: number, origem: string, metodo: Metodo) {
  const primeiro = serie[0].periodo;
  const mapa = new Map(serie.map((m) => [m.periodo, m]));
  const estimados = new Map<string, number>();
  const entradas = new Map<string, { periodo: string; valor: number; fonte: 'observado' | 'estimado' }[]>();
  const indice = (p: string) => (Number(p.slice(0, 4)) - Number(primeiro.slice(0, 4))) * 12 + Number(p.slice(5, 7)) - Number(primeiro.slice(5, 7));
  function valor(p: string): number {
    const m = mapa.get(p);
    if (p < inicio && m?.cpr !== null && m?.cpr !== undefined && m.disponivelEm <= origem) return m.cpr;
    if (estimados.has(p)) return estimados.get(p)!;
    if (p < primeiro) throw new Error('Lag recursivo sem histórico suficiente');
    const lags = metodo === 'linear' ? [2, 12] : [metodo === 'sazonal' ? 12 : 2];
    const fontes = lags.map((lag) => {
      const periodo = moverMes(p, -lag), mes = mapa.get(periodo), v = valor(periodo);
      const observado = periodo < inicio && mes?.cpr !== null && mes?.cpr !== undefined && mes.disponivelEm <= origem;
      return { periodo, valor: v, fonte: observado ? 'observado' as const : 'estimado' as const };
    });
    const previsto = metodo === 'linear' ? estimarOLS(modelo, [...calendario(p, indice(p)), ...fontes.map((l) => l.valor)]) : fontes[0].valor;
    if (!Number.isFinite(previsto)) throw new Error('Previsão não finita');
    estimados.set(p, previsto); entradas.set(p, fontes);
    return previsto;
  }
  const previsoes = Array.from({ length: horizonte }, (_, i) => {
    const periodo = moverMes(inicio, i), cprPrevisto = valor(periodo);
    return { periodo, cprPrevisto, lags: entradas.get(periodo) ?? [] };
  });
  return { previsoes, pontes: [...estimados].filter(([p]) => p < inicio).sort(([a], [b]) => a.localeCompare(b)).map(([periodo, cprPrevisto]) => ({ periodo, cprPrevisto, origem: 'estimativa de lag indisponível; não observado' })) };
}

export function executarSazonal(linhas: readonly LinhaGoogle[], meta: { synthetic: boolean; seed: string; reference_date: string; maturacao_dias: number }) {
  if (!meta.synthetic) throw new Error('Somente dados declaradamente sintéticos');
  const serie = agregarSerie(linhas), amostras = prepararSazonal(serie);
  const years = [...new Set(serie.map((m) => Number(m.periodo.slice(0, 4))))];
  const anosCompletos = years.filter((y) => serie.filter((m) => m.periodo.startsWith(`${y}-`)).length === 12);
  const anoTeste = anosCompletos.at(-1);
  if (anoTeste === undefined) throw new Error('Sem ano completo');
  const inicio = `${anoTeste}-01-01`, fim = `${anoTeste}-12-01`;
  const ajuste = ajustarSazonal(amostras, inicio);
  const horizontes = Object.fromEntries((['linear', 'persistencia', 'sazonal'] as const).map((metodo) => [metodo, preverHorizonte(serie, ajuste.modelo, inicio, 12, inicio, metodo)])) as Record<Metodo, ReturnType<typeof preverHorizonte>>;
  const testPredictions = serie.filter((m) => m.periodo >= inicio && m.periodo <= fim && m.cpr !== null).map((m) => ({ periodo: m.periodo, observado: m.cpr!, ...Object.fromEntries((['linear', 'persistencia', 'sazonal'] as const).map((metodo) => [metodo, horizontes[metodo].previsoes.find((p) => p.periodo === m.periodo)!.cprPrevisto])) })) as { periodo: string; observado: number; linear: number; persistencia: number; sazonal: number }[];
  if (testPredictions.length < 10) throw new Error('Ano de teste com menos de 10 targets válidos');
  const avaliar = (p: typeof testPredictions) => Object.fromEntries((['linear', 'persistencia', 'sazonal'] as const).map((metodo) => [metodo, metricasRegressao(p.map((r) => r.observado), p.map((r) => r[metodo]))])) as Record<Metodo, ReturnType<typeof metricasRegressao>>;
  const metricas = avaliar(testPredictions);
  // Avaliação complementar de emissão mensal, incorporando apenas targets já maduros.
  const rolling = amostras.filter((a) => a.periodo >= inicio && a.periodo <= fim).map((a) => {
    const ajustado = ajustarSazonal(amostras, a.periodo);
    return { periodo: a.periodo, observado: a.y, linear: estimarOLS(ajustado.modelo, a.x), persistencia: a.x[3], sazonal: a.x[4],
      ultimoTargetTreino: ajustado.treino.at(-1)!.periodo, ultimoDisponivelEm: ajustado.treino.at(-1)!.disponivelEm };
  });
  const final = ajustarSazonal(amostras, moverMes(serie.at(-1)!.periodo, 1));
  const futuroInicio = moverMes(serie.at(-1)!.periodo, 1);
  // Usa o instante de emissão do primeiro mês futuro, não o relógio da máquina.
  const futuro = preverHorizonte(serie, final.modelo, futuroInicio, 12, futuroInicio, 'linear');
  const baselineFuturo = preverHorizonte(serie, final.modelo, futuroInicio, 12, futuroInicio, 'sazonal');
  const seasonalIndex = descreverSazonalidade(serie);
  const lagAudit = [1, 2, 12, 24].map((lag) => ({ lag, amostrasElegiveis: serie.filter((m) => {
    const anterior = serie.find((s) => s.periodo === moverMes(m.periodo, -lag));
    return m.cpr !== null && anterior?.cpr !== null && anterior?.cpr !== undefined && anterior.disponivelEm <= m.periodo;
  }).length }));
  const comparar = (nome: 'mae' | 'rmse') => ({ diferencaAbsoluta: metricas.sazonal[nome] - metricas.linear[nome], reducaoPercentual: metricas.sazonal[nome] > 0 ? 100 * (metricas.sazonal[nome] - metricas.linear[nome]) / metricas.sazonal[nome] : null });
  return {
    meta: { ...meta, synthetic: true, experimento: 'CPR mensal sazonal; somente demonstração acadêmica' },
    generatedAt: meta.reference_date, generatedAtPolicy: 'data fixa de referência sintética; não timestamp de execução',
    dataset: 'src/data/ads-sintetico.json', period: { inicio: serie[0].periodo, fim: serie.at(-1)!.periodo }, years,
    audit: { linhas: linhas.length, campanhas: [...new Set(linhas.map((l) => l.campanha))].sort(), categorias: [...new Set(linhas.map((l) => l.categoria))].sort(),
      duplicidades: 0, mesesAusentes: serie.filter((m) => m.motivo === 'mes_ausente').map((m) => m.periodo),
      cprValidosCampanha: linhas.filter((l) => l.cobertura === 'fechado' && metricasGoogle([l]).cpr !== null).length,
      mesesValidos: serie.filter((m) => m.cpr !== null).length, mesesExcluidos: serie.filter((m) => m.cpr === null).map((m) => ({ periodo: m.periodo, motivo: m.motivo })) },
    target: 'CPR mensal = soma(investimento) / soma(conversões registradas), cobertura completa',
    features: FEATURES_SAZONAIS, lagAudit, forecastMethod: 'recursiva; pontes estimadas explícitas, sem valores futuros reais',
    trainPeriod: { inicio: ajuste.treino[0].periodo, fim: ajuste.treino.at(-1)!.periodo, amostras: ajuste.treino.length, origem: inicio },
    testPeriod: { inicio, fim, amostras: testPredictions.length, protocolo: 'holdout de 12 meses, modelo e origem fixos; sem incorporar targets do teste' },
    finalTrainPeriod: { inicio: final.treino[0].periodo, fim: final.treino.at(-1)!.periodo, amostras: final.treino.length, origem: futuroInicio },
    baselineMetrics: { persistencia: metricas.persistencia, sazonal: metricas.sazonal }, modelMetrics: metricas.linear,
    comparison: { mae: comparar('mae'), rmse: comparar('rmse'), superaSazonal: metricas.linear.mae < metricas.sazonal.mae && metricas.linear.rmse < metricas.sazonal.rmse },
    walkForward: { protocolo: 'rolling origin mensal, reestimação somente com targets disponíveis na emissão', metricas: avaliar(rolling), previsoes: rolling },
    seasonalIndex, historicalSeries: serie, testPredictions, testBridges: Object.fromEntries((['linear', 'persistencia', 'sazonal'] as const).map((m) => [m, horizontes[m].pontes])),
    futureForecast: futuro.previsoes.map((p, i) => ({ ...p, indiceSazonal: seasonalIndex[Number(p.periodo.slice(5, 7)) - 1].indice, baselineSazonal: baselineFuturo.previsoes[i].cprPrevisto })),
    forecastBridges: futuro.pontes, baselineForecastBridges: baselineFuturo.pontes,
    evaluationModel: ajuste.modelo, finalModel: final.modelo,
    model: 'LinearRegression — OLS local com intercepto e padronização somente no treino; sem scikit-learn em runtime',
    selection: 'OLS pré-especificado para demonstração, sem tuning no holdout; não substitui baseline quando pior',
    negativeForecasts: futuro.previsoes.filter((p) => p.cprPrevisto < 0).length,
    limits: 'Sem intervalos de confiança, imputação no treino, MAPE, causalidade, previsão de matrículas ou recomendação de investimento. Maturação de 14 dias é hipótese sintética.'
  };
}
