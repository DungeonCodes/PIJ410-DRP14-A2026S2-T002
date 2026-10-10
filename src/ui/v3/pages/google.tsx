import { PageHeader } from '@/components/metric-card';
import { exigirModuloHabilitado } from '@/lib/gate-servidor';
import { serieAds } from '@/lib/v3/metricas';
import { GraficoCanal } from '../graficos';
import { PrevisaoV3 } from '../previsao';
import { SeletorMes, selecionarMes, moeda, numero } from './periodo';

export default async function GoogleV3({ searchParams }: { searchParams: Promise<{ mes?: string }> }) {
  exigirModuloHabilitado('ads-google');
  const { meses, selecionado } = selecionarMes((await searchParams).mes);
  const serie = serieAds('2022');
  const p = serie.find((x) => x.mes === selecionado)!;
  return <div className="space-y-6">
    <PageHeader kicker="V3 · Fase 2 · dados sintéticos" titulo="Google Ads · investimento e resultados" descricao="Análise mensal de investimento, conversões da plataforma e leads simulados. Leads são derivados dos cliques por regra acadêmica; não correspondem a pessoas verificadas nem a matrículas atribuídas." />
    <SeletorMes meses={meses} selecionado={selecionado} />
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[
      ['Investimento no mês', moeda(p.google)], ['Conversões registradas', numero(p.conversoesGoogle)], ['Leads simulados', numero(p.leadsGoogle)], ['CPR Google', moeda(p.cprGoogle)],
    ].map(([rotulo, valor]) => <div key={rotulo} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"><p className="text-xs text-[var(--text-muted)]">{rotulo}</p><p className="mt-2 text-2xl font-semibold tabular-nums">{valor}</p></div>)}</section>
    <GraficoCanal dados={serie} canal="google" />
    <p className="text-xs text-[var(--text-muted)]">CPR = investimento ÷ conversões registradas. O gráfico temporal acima mostra investimento e leads em painéis separados para preservar as unidades.</p>
    <PrevisaoV3 />
  </div>;
}
