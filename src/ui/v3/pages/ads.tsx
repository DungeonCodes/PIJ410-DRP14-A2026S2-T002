import { PageHeader } from '@/components/metric-card';
import { exigirModuloHabilitado } from '@/lib/gate-servidor';
import { serieAds } from '@/lib/v3/metricas';
import { SeletorMes, selecionarMes, moeda, numero } from './periodo';

export default async function AdsV3({ searchParams }: { searchParams: Promise<{ mes?: string }> }) {
  exigirModuloHabilitado('ads');
  const { meses, selecionado } = selecionarMes((await searchParams).mes);
  const p = serieAds('2022').find((x) => x.mes === selecionado)!;
  return <div className="space-y-6">
    <PageHeader kicker="V3 · Fase 2 · dados sintéticos" titulo="Ads · resumo executivo mensal" descricao="Quanto foi investido no mês e quais resultados distintos aparecem em cada plataforma? Cenário fictício de 2022, sem atribuição de matrículas." />
    <SeletorMes meses={meses} selecionado={selecionado} />
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Indicadores principais do mês">
      {[
        ['Investimento total', moeda(p.total), 'Google + Meta, se ambos completos'],
        ['Conversões Google', numero(p.conversoesGoogle), 'Registro da plataforma; não é lead único'],
        ['Conversas Meta', numero(p.conversasMeta), 'Interações não são somadas'],
        ['Leads simulados', numero(p.leadsGoogle === null || p.leadsMeta === null ? null : p.leadsGoogle + p.leadsMeta), 'Extensão acadêmica determinística'],
      ].map(([rotulo, valor, detalhe]) => <div key={rotulo} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"><p className="text-xs text-[var(--text-muted)]">{rotulo}</p><p className="mt-2 text-2xl font-semibold tabular-nums">{valor}</p><p className="mt-1 text-xs text-[var(--text-dim)]">{detalhe}</p></div>)}
    </section>
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"><h2 className="text-lg font-semibold">Resumo por plataforma · {selecionado.slice(5, 7)}/{selecionado.slice(0, 4)}</h2><div className="mt-4 overflow-x-auto"><table className="w-full min-w-[650px] text-left text-sm"><thead><tr className="text-[var(--text-muted)]"><th className="pb-3">Canal</th><th>Investimento</th><th>Resultado da plataforma</th><th>Leads simulados</th><th>Indicador adicional</th></tr></thead><tbody className="divide-y divide-[var(--border)]"><tr><th className="py-3">Google Ads</th><td>{moeda(p.google)}</td><td>{numero(p.conversoesGoogle)} conversões</td><td>{numero(p.leadsGoogle)}</td><td>CPR {moeda(p.cprGoogle)}</td></tr><tr><th className="py-3">Meta Ads</th><td>{moeda(p.meta)}</td><td>{numero(p.conversasMeta)} conversas; {numero(p.interacoesMeta)} interações</td><td>{numero(p.leadsMeta)}</td><td>Alcance simulado {numero(p.alcanceMeta)}</td></tr></tbody></table></div></section>
    <p className="text-xs text-[var(--text-muted)]">Leads e alcance são extensões sintéticas da V3, não medições reais. Conversões, conversas, interações, leads e alcance mantêm definições distintas. Os gráficos detalhados estão nos painéis Google Ads, Meta Ads e Estratégia.</p>
  </div>;
}
