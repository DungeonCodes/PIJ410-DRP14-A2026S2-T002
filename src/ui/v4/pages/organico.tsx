import { PageHeader } from '@/components/metric-card';
import { classificarPublicacoes, gerarPublicacoes, ORGANICO_CENARIO } from '@/lib/v4/organico';

export default async function OrganicoV4({ searchParams }: { searchParams: Promise<{ periodo?: string }> }) {
  const todas = gerarPublicacoes();
  const periodos = [...new Set(todas.map((p) => p.periodo))];
  const solicitado = (await searchParams).periodo;
  const periodo = solicitado && periodos.includes(solicitado) ? solicitado : 'todos';
  const linhas = classificarPublicacoes(periodo === 'todos' ? todas : todas.filter((p) => p.periodo === periodo));
  const numero = (n: number | null) => n === null ? '—' : n.toLocaleString('pt-BR');

  return <div className="space-y-6">
    <PageHeader kicker="V4 · Fase 3 · dados sintéticos" titulo="Reels orgânicos" descricao="Publicações fictícias de janeiro a junho de 2022. O ranking demonstra uma regra explícita de comparação; não mede o desempenho de perfis reais nem se liga aos resultados de Ads ou Matrículas." />
    <form className="flex flex-wrap items-end gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5" method="get">
      <label className="text-sm text-[var(--text-muted)]" htmlFor="periodo-organico">Período
        <select id="periodo-organico" name="periodo" defaultValue={periodo} className="mt-1 block rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-[var(--text)]">
          <option value="todos">Todos os meses</option>
          {periodos.map((p) => <option key={p} value={p}>{p.slice(5)}/{p.slice(0, 4)}</option>)}
        </select>
      </label>
      <button className="rounded-md bg-[var(--accent-blue)] px-4 py-2 text-sm font-semibold text-white" type="submit">Aplicar período</button>
    </form>
    <section className="grid gap-4 sm:grid-cols-3" aria-label="Resumo do período">
      {[
        ['Publicações fictícias', numero(linhas.length)],
        ['Com score', numero(linhas.filter((x) => x.score !== null).length)],
        ['Sem medição suficiente', numero(linhas.filter((x) => x.score === null).length)],
      ].map(([rotulo, valor]) => <div key={rotulo} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"><p className="text-xs text-[var(--text-muted)]">{rotulo}</p><p className="mt-2 text-2xl font-semibold">{valor}</p></div>)}
    </section>
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <h2 className="text-lg font-semibold">Ranking explicável</h2>
      <p className="mt-2 max-w-4xl text-sm leading-6 text-[var(--text-muted)]">Score demonstrativo de 0 a 100: 70% da taxa de interação (interações ÷ alcance, limitada à referência fictícia de 10%) e 30% do alcance (limitado à referência fictícia de 3.000). Os pesos e referências são premissas acadêmicas, não parâmetros validados com a instituição. Ausência de alcance ou interações e alcance zero tornam o score indisponível; zero interações medido permanece zero. Empates são resolvidos por alcance, período e ID.</p>
      <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[740px] text-left text-sm"><thead className="text-[var(--text-muted)]"><tr><th className="pb-3">Posição</th><th>Publicação</th><th>Mês</th><th>Alcance</th><th>Interações</th><th>Taxa</th><th>Score</th></tr></thead><tbody className="divide-y divide-[var(--border)]">{linhas.map((p) => <tr key={p.id}><td className="py-3">{p.posicao === null ? 'Não classificada' : p.posicao}</td><th>{p.rotulo}</th><td>{p.periodo.slice(5)}/{p.periodo.slice(0, 4)}</td><td>{numero(p.alcance)}</td><td>{numero(p.interacoes)}</td><td>{p.taxaInteracao === null ? '—' : `${p.taxaInteracao.toLocaleString('pt-BR')}%`}</td><td>{p.score === null ? '—' : p.score.toLocaleString('pt-BR')}</td></tr>)}</tbody></table></div>
    </section>
    <p className="text-xs leading-5 text-[var(--text-muted)]">Fonte: cenário {ORGANICO_CENARIO.versao}, semente declarada e geração determinística. Alcance e interações são contagens por publicação; não há visualizações, impressões, pessoas identificadas ou integração com redes sociais. “—” significa indisponibilidade, não zero.</p>
  </div>;
}
