import bruto from '@/data/ads-sintetico.json';
import { metricasGoogle, somaCompleta, type LinhaGoogle, type LinhaMeta } from './metricas.ts';

export const ADS_META = bruto.meta;
export const GOOGLE_LOCAL = bruto.google as LinhaGoogle[];
export const SOCIAL_LOCAL = bruto.social as LinhaMeta[];

export function selecionarAds(rawAnos?: string, rawCampanhas?: string) {
  const anos = [...new Set(GOOGLE_LOCAL.map((l) => l.periodo.slice(0, 4)))].sort();
  const campanhas = [...new Set(GOOGLE_LOCAL.map((l) => l.campanha))].sort();
  const validar = (raw: string | undefined, opcoes: string[], padrao: string[]) => {
    const validos = [...new Set(raw?.split(',').filter((v) => opcoes.includes(v)) ?? [])];
    return validos.length ? validos.sort() : padrao;
  };
  // Último ano com dados fechados nos dois canais, não o mês provisório de 2023.
  const selecionados = validar(rawAnos, anos, ['2022']);
  const escolhidas = validar(rawCampanhas, campanhas, campanhas);
  const google = GOOGLE_LOCAL.filter((l) => selecionados.includes(l.periodo.slice(0, 4)) && escolhidas.includes(l.campanha));
  const social = SOCIAL_LOCAL.filter((l) => selecionados.includes(l.periodo.slice(0, 4)));
  return { anos, campanhas, selecionados, escolhidas, google, social };
}

export function compararInvestimentos(google: readonly LinhaGoogle[], social: readonly LinhaMeta[]) {
  const periodos = [...new Set([...google, ...social].map((l) => l.periodo))].sort();
  return periodos.map((periodo) => {
    const g = metricasGoogle(google.filter((l) => l.periodo === periodo));
    const m = somaCompleta(social.filter((l) => l.periodo === periodo).map((l) => l.investimento));
    return { periodo, google: g.investimento, social: m, total: somaCompleta([g.investimento, m]) };
  });
}
