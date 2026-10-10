import { PageHeader } from '@/components/metric-card';
import { exigirModuloHabilitado } from '@/lib/gate-servidor';
import { serieAds } from '@/lib/v3/metricas';
import { GraficoCanal } from '../graficos';
import { SeletorMes, selecionarMes, moeda, numero } from './periodo';

export default async function MetaV3({ searchParams }: { searchParams: Promise<{ mes?: string }> }) {
  exigirModuloHabilitado('ads-meta');
  const { meses, selecionado } = selecionarMes((await searchParams).mes);
  const serie = serieAds('2022');
  const p = serie.find((x) => x.mes === selecionado)!;
  return <div className="space-y-6">
    <PageHeader kicker="V3 · Fase 2 · dados sintéticos" titulo="Meta Ads · alcance e resultados" descricao="Alcance e leads desta V3 são derivações sintéticas; conversas e interações permanecem resultados distintos registrados na base acadêmica original. Nenhuma pessoa foi medida." />
    <SeletorMes meses={meses} selecionado={selecionado} />
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[
      ['Investimento no mês', moeda(p.meta)], ['Alcance simulado', numero(p.alcanceMeta)], ['Leads simulados', numero(p.leadsMeta)], ['Resultados Meta', `${numero(p.conversasMeta)} conversas · ${numero(p.interacoesMeta)} interações`],
    ].map(([rotulo, valor]) => <div key={rotulo} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"><p className="text-xs text-[var(--text-muted)]">{rotulo}</p><p className="mt-2 text-xl font-semibold tabular-nums">{valor}</p></div>)}</section>
    <GraficoCanal dados={serie} canal="meta" />
    <p className="text-xs text-[var(--text-muted)]">Alcance, impressões, resultados, leads e conversões não são equivalentes. O dataset Meta original não mede impressões nem alcance; o alcance mostrado aqui é somente simulação determinística. Leads simulados são derivados apenas de conversas, não de interações.</p>
  </div>;
}
