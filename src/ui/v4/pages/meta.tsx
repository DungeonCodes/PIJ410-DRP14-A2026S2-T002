import { UI_V3 } from '../../v3';
import { SOCIAL_LOCAL } from '@/lib/ads/dados';
import { gerarAnunciosMeta, rankingMeta } from '@/lib/v4/ads';
import { selecionarMes, moeda, numero } from '@/ui/v3/pages/periodo';

const MetaV3 = UI_V3.pages['/ads/meta'];

export default async function MetaV4(props: { searchParams: Promise<{ mes?: string }> }) {
  const { selecionado } = selecionarMes((await props.searchParams).mes);
  const anuncios = rankingMeta(gerarAnunciosMeta(SOCIAL_LOCAL.filter((l) => l.periodo.startsWith(selecionado))));
  return <div className="space-y-6">
    <MetaV3 {...props} />
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5" aria-label="Ranking de anúncios Meta V4">
      <h2 className="text-lg font-semibold">Melhores anúncios · dados sintéticos</h2>
      <p className="mt-2 max-w-4xl text-sm leading-6 text-[var(--text-muted)]">Top 5 de criativos fictícios que rodaram como anúncios no mês selecionado. Ordenação pelo menor CPR válido (investimento ÷ conversas); desempate por mais conversas, menor investimento e ID. Sem conversas, o CPR fica indisponível. Somente a campanha de conversas participa; interações têm outra definição de resultado. Este ranking é distinto dos Reels orgânicos.</p>
      <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="text-[var(--text-muted)]"><tr><th className="pb-3">Posição</th><th>Anúncio/post fictício</th><th>Campanha</th><th>Investimento</th><th>Conversas</th><th>CPR Meta</th></tr></thead><tbody className="divide-y divide-[var(--border)]">{anuncios.slice(0, 5).map((a, i) => <tr key={a.id}><td className="py-3 tabular-nums">{i + 1}</td><th className="font-medium">{a.nome}</th><td>{a.campanha}</td><td className="tabular-nums">{moeda(a.investimento)}</td><td className="tabular-nums">{numero(a.resultados)}</td><td className="tabular-nums">{moeda(a.cpr)}</td></tr>)}</tbody></table></div>
      <p className="mt-3 text-xs text-[var(--text-muted)]">Partição sintética determinística da linha mensal de conversas. Não há posts ou desempenho reais, nem recomendação automática de orçamento. “—” indica indisponibilidade.</p>
    </section>
  </div>;
}
