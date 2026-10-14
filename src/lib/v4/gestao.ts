/** Premissa fictícia de planejamento; não é observação nem plano da parceira. */
export const PLANO_OCUPACAO = {
  versao: 'pij410-v4-gestao-1',
  periodo: '2026',
  origem: 'premissa acadêmica fictícia independente das bases de Captação e Matrículas',
  turmas: [
    { id: 'PL-EI', etapa: 'Educação Infantil', vagas: 30, ocupacaoAlvo: 0.8 },
    { id: 'PL-EFI', etapa: 'Fundamental Anos Iniciais', vagas: 35, ocupacaoAlvo: 0.8 },
    { id: 'PL-EFII', etapa: 'Fundamental Anos Finais', vagas: 32, ocupacaoAlvo: 0.75 },
    { id: 'PL-EM', etapa: 'Ensino Médio', vagas: 28, ocupacaoAlvo: 0.75 },
  ],
} as const;

export function calcularPlano() {
  const linhas = PLANO_OCUPACAO.turmas.map((t) => ({
    ...t,
    vagasAlvo: Math.round(t.vagas * t.ocupacaoAlvo),
  }));
  return {
    linhas,
    vagas: linhas.reduce((s, x) => s + x.vagas, 0),
    vagasAlvo: linhas.reduce((s, x) => s + x.vagasAlvo, 0),
  };
}
