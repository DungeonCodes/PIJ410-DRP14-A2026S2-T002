import artefato from '@/data/google-cpr-sazonal.json';
import { GraficosCPRSazonal } from '@/ui/v2/components/graficos-cpr-sazonal';

const formatar = (v: number | null, casas = 2) => v === null ? '—' : v.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas });
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export function PrevisaoV3() {
  const a = artefato;
  return <section data-experimento="cpr-sazonal-v3" className="space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
    <div><p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-yellow)]">Previsão experimental · desempenho limitado</p><h2 className="mt-1 text-xl font-semibold">Sobre a previsão de CPR</h2></div>
    <p className="max-w-3xl text-sm leading-6 text-[var(--text-muted)]">A linha azul representa CPR histórico observado no cenário sintético; a linha tracejada representa valores previstos. A variação dos valores faz parte do resultado experimental e não foi suavizada. A previsão é informação complementar para análise, não recomendação automática de investimento.</p>
    <div className="rounded-xl border border-[var(--accent-yellow)]/30 bg-[var(--accent-yellow)]/[0.06] p-4 text-sm">No holdout principal, o R² da regressão foi negativo ({formatar(a.modelMetrics.r2, 3)}). A regressão superou a referência sazonal t−12, mas não a persistência t−2. Interprete os valores com cautela.</div>
    <GraficosCPRSazonal historico={a.historicalSeries.map((m) => ({ periodo: m.periodo, cpr: m.cpr }))} futuro={a.futureForecast.map((m) => ({ periodo: m.periodo, cpr: m.cprPrevisto }))} sazonalidade={a.seasonalIndex.map((m) => ({ mes: meses[m.mes - 1], indice: m.indice }))} />
    <details className="rounded-xl border border-[var(--border)] p-4"><summary className="cursor-pointer font-semibold">Resultados quantitativos do experimento</summary><div className="mt-3 overflow-x-auto"><table className="w-full min-w-[460px] text-left text-sm"><thead><tr><th>Modelo</th><th>MAE</th><th>RMSE</th><th>R²</th></tr></thead><tbody>{([
      ['Persistência t−2', a.baselineMetrics.persistencia], ['Sazonal t−12', a.baselineMetrics.sazonal], ['Regressão linear', a.modelMetrics],
    ] as const).map(([nome, m]) => <tr key={nome} className="border-t border-[var(--border)]"><th className="py-2">{nome}</th><td>{formatar(m.mae, 6)}</td><td>{formatar(m.rmse, 6)}</td><td>{formatar(m.r2, 6)}</td></tr>)}</tbody></table></div><p className="mt-3 text-xs text-[var(--text-muted)]">CPR = investimento / conversões Google registradas. Não mede custo por matrícula ou lead único. O artefato e o algoritmo originais permanecem intactos.</p></details>
  </section>;
}
