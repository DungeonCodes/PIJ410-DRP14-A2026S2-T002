// Contratos acadêmicos locais. Ausência, zero e período provisório são distintos.
export type Cobertura = 'fechado' | 'provisorio' | 'ausente';

export interface LinhaGoogle {
  campanha: string;
  categoria: 'Pesquisa';
  periodo: string;
  disponivelEm: string;
  cobertura: Cobertura;
  investimento: number | null;
  impressoes: number | null;
  cliques: number | null;
  conversoes: number | null;
}

export interface LinhaMeta {
  campanha: string;
  periodo: string;
  indicador: 'conversa' | 'interacao';
  cobertura: Cobertura;
  investimento: number | null;
  resultados: number | null;
}

export function razao(numerador: number | null, denominador: number | null): number | null {
  if (numerador === null || denominador === null) return null;
  if (!Number.isFinite(numerador) || !Number.isFinite(denominador) || numerador < 0 || denominador < 0) {
    throw new Error('Métrica inválida');
  }
  if (denominador === 0) return null;
  return numerador / denominador;
}

export function somaCompleta(valores: readonly (number | null)[]): number | null {
  if (!valores.length || valores.some((v) => v === null)) return null;
  if (valores.some((v) => !Number.isFinite(v) || v! < 0)) throw new Error('Métrica inválida');
  return valores.reduce<number>((total, v) => total + v!, 0);
}

export function metricasGoogle(linhas: readonly LinhaGoogle[]) {
  const investimento = somaCompleta(linhas.map((l) => l.investimento));
  const impressoes = somaCompleta(linhas.map((l) => l.impressoes));
  const cliques = somaCompleta(linhas.map((l) => l.cliques));
  const conversoes = somaCompleta(linhas.map((l) => l.conversoes));
  return {
    investimento, impressoes, cliques, conversoes,
    ctrPct: razao(cliques, impressoes) === null ? null : razao(cliques, impressoes)! * 100,
    cpc: razao(investimento, cliques),
    cpm: razao(investimento, impressoes) === null ? null : razao(investimento, impressoes)! * 1000,
    cpr: razao(investimento, conversoes),
    cobertura: linhas.length && linhas.every((l) => l.cobertura === 'fechado') ? 'fechado' : 'incompleto',
  };
}

// Resultados de tipos distintos nunca são somados num único CPR da Meta.
export function metricasMeta(linhas: readonly LinhaMeta[]) {
  const indicadores = new Set(linhas.map((l) => l.indicador));
  if (indicadores.size > 1) throw new Error('Resultados de indicadores distintos não são comparáveis');
  const investimento = somaCompleta(linhas.map((l) => l.investimento));
  const resultados = somaCompleta(linhas.map((l) => l.resultados));
  return { investimento, resultados, cpr: razao(investimento, resultados) };
}

export function compararOrcamento(planejado: number | null, realizado: number | null) {
  const proporcao = razao(realizado, planejado);
  return { planejado, realizado, execucaoPct: proporcao === null ? null : proporcao * 100 };
}
