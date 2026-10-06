// Consumidor exclusivo de /ads/google. Nenhum outro painel depende do artefato de ML.
import resultado from '@/data/google-cpr-experimento.json';

export function ResultadosGoogleCPR() {
  return (
    <section className="space-y-3 rounded-2xl border border-[var(--border)] p-5">
      <h2 className="text-lg font-semibold">Experimento acadêmico de CPR</h2>
      <p className="text-sm text-[var(--text-muted)]">Resultados fixos do experimento completo, independentes dos filtros. Features do mês t−2 já disponíveis na emissão de t; split temporal e treino sem dados de teste. Sem recomendação automática de orçamento.</p>
      <p className="text-sm">Treino: {resultado.treino} amostras · teste: {resultado.teste} · corte: {resultado.corteTreino}.</p>
      <p className="text-sm text-[var(--text-muted)]">Features: CPR, CTR, CPC e log(1 + cliques) históricos de t−2; seno e cosseno do mês de t. Maturação de 14 dias apenas como hipótese sintética; padronização ajustada somente no treino. Artefato reproduzível pela CLI, sem treinamento no navegador.</p>
      <div className="overflow-x-auto"><table className="w-full min-w-[440px] text-left text-sm">
        <thead><tr><th>Modelo</th><th>MAE (R$ fictícios)</th><th>RMSE (R$ fictícios)</th><th>R²</th></tr></thead>
        <tbody>{Object.entries(resultado.metricas).map(([nome, metricas]) => (
          <tr key={nome}>
            <td>{nome === 'linear' ? 'Regressão linear' : 'Persistência t−2'}</td>
            <td>{metricas.mae.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td>{metricas.rmse.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td>{metricas.r2 === null ? '—' : metricas.r2.toLocaleString('pt-BR', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</td>
          </tr>
        ))}</tbody>
      </table></div>
      <p className="text-sm text-[var(--text-muted)]">O teste usa somente o cenário sintético. Os resultados não demonstram eficácia no ambiente real nem validação pela comunidade.</p>
      <p className="text-sm text-[var(--text-muted)]">A regressão apresentou erros menores que a persistência, mas o ganho foi modesto e o poder explicativo permaneceu baixo. O resultado não determina orçamento, não prevê matrículas e não garante redução de CPR.</p>
    </section>
  );
}
