import { criarAleatorio, arredondar } from '../sintetico/prng.ts';

export const ORGANICO_CENARIO = {
  versao: 'pij410-v4-organico-1',
  semente: 'pij410-v4-organico-1',
  periodo: '2022-01 a 2022-06',
  unidade: 'publicação fictícia de Reels por mês',
  pesos: { interacaoPorAlcance: 0.7, alcance: 0.3 },
  referencias: { taxaInteracao: 0.1, alcance: 3000 },
} as const;

export type PublicacaoOrganica = {
  id: string;
  periodo: string;
  rotulo: string;
  alcance: number | null;
  interacoes: number | null;
};

export type PublicacaoClassificada = PublicacaoOrganica & {
  taxaInteracao: number | null;
  score: number | null;
  posicao: number | null;
};

/** Cenário inventado do zero. Ausência (null) e zero observado são casos distintos. */
export function gerarPublicacoes(): PublicacaoOrganica[] {
  const rng = criarAleatorio(ORGANICO_CENARIO.semente);
  const linhas: PublicacaoOrganica[] = [];
  for (let mes = 1; mes <= 6; mes += 1) {
    const periodo = `2022-${String(mes).padStart(2, '0')}`;
    for (let item = 1; item <= 2; item += 1) {
      const indice = (mes - 1) * 2 + item;
      const alcance = rng.inteiro(850, 2400);
      const taxa = rng.entre(0.025, 0.095);
      linhas.push({
        id: `ORG-${String(indice).padStart(2, '0')}`,
        periodo,
        rotulo: `Reel fictício ${String(indice).padStart(2, '0')}`,
        alcance,
        interacoes: indice === 4 ? null : indice === 9 ? 0 : Math.round(alcance * taxa),
      });
    }
  }
  return linhas;
}

/** Score demonstrativo: 70% taxa de interação normalizada + 30% alcance normalizado. */
export function calcularScore(publicacao: PublicacaoOrganica): { taxaInteracao: number | null; score: number | null } {
  const { alcance, interacoes } = publicacao;
  if (alcance === null || interacoes === null || alcance <= 0 || interacoes < 0 || interacoes > alcance) {
    return { taxaInteracao: null, score: null };
  }
  const taxa = interacoes / alcance;
  const pontosTaxa = Math.min(1, taxa / ORGANICO_CENARIO.referencias.taxaInteracao);
  const pontosAlcance = Math.min(1, alcance / ORGANICO_CENARIO.referencias.alcance);
  return {
    taxaInteracao: arredondar(taxa * 100, 2),
    score: arredondar(100 * (ORGANICO_CENARIO.pesos.interacaoPorAlcance * pontosTaxa + ORGANICO_CENARIO.pesos.alcance * pontosAlcance), 2),
  };
}

/** Ordenação total estável: score, alcance, período e ID; sem medição fica fora do ranking. */
export function classificarPublicacoes(publicacoes: PublicacaoOrganica[]): PublicacaoClassificada[] {
  const ordenadas = publicacoes.map((p) => ({ ...p, ...calcularScore(p), posicao: null as number | null })).sort((a, b) => {
    if (a.score === null && b.score !== null) return 1;
    if (a.score !== null && b.score === null) return -1;
    if (a.score !== null && b.score !== null && a.score !== b.score) return b.score - a.score;
    if ((a.alcance ?? -1) !== (b.alcance ?? -1)) return (b.alcance ?? -1) - (a.alcance ?? -1);
    if (a.periodo !== b.periodo) return b.periodo.localeCompare(a.periodo);
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  });
  let posicao = 0;
  return ordenadas.map((p) => ({ ...p, posicao: p.score === null ? null : ++posicao }));
}
