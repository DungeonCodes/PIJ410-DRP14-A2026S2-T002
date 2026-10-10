import { PageHeader } from '@/components/metric-card';
import { exigirModuloHabilitado } from '@/lib/gate-servidor';
import { serieEstrategia } from '@/lib/v3/metricas';
import { GraficoEstrategia } from '../graficos';
import { SeletorMes, selecionarMes, moeda, numero } from './periodo';

export default async function EstrategiaV3({ searchParams }: { searchParams: Promise<{ mes?: string }> }) {
  exigirModuloHabilitado('ads-estrategia');
  const { meses, selecionado } = selecionarMes((await searchParams).mes);
  const serie = serieEstrategia('2022');
  const p = serie.find((x) => x.mes === selecionado)!;
  const orcamento = 10000; // Premissa fictícia já utilizada na V2; não é verba aprovada.
  return <div className="space-y-6">
    <PageHeader kicker="V3 · Fase 2 · dados sintéticos" titulo="Estratégia · evolução mensal integrada" descricao="Comparação temporal de investimento Google e Meta, leads simulados e matrículas observadas no histórico sintético independente. A justaposição por mês não demonstra causa nem atribui matrículas a canais." />
    <SeletorMes meses={meses} selecionado={selecionado} />
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[
      ['Investimento do mês', moeda(p.total)], ['Google / Meta', `${moeda(p.google)} / ${moeda(p.meta)}`], ['Leads simulados Ads', numero(p.leads)], ['Matrículas do histórico', numero(p.matriculas)],
    ].map(([rotulo, valor]) => <div key={rotulo} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"><p className="text-xs text-[var(--text-muted)]">{rotulo}</p><p className="mt-2 text-xl font-semibold tabular-nums">{valor}</p></div>)}</section>
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"><h2 className="text-base font-semibold">Referência de orçamento · {selecionado.slice(5,7)}/{selecionado.slice(0,4)}</h2><p className="mt-2 text-sm text-[var(--text-muted)]">Premissa fictícia: {moeda(orcamento)} · usado: {moeda(p.total)} · saldo: {moeda(p.total === null ? null : orcamento - p.total)}. A premissa não representa orçamento institucional aprovado nem recomendação.</p></section>
    <GraficoEstrategia dados={serie} />
    <p className="text-xs text-[var(--text-muted)]">As séries compartilham mês fictício, mas não pessoas, campanhas atribuídas ou origem institucional. Ads e Matrículas foram gerados em cenários independentes. Compare tendências somente como demonstração exploratória.</p>
  </div>;
}
