/** Regras puras da extensão sintética V3, testáveis sem acesso ao navegador. */
export const V3_SYNTHETIC_SEED = 'pij410-v3-extensao-1';
export const V3_SYNTHETIC_RULE = 'Google: arredondar 0,07 × cliques; Meta: arredondar 0,55 × conversas; alcance Meta: arredondar 7 × investimento + 3 × resultados. Ausência permanece ausente.';

export function efetivacaoMensal(pontos: readonly { periodo: string; rotulo: string; visitas: number | null; matriculas: number | null }[]) {
  return pontos.map(({ periodo, rotulo, visitas, matriculas }) => ({
    periodo, rotulo, visitas, matriculas,
    percentual: visitas === null || matriculas === null || visitas === 0
      ? null : Math.round((matriculas / visitas) * 1000) / 10,
  }));
}

export function calcularLeadsGoogle(cliques: number | null) {
  return cliques === null ? null : Math.round(cliques * 0.07);
}

export function calcularLeadsMeta(conversas: number | null) {
  return conversas === null ? null : Math.round(conversas * 0.55);
}

export function calcularAlcanceMeta(investimento: number | null, resultados: number | null) {
  return investimento === null || resultados === null ? null : Math.round(investimento * 7 + resultados * 3);
}
