import { razao, type LinhaGoogle, type LinhaMeta } from '../ads/metricas.ts';

export const ADS_V4_CENARIO = 'pij410-v4-ads-granular-1';
const PESOS_META = [30, 25, 20, 15, 10] as const;
const PESOS_CONVERSAS = [24, 28, 18, 20, 10] as const;
const PESOS_GOOGLE = [60, 40] as const;
const PESOS_CONVERSOES = [55, 45] as const;
const CRIATIVOS = ['Vídeo A', 'Imagem B', 'Carrossel C', 'Vídeo D', 'Imagem E'] as const;
const TERMOS = ['educação fictícia', 'curso demonstrativo'] as const;

/** Partição inteira por maiores restos; conserva exatamente o total, inclusive centavos. */
export function repartir(total: number | null, pesos: readonly number[], casas = 0): (number | null)[] {
  if (total === null) return pesos.map(() => null);
  if (!Number.isFinite(total) || total < 0 || pesos.some((p) => p < 0) || pesos.reduce((a, b) => a + b, 0) !== 100) throw new Error('Partição inválida');
  const escala = 10 ** casas;
  const unidades = Math.round(total * escala);
  const bases = pesos.map((peso) => Math.floor(unidades * peso / 100));
  const restos = pesos.map((peso, i) => ({ i, resto: unidades * peso / 100 - bases[i] }));
  restos.sort((a, b) => b.resto - a.resto || a.i - b.i);
  for (let n = unidades - bases.reduce((a, b) => a + b, 0); n > 0; n--) bases[restos[restos.length - n].i]++;
  return bases.map((n) => n / escala);
}

export type AnuncioV4 = { id: string; nome: string; campanha: string; periodo: string; investimento: number | null; resultados: number | null; cpr: number | null };
export type PalavraV4 = { id: string; palavra: string; campanha: string; periodo: string; custo: number | null; cliques: number | null; conversoes: number | null; cpr: number | null };

export function gerarAnunciosMeta(linhas: readonly LinhaMeta[]): AnuncioV4[] {
  return linhas.filter((l) => l.indicador === 'conversa' && l.cobertura === 'fechado').flatMap((linha) => {
    const investimentos = repartir(linha.investimento, PESOS_META, 2);
    const resultados = repartir(linha.resultados, PESOS_CONVERSAS);
    return CRIATIVOS.map((nome, i) => ({
      id: `${linha.periodo}-${linha.campanha}-AD${i + 1}`, nome: `Criativo fictício · ${nome}`,
      campanha: linha.campanha, periodo: linha.periodo.slice(0, 7),
      investimento: investimentos[i], resultados: resultados[i], cpr: razao(investimentos[i], resultados[i]),
    }));
  });
}

export function gerarPalavrasGoogle(linhas: readonly LinhaGoogle[]): PalavraV4[] {
  return linhas.filter((l) => l.cobertura === 'fechado').flatMap((linha) => {
    const custos = repartir(linha.investimento, PESOS_GOOGLE, 2);
    const cliques = repartir(linha.cliques, PESOS_GOOGLE);
    const conversoes = repartir(linha.conversoes, PESOS_CONVERSOES, 2);
    return TERMOS.map((termo, i) => ({
      id: `${linha.periodo}-${linha.campanha}-KW${i + 1}`,
      palavra: `${termo} · ${linha.campanha}`, campanha: linha.campanha, periodo: linha.periodo.slice(0, 7),
      custo: custos[i], cliques: cliques[i], conversoes: conversoes[i], cpr: razao(custos[i], conversoes[i]),
    }));
  });
}

/** CPR válido crescente; resultados decrescentes; custo crescente; ID crescente. */
export function rankingMeta(linhas: readonly AnuncioV4[]) {
  return [...linhas].sort((a, b) => (a.cpr === null ? (b.cpr === null ? 0 : 1) : b.cpr === null ? -1 : a.cpr - b.cpr)
    || (b.resultados ?? -1) - (a.resultados ?? -1)
    || (a.investimento ?? Infinity) - (b.investimento ?? Infinity) || a.id.localeCompare(b.id));
}

export function rankingGoogle(linhas: readonly PalavraV4[]) {
  return [...linhas].sort((a, b) => (a.cpr === null ? (b.cpr === null ? 0 : 1) : b.cpr === null ? -1 : a.cpr - b.cpr)
    || (b.conversoes ?? -1) - (a.conversoes ?? -1)
    || (a.custo ?? Infinity) - (b.custo ?? Infinity) || a.id.localeCompare(b.id));
}

export function cprTemporal(linhasGoogle: readonly LinhaGoogle[], linhasMeta: readonly LinhaMeta[], meses: readonly string[]) {
  return meses.map((mes) => {
    const google = linhasGoogle.filter((l) => l.cobertura === 'fechado' && l.periodo.startsWith(mes));
    const meta = linhasMeta.filter((l) => l.cobertura === 'fechado' && l.indicador === 'conversa' && l.periodo.startsWith(mes));
    const soma = (valores: readonly (number | null)[]) => valores.length && valores.every((v) => v !== null)
      ? valores.reduce<number>((a, b) => a + b!, 0) : null;
    return {
      mes,
      cprGoogle: razao(soma(google.map((l) => l.investimento)), soma(google.map((l) => l.conversoes))),
      cprMeta: razao(soma(meta.map((l) => l.investimento)), soma(meta.map((l) => l.resultados))),
    };
  });
}
