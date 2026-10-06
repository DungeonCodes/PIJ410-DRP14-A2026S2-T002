// Consumidor exclusivo de /ads/google. Nenhum outro painel depende do artefato de ML.
import resultado from '@/data/google-cpr-experimento.json';

export function ResultadosGoogleCPR() {
  return (
    <section className="space-y-3 rounded-2xl border border-[var(--border)] p-5">
      <h2 className="text-lg font-semibold">Experimento exploratório de regressão</h2>
      <p className="text-sm text-[var(--text-muted)]">Resultados fixos do experimento completo, independentes dos filtros. Features do mês t−2 já disponíveis na emissão de t; split temporal e treino sem dados de teste. Sem recomendação automática de orçamento.</p>
      <p className="text-sm">Treino: {resultado.treino} amostras · teste: {resultado.teste} · corte: {resultado.corteTreino}.</p>
      <table className="w-full text-left text-sm">
        <thead><tr><th>Modelo</th><th>MAE (R$)</th><th>RMSE (R$)</th><th>R²</th></tr></thead>
        <tbody>{Object.entries(resultado.metricas).map(([nome, metricas]) => (
          <tr key={nome}>
            <td>{nome === 'linear' ? 'Regressão linear' : 'Persistência t−2'}</td>
            <td>{metricas.mae.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</td>
            <td>{metricas.rmse.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</td>
            <td>{metricas.r2 === null ? '—' : metricas.r2.toFixed(3)}</td>
          </tr>
        ))}</tbody>
      </table>
      <p className="text-sm text-[var(--text-muted)]">O teste usa somente o cenário sintético. Os resultados não demonstram eficácia no ambiente real nem validação pela comunidade.</p>
    </section>
  );
}
