import artefato from '@/data/google-cpr-sazonal.json';
import { GraficosCPRSazonal } from './graficos-cpr-sazonal';

const numero = (n: number | null, casas = 2) => n === null ? '—' : n.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas });
const periodo = (p: string) => `${p.slice(5, 7)}/${p.slice(0, 4)}`;
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export function PrevisaoCPRSazonal() {
  const a = artefato;
  const ordenadas = [...a.futureForecast].sort((x, y) => y.cprPrevisto - x.cprPrevisto);
  const superior = a.comparison.superaSazonal;
  return (
    <section data-experimento="cpr-sazonal-v2" className="space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <div><p className="text-xs text-[var(--text-muted)]">V2 · evolução técnica acadêmica · não originada de feedback comunitário</p>
        <h2 className="mt-1 text-xl font-semibold">Previsão sazonal experimental de CPR</h2>
      </div>
      <p className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-3 text-sm">Experimento acadêmico com dados sintéticos. As projeções demonstram aplicação de aprendizagem de máquina e não constituem recomendação de investimento.</p>
      <p className="text-sm text-[var(--text-muted)]">CPR = soma do investimento / soma das conversões registradas no Google Ads. Não é custo por matrícula ou lead único e não estabelece causalidade. Histórico completo de {a.years[0]} a {a.years.at(-1)}; todas as quatro campanhas sintéticas. Esta seção usa o artefato integral da CLI e não muda com os filtros do painel acima.</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[['Modelo', 'LinearRegression · OLS local'], ['Baseline sazonal', 'CPR do mesmo mês do ano anterior (t−12)'], ['Treino / teste', `${a.trainPeriod.amostras} / ${a.testPeriod.amostras} meses`], ['Horizonte', `${periodo(a.futureForecast[0].periodo)} a ${periodo(a.futureForecast.at(-1)!.periodo)}`]].map(([titulo, valor]) => <div key={titulo} className="rounded-xl border border-[var(--border)] p-3"><p className="text-xs text-[var(--text-muted)]">{titulo}</p><p className="mt-1 text-sm font-semibold">{valor}</p></div>)}
      </div>
      <div className="overflow-x-auto"><table className="w-full min-w-[500px] text-left text-sm"><caption className="mb-2 text-left text-[var(--text-muted)]">Holdout recursivo: {periodo(a.testPeriod.inicio)}–{periodo(a.testPeriod.fim)}. Origem e modelo fixos; nenhum target do teste entra como observação.</caption><thead><tr><th className="p-2">Modelo</th><th>MAE (R$ sintéticos)</th><th>RMSE</th><th>R²</th></tr></thead><tbody>
        {([['Persistência t−2', a.baselineMetrics.persistencia], ['Sazonal t−12', a.baselineMetrics.sazonal], ['Regressão linear', a.modelMetrics]] as const).map(([nome, m]) => <tr key={nome} className="border-t border-[var(--border)]"><td className="p-2">{nome}</td><td>{numero(m.mae)}</td><td>{numero(m.rmse)}</td><td>{numero(m.r2, 3)}</td></tr>)}
      </tbody></table></div>
      <p className="text-sm">O modelo apresentou MAE {numero(a.modelMetrics.mae)} contra {numero(a.baselineMetrics.sazonal.mae)} do baseline sazonal. {superior ? 'Superou t−12 em MAE e RMSE neste holdout sintético.' : 'Não superou t−12 simultaneamente em MAE e RMSE.'} Diferença de MAE: {numero(a.comparison.mae.diferencaAbsoluta)} ({numero(a.comparison.mae.reducaoPercentual)}% de redução; negativo significa piora).</p>
      <p className="text-sm text-[var(--text-muted)]">{a.modelMetrics.mae > a.baselineMetrics.persistencia.mae ? 'A persistência t−2 teve menor MAE que a regressão.' : 'A regressão teve MAE não superior à persistência t−2.'} R² {numero(a.modelMetrics.r2, 3)}: {a.modelMetrics.r2 !== null && a.modelMetrics.r2 < 0 ? 'negativo, inferior à referência da média do teste usada na definição de R².' : 'não demonstra eficácia real.'} Resultado não garante capacidade de previsão em dados reais.</p>
      <GraficosCPRSazonal historico={a.historicalSeries.map((m) => ({ periodo: m.periodo, cpr: m.cpr }))} futuro={a.futureForecast.map((m) => ({ periodo: m.periodo, cpr: m.cprPrevisto }))} sazonalidade={a.seasonalIndex.map((m) => ({ mes: meses[m.mes - 1], indice: m.indice }))} />
      <p className="text-sm">No cenário projetado, os maiores CPRs são estimados para {periodo(ordenadas[0].periodo)} e {periodo(ordenadas[1].periodo)}; os menores para {periodo(ordenadas.at(-1)!.periodo)} e {periodo(ordenadas.at(-2)!.periodo)}. São estimativas derivadas do artefato, não causalidade ou crescimento obrigatório. A recursão pode amplificar valores extremos do histórico.</p>
      <details className="rounded-xl border border-[var(--border)] p-3"><summary className="cursor-pointer text-sm">Valores projetados e diagnóstico sazonal</summary>
        <div className="mt-3 overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr><th>Mês projetado</th><th>CPR estimado</th><th>Δ mês anterior</th><th>Índice histórico</th></tr></thead><tbody>{a.futureForecast.map((m, i) => <tr key={m.periodo}><td>{periodo(m.periodo)}</td><td>{numero(m.cprPrevisto)}</td><td>{i ? numero(m.cprPrevisto - a.futureForecast[i - 1].cprPrevisto) : '— (anterior provisório)'}</td><td>{numero(m.indiceSazonal, 3)}</td></tr>)}</tbody></table></div>
        <div className="mt-4 overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr><th>Mês</th><th>Média CPR</th><th>Mediana</th><th>Desvio padrão</th><th>Anos</th><th>Índice</th></tr></thead><tbody>{a.seasonalIndex.map((m) => <tr key={m.mes}><td>{meses[m.mes - 1]}</td><td>{numero(m.media)}</td><td>{numero(m.mediana)}</td><td>{numero(m.desvioPadrao)}</td><td>{m.nAnos}</td><td>{numero(m.indice, 3)}</td></tr>)}</tbody></table></div>
      </details>
      <p className="text-xs text-[var(--text-muted)]">Sazonalidade descritiva não é ML: índice = média histórica do mês / média global dos CPRs mensais válidos. Valores extremos podem afetar a média; comparar também mediana e dispersão. Índice 1 significa média; acima/abaixo de 1 indica comportamento histórico relativo, não causa.</p>
      <p className="text-sm text-[var(--text-muted)]">Features: seno/cosseno do mês, índice temporal e CPR t−2/t−12. t−1 excluído pela maturação sintética de 14 dias; t−24 excluído para preservar amostras. Padronização somente no treino. Modelo final reajustado em {a.finalTrainPeriod.amostras} meses elegíveis. Previsão recursiva: janeiro/2023 provisório é estimado apenas como lag auxiliar, não como histórico observado. Não há intervalo de confiança calculado, treinamento no navegador ou recomendação automática de orçamento, matrículas, ROI ou receita.</p>
    </section>
  );
}
