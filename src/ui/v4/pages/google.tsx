import { UI_V3 } from '../../v3';
import { GOOGLE_LOCAL } from '@/lib/ads/dados';
import { gerarPalavrasGoogle, rankingGoogle } from '@/lib/v4/ads';
import { selecionarMes, moeda, numero } from '@/ui/v3/pages/periodo';

const GoogleV3 = UI_V3.pages['/ads/google'];

export default async function GoogleV4(props: { searchParams: Promise<{ mes?: string }> }) {
  const { selecionado } = selecionarMes((await props.searchParams).mes);
  const palavras = rankingGoogle(gerarPalavrasGoogle(GOOGLE_LOCAL.filter((l) => l.periodo.startsWith(selecionado))));
  return <div className="space-y-6">
    <GoogleV3 {...props} />
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5" aria-label="Ranking de palavras-chave Google V4">
      <h2 className="text-lg font-semibold">Melhores palavras-chave · dados sintéticos</h2>
      <p className="mt-2 max-w-4xl text-sm leading-6 text-[var(--text-muted)]">Top 5 de palavras fictícias no mês selecionado, ordenadas pelo menor CPR válido (custo ÷ conversões registradas no Google Ads). Desempate por mais conversões, menor custo e ID. Conversão zero torna o CPR indisponível e fica após os valores válidos.</p>
      <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="text-[var(--text-muted)]"><tr><th className="pb-3">Posição</th><th>Palavra-chave fictícia</th><th>Campanha</th><th>Cliques</th><th>Conversões</th><th>Custo</th><th>CPR Google</th></tr></thead><tbody className="divide-y divide-[var(--border)]">{palavras.slice(0, 5).map((p, i) => <tr key={p.id}><td className="py-3 tabular-nums">{i + 1}</td><th className="font-medium">{p.palavra}</th><td>{p.campanha}</td><td className="tabular-nums">{numero(p.cliques)}</td><td className="tabular-nums">{numero(p.conversoes)}</td><td className="tabular-nums">{moeda(p.custo)}</td><td className="tabular-nums">{moeda(p.cpr)}</td></tr>)}</tbody></table></div>
      <p className="mt-3 text-xs text-[var(--text-muted)]">Partição sintética determinística das campanhas de Pesquisa. Conversões da plataforma não são matrículas, leads únicos nem pessoas; o ranking não recomenda orçamento. “—” indica indisponibilidade.</p>
    </section>
  </div>;
}
