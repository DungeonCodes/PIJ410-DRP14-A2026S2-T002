import Link from 'next/link';
import { PageHeader } from '@/components/metric-card';
import { modulosDaVersao } from '@/lib/fases';
import { versionedPath } from '@/lib/interface';

const descricoes: Record<string, string> = {
  captacao: 'Funil e efetivação mensal preservados da V3.',
  matriculas: 'Histórico e composição por série preservados da V3.',
  ads: 'Resumo mensal por canal preservado da V3.',
  'ads-google': 'Investimento, leads simulados e CPR experimental preservados.',
  'ads-meta': 'Investimento, alcance e resultados distintos preservados.',
  'ads-estrategia': 'Comparação temporal sem atribuição causal preservada.',
  organico: 'Novo: Reels sintéticos e ranking explicável.',
  gestao: 'Novo: premissas fictícias de ocupação de turmas.',
  arquitetura: 'Novo: fontes, regras e limites da solução.',
};

export default function HomeV4() {
  return <div className="space-y-8">
    <PageHeader kicker="V4 · quatro fases funcionais" titulo="Painel acadêmico integrado" descricao="A V4 acrescenta Reels orgânicos, Objetivo da Gestão e Arquitetura & Algoritmos para completar o escopo funcional documentado. A transição V3→V4 é técnica e acadêmica, sem nova avaliação de P1 ou de outra pessoa. Todos os dados e premissas novos são fictícios." />
    <section className="grid gap-4 sm:grid-cols-2" aria-label="Módulos da V4">
      {modulosDaVersao('v4').map((m) => <Link key={m.chave} href={versionedPath('v4', m.rota)} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--accent-blue)]/50"><p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-blue)]">Fase {m.fase}</p><h2 className="mt-1 text-lg font-semibold">{m.grupo ? `${m.grupo} · ${m.rotulo}` : m.rotulo}</h2><p className="mt-2 text-sm text-[var(--text-muted)]">{descricoes[m.chave]}</p></Link>)}
    </section>
    <p className="text-sm leading-6 text-[var(--text-muted)]">As Fases 1 e 2 conservam a apresentação da V3 dentro da rota V4. As Fases 3 e 4 são novas nesta composição. O CPR continua experimental; não há integração operacional ou relação causal entre cenários independentes. A V4 ainda não foi submetida à avaliação comunitária.</p>
  </div>;
}
