import Link from 'next/link';
import { PageHeader } from '@/components/metric-card';
import { versionedPath } from '@/lib/interface';

const paginas = [
  ['/captacao', 'Captação', 'Funil e efetivação mensal de visitas em matrículas.'],
  ['/matriculas', 'Matrículas', 'Histórico e composição por série/etapa.'],
  ['/ads', 'Ads · visão geral', 'Resumo executivo do mês selecionado.'],
  ['/ads/google', 'Google Ads', 'Investimento, leads simulados e CPR experimental.'],
  ['/ads/meta', 'Meta Ads', 'Investimento, alcance e leads simulados.'],
  ['/ads/estrategia', 'Estratégia', 'Comparação temporal entre mídia e desfechos.'],
] as const;

export default function HomeV3() {
  return <div className="space-y-8">
    <PageHeader kicker="V3 · versão final do protótipo acadêmico" titulo="Painel de análise de marketing" descricao="V3 incorpora sete feedbacks da avaliação da V2 pela mesma participante P1. Dados inteiramente sintéticos; a V3 ainda não foi avaliada por ela." />
    <div className="grid gap-4 sm:grid-cols-2">{paginas.map(([rota, titulo, descricao]) => <Link key={rota} href={versionedPath('v3', rota)} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--accent-blue)]/50"><h2 className="text-lg font-semibold">{titulo}</h2><p className="mt-2 text-sm text-[var(--text-muted)]">{descricao}</p></Link>)}</div>
    <p className="text-sm text-[var(--text-muted)]">Fases 1 e 2 ativas. Fases 3 (Conteúdo orgânico) e 4 (Gestão e Arquitetura) permanecem bloqueadas.</p>
  </div>;
}
