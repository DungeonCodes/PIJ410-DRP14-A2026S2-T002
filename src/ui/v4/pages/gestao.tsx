import { PageHeader } from '@/components/metric-card';
import { calcularPlano, PLANO_OCUPACAO } from '@/lib/v4/gestao';

export default function GestaoV4() {
  const plano = calcularPlano();
  return <div className="space-y-6">
    <PageHeader kicker="V4 · Fase 4 · premissa fictícia" titulo="Objetivo da Gestão" descricao="Plano acadêmico de ocupação de turmas para 2026. Os números abaixo são premissas inventadas para demonstrar a separação entre meta e observação; não foram fornecidos nem aprovados pela instituição parceira." />
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"><p className="text-xs text-[var(--text-muted)]">Vagas previstas no plano fictício</p><p className="mt-2 text-2xl font-semibold">{plano.vagas}</p></div>
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"><p className="text-xs text-[var(--text-muted)]">Ocupação alvo fictícia</p><p className="mt-2 text-2xl font-semibold">{plano.vagasAlvo}</p></div>
    </div>
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <h2 className="text-lg font-semibold">Premissas por turma fictícia</h2>
      <div className="mt-4 overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead className="text-[var(--text-muted)]"><tr><th className="pb-3">Etapa</th><th>Vagas hipotéticas</th><th>Taxa alvo</th><th>Vagas alvo</th></tr></thead><tbody className="divide-y divide-[var(--border)]">{plano.linhas.map((x) => <tr key={x.id}><th className="py-3">{x.etapa}</th><td>{x.vagas}</td><td>{(x.ocupacaoAlvo * 100).toLocaleString('pt-BR')}%</td><td>{x.vagasAlvo}</td></tr>)}</tbody></table></div>
      <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">Vagas alvo = arredondamento de vagas hipotéticas × taxa alvo, calculado por linha; os totais somam as linhas. Não há coluna de realizado, desvio ou previsão. Este plano não é comparado às matrículas sintéticas do painel, pois as bases foram construídas de forma independente.</p>
    </section>
    <p className="text-xs text-[var(--text-muted)]">Origem: {PLANO_OCUPACAO.origem}. Versão do cenário: {PLANO_OCUPACAO.versao}. Nenhuma integração com sistema acadêmico ou decisão operacional.</p>
  </div>;
}
