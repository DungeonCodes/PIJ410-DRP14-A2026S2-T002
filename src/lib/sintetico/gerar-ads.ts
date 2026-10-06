import { criarAleatorio, arredondar } from './prng.ts';
import type { LinhaGoogle, LinhaMeta } from '../ads/metricas.ts';

export const ADS_SEED = 'pij410-ads-cenario-independente-1';
export const ADS_CENARIO = 'ads-academico-1';
export const ADS_DATA_GERACAO = '2026-10-06';
export const ADS_MATURACAO_DIAS = 14; // Hipótese sintética, não janela de uma conta real.

export function mesSintetico(indice: number): string {
  const ano = 2017 + Math.floor(indice / 12);
  return `${ano}-${String(indice % 12 + 1).padStart(2, '0')}-01`;
}

export function disponibilidadeMes(periodo: string): string {
  const [ano, mes] = periodo.split('-').map(Number);
  // Fim do mês + maturação fictícia; instante totalmente determinado pelo período.
  return new Date(Date.UTC(ano, mes, ADS_MATURACAO_DIAS)).toISOString().slice(0, 10);
}

export function gerarAds(seed = ADS_SEED) {
  const google: LinhaGoogle[] = [];
  // Quatro campanhas fictícias da mesma categoria e com o mesmo significado de conversão.
  for (const [indiceCampanha, campanha] of ['Cenario-A', 'Cenario-B', 'Cenario-C', 'Cenario-D'].entries()) {
    const r = criarAleatorio(`${seed}:google:${campanha}`);
    let propensao = 0.05 + indiceCampanha * 0.006;
    let custoClique = 1.8 + indiceCampanha * 0.3;
    for (let i = 0; i < 73; i += 1) {
      const periodo = mesSintetico(i);
      const estacao = Math.sin(2 * Math.PI * (i % 12) / 12);
      propensao = Math.max(0.015, Math.min(0.14, 0.75 * propensao + 0.25 * (0.06 + 0.012 * estacao) + r.entre(-0.012, 0.012)));
      custoClique = Math.max(0.7, 0.8 * custoClique + 0.2 * (2.1 + 0.2 * estacao) + r.entre(-0.2, 0.2));
      const impressoes = r.inteiro(18000, 47000);
      const cliques = Math.round(impressoes * r.entre(0.025, 0.055));
      const investimento = arredondar(cliques * custoClique);
      const conversoes = arredondar(cliques * propensao);
      const ausente = indiceCampanha === 3 && i === 22;
      const semConversao = indiceCampanha === 2 && i % 31 === 9;
      google.push({
        campanha, categoria: 'Pesquisa', periodo, disponivelEm: disponibilidadeMes(periodo),
        cobertura: ausente ? 'ausente' : i === 72 ? 'provisorio' : 'fechado',
        investimento: ausente ? null : investimento,
        impressoes: ausente ? null : impressoes,
        cliques: ausente ? null : cliques,
        conversoes: ausente ? null : semConversao ? 0 : conversoes,
      });
    }
  }
  const meta: LinhaMeta[] = [];
  for (const indicador of ['conversa', 'interacao'] as const) {
    const r = criarAleatorio(`${seed}:meta:${indicador}`);
    for (let i = 60; i < 72; i += 1) {
      const ausente = indicador === 'interacao' && i === 64;
      meta.push({
        campanha: indicador === 'conversa' ? 'Cenario-Social-A' : 'Cenario-Social-B',
        periodo: mesSintetico(i), indicador, cobertura: ausente ? 'ausente' : 'fechado',
        investimento: ausente ? null : arredondar(r.entre(350, 900)),
        resultados: ausente ? null : r.inteiro(indicador === 'conversa' ? 20 : 200, indicador === 'conversa' ? 85 : 750),
      });
    }
  }
  return {
    meta: {
      synthetic: true, schema_version: 1, scenario_version: ADS_CENARIO, seed,
      generated_at: ADS_DATA_GERACAO, reference_date: '2023-01-31',
      maturacao_dias: ADS_MATURACAO_DIAS,
      nota: 'Cronologia fictícia. Cenário independente; parâmetros não ajustados a dados operacionais. Conversões não representam leads únicos ou matrículas.',
    },
    google: google.sort((a, b) => a.periodo.localeCompare(b.periodo) || a.campanha.localeCompare(b.campanha)),
    social: meta,
  };
}
