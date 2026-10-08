import type { PayloadCaptacao } from '@/lib/captacao-data';

export interface PontoTemporal {
  periodo: string;
  rotulo: string;
  contatos: number | null;
  visitas: number | null;
  matriculas: number | null;
}

/** Usa exclusivamente as contagens mensais existentes no funil de Captação. */
export function evolucaoTemporal(dados: PayloadCaptacao, safras: number[]): PontoTemporal[] {
  const series = dados.mensal;
  return [...safras].sort((a, b) => a - b).flatMap((safra) =>
    series.contatos.map((ponto, indice) => {
      const chave = String(safra);
      const valor = (serie: typeof series.contatos): number | null => {
        const observado = serie[indice]?.[chave];
        return typeof observado === 'number' ? observado : null;
      };
      return {
        periodo: `${safra}-${String(ponto.mesIndice + 1).padStart(2, '0')}`,
        rotulo: `${ponto.mes}/${safra}`,
        contatos: valor(series.contatos),
        visitas: valor(series.visitas),
        matriculas: valor(series.matriculas),
      };
    }),
  );
}
