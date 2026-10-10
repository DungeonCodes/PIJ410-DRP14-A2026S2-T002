import { GOOGLE_LOCAL, SOCIAL_LOCAL } from '@/lib/ads/dados';
import { metricasGoogle, somaCompleta, type LinhaGoogle, type LinhaMeta } from '@/lib/ads/metricas';
import { obterMatriculas } from '@/lib/matriculas-data';
import { CICLOS } from '@/lib/sintetico/cenario';
import { calcularAlcanceMeta, calcularLeadsGoogle, calcularLeadsMeta } from './calculos';
export { efetivacaoMensal, V3_SYNTHETIC_SEED, V3_SYNTHETIC_RULE } from './calculos';

/** Classificação por turma existente; primeira safra excluída da composição. */
export function composicaoPorSerie(safras: number[], ciclos: string[]) {
  const dados = obterMatriculas(safras, ciclos);
  const classificaveis = safras.filter((s) => !dados.safrasIndeterminadas.includes(s));
  const grupos = obterMatriculas(classificaveis, ciclos);
  return { linhas: grupos.turmas, safrasIndeterminadas: safras.filter((s) => dados.safrasIndeterminadas.includes(s)) };
}

/**
 * Extensão sintética V3, sem mutação dos JSONs da V1/V2. A string abaixo é a
 * semente/versionamento da regra: mesmo input produz exatamente mesmo output.
 * Google: 7% dos cliques como leads simulados. Meta: 55% das conversas como
 * leads simulados, nunca das interações; alcance sintético por gasto e
 * resultados da linha, sem confundi-lo com impressões ou pessoas reais.
 */
export function leadsGoogle(linhas: readonly LinhaGoogle[]): number | null {
  const cliques = somaCompleta(linhas.map((l) => l.cliques));
  return calcularLeadsGoogle(cliques);
}

export function leadsMeta(linhas: readonly LinhaMeta[]): number | null {
  const conversas = somaCompleta(linhas.filter((l) => l.indicador === 'conversa').map((l) => l.resultados));
  return calcularLeadsMeta(conversas);
}

export function alcanceMeta(linhas: readonly LinhaMeta[]): number | null {
  const investimento = somaCompleta(linhas.map((l) => l.investimento));
  const resultados = somaCompleta(linhas.map((l) => l.resultados));
  return calcularAlcanceMeta(investimento, resultados);
}

export function mesesAds() {
  const google = new Set(GOOGLE_LOCAL.filter((l) => l.cobertura === 'fechado').map((l) => l.periodo.slice(0, 7)));
  const meta = new Set(SOCIAL_LOCAL.filter((l) => l.cobertura === 'fechado').map((l) => l.periodo.slice(0, 7)));
  return [...google].filter((m) => meta.has(m)).sort();
}

export function serieAds(ano: string) {
  return mesesAds().filter((m) => m.startsWith(ano)).map((mes) => {
    const g = GOOGLE_LOCAL.filter((l) => l.periodo.startsWith(mes) && l.cobertura === 'fechado');
    const m = SOCIAL_LOCAL.filter((l) => l.periodo.startsWith(mes) && l.cobertura === 'fechado');
    const mg = metricasGoogle(g);
    const investimentoMeta = somaCompleta(m.map((l) => l.investimento));
    return {
      mes, google: mg.investimento, meta: investimentoMeta,
      total: mg.investimento === null || investimentoMeta === null ? null : mg.investimento + investimentoMeta,
      conversoesGoogle: mg.conversoes,
      conversasMeta: somaCompleta(m.filter((l) => l.indicador === 'conversa').map((l) => l.resultados)),
      interacoesMeta: somaCompleta(m.filter((l) => l.indicador === 'interacao').map((l) => l.resultados)),
      leadsGoogle: leadsGoogle(g), leadsMeta: leadsMeta(m), alcanceMeta: alcanceMeta(m),
      cprGoogle: mg.cpr,
    };
  });
}

/** Somente meses sobrepostos em 2022. Bases fictícias independentes. */
export function serieEstrategia(ano: string) {
  const dados = obterMatriculas([Number(ano)], [...CICLOS]);
  return serieAds(ano).map((p) => {
    const indice = Number(p.mes.slice(5, 7)) - 1;
    const observacao = dados.mensal[indice]?.[ano];
    return {
      ...p,
      leads: p.leadsGoogle === null || p.leadsMeta === null ? null : p.leadsGoogle + p.leadsMeta,
      matriculas: typeof observacao === 'number' ? observacao : null,
    };
  });
}
