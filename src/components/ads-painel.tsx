import { Suspense } from 'react';
import { BarraDeFiltros } from '@/components/filtros';
import { GraficoMensal } from '@/components/graficos';
import { BarraCenario, MetricCard, PageHeader } from '@/components/metric-card';
import { ADS_META, selecionarAds, compararInvestimentos } from '@/lib/ads/dados';
import { compararOrcamento, metricasGoogle, metricasMeta } from '@/lib/ads/metricas';

type Modo = 'visao' | 'google' | 'meta' | 'estrategia';
const titulos: Record<Modo, string> = { visao: 'Ads — visão consolidada', google: 'Google Ads — análise e experimento CPR', meta: 'Meta Ads — resultados por indicador', estrategia: 'Estratégia — comparação de investimentos' };
const exibir = (valor: number | null) => valor === null ? '—' : valor.toLocaleString('pt-BR', { maximumFractionDigits: 2 });

export function PainelAds({ modo, anos, campanhas }: { modo: Modo; anos?: string; campanhas?: string }) {
  const recorte = selecionarAds(anos, modo === 'google' ? campanhas : undefined);
  const g = metricasGoogle(recorte.google);
  const serie = compararInvestimentos(recorte.google, recorte.social);
  return (
    <div className="space-y-8">
      <PageHeader kicker="Fase 2 · ambiente acadêmico · dados sintéticos" titulo={titulos[modo]} descricao="Cenário independente com dados sintéticos. Conversões do Google, conversas e interações sociais têm significados diferentes; nenhuma delas comprova leads únicos, matrículas ou causalidade." meta={<BarraCenario itens={[{ rotulo: 'Cenário', valor: ADS_META.scenario_version }, { rotulo: 'Semente', valor: ADS_META.seed }, { rotulo: 'Cronologia', valor: '2017–2023 · fictícia' }]} />} />
      <Suspense fallback={null}>
        <BarraDeFiltros titulo="Ano-calendário fictício" chave="anos" opcoes={recorte.anos} selecionados={recorte.selecionados} />
        {modo === 'google' && <BarraDeFiltros titulo="Campanhas fictícias" chave="campanhas" opcoes={recorte.campanhas} selecionados={recorte.escolhidas} />}
      </Suspense>
      {(modo === 'google' || modo === 'visao') && (
        <>
          <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricCard rotulo="Investimento Google (R$)" valor={g.investimento} />
            <MetricCard rotulo="Impressões Google" valor={g.impressoes} />
            <MetricCard rotulo="Cliques" valor={g.cliques} />
            <MetricCard rotulo="Conversões registradas" valor={g.conversoes} />
            <MetricCard rotulo="CPR Google (R$)" valor={g.cpr === null ? null : Math.round(g.cpr * 100) / 100} detalhe="Custo / conversões; não é custo por matrícula" />
          </section>
          <p className="text-sm text-[var(--text-muted)]">CTR: {exibir(g.ctrPct)}% · CPC: R$ {exibir(g.cpc)} · CPM: R$ {exibir(g.cpm)}. Taxas recalculadas sobre totais; ausência não vira zero. Cobertura: {g.cobertura}.</p>
          <p className="text-sm text-[var(--text-muted)]">CPR = investimento / conversões registradas no Google Ads. Não é custo por matrícula ou lead único e não implica atribuição causal.</p>
        </>
      )}
      {modo === 'google' && (
        <>
          <GraficoMensal dados={serie.map((s) => ({ mes: s.periodo.slice(0, 7), '1': metricasGoogle(recorte.google.filter((l) => l.periodo === s.periodo)).cpr }))} safras={[1]} rotulos={{ '1': 'Google Ads' }} titulo="CPR por mês fictício" nota="Linha interrompida = CPR indisponível por ausência de cobertura ou de conversões; não é queda para zero." />
        </>
      )}
      {(modo === 'meta' || modo === 'visao') && (
        <section className="space-y-3 rounded-2xl border border-[var(--border)] p-5">
          <h2 className="text-lg font-semibold">Meta Ads — indicadores avaliados separadamente</h2>
          <div className="overflow-x-auto"><table className="w-full min-w-[540px] text-left text-sm"><thead><tr><th>Indicador</th><th>Gasto (R$)</th><th>Resultados</th><th>Custo/resultado (R$)</th></tr></thead><tbody>
            {(['conversa', 'interacao'] as const).map((indicador) => { const m = metricasMeta(recorte.social.filter((l) => l.indicador === indicador)); return <tr key={indicador}><td>{indicador}</td><td>{exibir(m.investimento)}</td><td>{exibir(m.resultados)}</td><td>{exibir(m.cpr)}</td></tr>; })}
          </tbody></table></div>
          <p className="text-sm text-[var(--text-muted)]">Uma linha sem medição torna o agregado incompleto. Conversas e interações não são somadas como um resultado único. Análise determinística, sem ML.</p>
        </section>
      )}
      {(modo === 'visao' || modo === 'estrategia') && (
        <section className="space-y-3 rounded-2xl border border-[var(--border)] p-5">
          <h2 className="text-lg font-semibold">Investimento por mês-calendário e canal</h2>
          <div className="overflow-x-auto"><table className="w-full min-w-[540px] text-left text-sm"><thead><tr><th>Período</th><th>Google (R$)</th><th>Social (R$)</th><th>Total completo (R$)</th></tr></thead><tbody>
            {serie.map((s) => <tr key={s.periodo}><td>{s.periodo.slice(0, 7)}</td><td>{exibir(s.google)}</td><td>{exibir(s.social)}</td><td>{exibir(s.total)}</td></tr>)}
          </tbody></table></div>
          <p className="text-sm text-[var(--text-muted)]">O total aparece somente quando ambos os canais possuem cobertura. O ano-calendário não é tratado como safra acadêmica ou ciclo financeiro.</p>
          {modo === 'estrategia' && (() => { const realizado = serie.at(-1)?.total ?? null; const c = compararOrcamento(10000, realizado); return <p className="text-sm">Premissa sintética para demonstração acadêmica: orçamento mensal de R$ {exibir(c.planejado)}; gasto do último mês selecionado: R$ {exibir(c.realizado)}; saldo (orçamento menos gasto): R$ {exibir(c.planejado === null || c.realizado === null ? null : c.planejado - c.realizado)}; execução: {exibir(c.execucaoPct)}%. A premissa de R$ 10.000 foi inventada para esta demonstração e não representa orçamento aprovado ou recomendação. Análise determinística, sem otimização ou execução de campanhas.</p>; })()}
        </section>
      )}
    </div>
  );
}
