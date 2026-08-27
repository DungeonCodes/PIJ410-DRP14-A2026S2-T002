import { Suspense } from 'react';
import { BarraDeFiltros } from '@/components/filtros';
import { GraficoEmpilhado, GraficoMensal } from '@/components/graficos';
import { BarraCenario, MetricCard, PageHeader } from '@/components/metric-card';
import {
  META_MATRICULAS,
  ciclosDisponiveis,
  obterMatriculas,
  safrasDisponiveis,
} from '@/lib/matriculas-data';
import { CICLO_ROTULO, type Ciclo } from '@/lib/sintetico/cenario';
import { exigirModuloHabilitado } from '@/lib/gate-servidor';

export const revalidate = false;

function lerLista(raw: string | undefined, validos: string[]): string[] {
  if (!raw) return [];
  return raw.split(',').map((s) => s.trim()).filter((p) => validos.includes(p));
}

export default async function MatriculasPage({
  searchParams,
}: {
  searchParams: Promise<{ safras?: string; ciclos?: string }>;
}) {
  exigirModuloHabilitado('matriculas');

  const params = await searchParams;
  const todasSafras = safrasDisponiveis();
  const todosCiclos = ciclosDisponiveis();

  const safras = (() => {
    const pedidas = lerLista(params.safras, todasSafras.map(String)).map(Number);
    return pedidas.length > 0 ? pedidas.sort((a, b) => a - b) : todasSafras.slice(-2);
  })();
  const ciclos = (() => {
    const pedidos = lerLista(params.ciclos, todosCiclos);
    return pedidos.length > 0 ? pedidos : todosCiclos;
  })();

  const dados = obterMatriculas(safras, ciclos);
  const m = dados.metricas;
  const periodo = `${todasSafras[0]}–${todasSafras[todasSafras.length - 1]}`;
  const indeterminadasNoRecorte = safras.filter((s) => dados.safrasIndeterminadas.includes(s));

  const rotulosCiclo = Object.fromEntries(
    todosCiclos.map((c) => [c, CICLO_ROTULO[c as Ciclo] ?? c]),
  ) as Record<string, string>;

  return (
    <div className="space-y-8">
      <PageHeader
        kicker="Fase 1 · módulo ativo"
        titulo="Matrículas (Histórico)"
        descricao={
          <>
            {m.total.toLocaleString('pt-BR')} matrículas no recorte, sobre um cenário fictício de{' '}
            {todasSafras.length} safras ({periodo}). O dataset guarda apenas{' '}
            <strong>contagens</strong> por safra, ciclo, turma e mês — nenhuma pessoa é
            representada.
          </>
        }
        meta={
          <BarraCenario
            itens={[
              { rotulo: 'Cenário', valor: `${META_MATRICULAS.scenario_version} · semente ${META_MATRICULAS.seed}` },
              { rotulo: 'Dataset gerado em', valor: META_MATRICULAS.generated_at.split('-').reverse().join('/') },
              { rotulo: 'Cronologia fictícia', valor: periodo },
            ]}
          />
        }
      />

      <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 p-4">
        <Suspense fallback={null}>
          <BarraDeFiltros
            titulo="Safra"
            chave="safras"
            opcoes={todasSafras.map(String)}
            selecionados={safras.map(String)}
          />
        </Suspense>
        <Suspense fallback={null}>
          <BarraDeFiltros
            titulo="Ciclo"
            chave="ciclos"
            opcoes={todosCiclos}
            selecionados={ciclos}
            rotulos={rotulosCiclo}
          />
        </Suspense>
      </div>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricCard rotulo="Total" valor={m.total} acento="neutro" detalhe="Matrículas no recorte" />
        <MetricCard
          rotulo="Rematrículas"
          valor={m.rematriculas}
          acento="verde"
          detalhe="Continuidade da trajetória"
        />
        <MetricCard rotulo="Novas" valor={m.novas} acento="azul" detalhe="Primeira matrícula" />
        <MetricCard
          rotulo="Retenção"
          valor={m.retencaoPct}
          sufixo="%"
          acento="ambar"
          detalhe={
            m.retencaoPct === null
              ? 'Indeterminada: recorte sem safra anterior'
              : 'Calculada só sobre safras com base N−1'
          }
        />
      </section>

      {indeterminadasNoRecorte.length > 0 && (
        <section
          role="note"
          className="rounded-2xl border border-[var(--accent-yellow)]/40 bg-[var(--accent-yellow)]/[0.07] p-4"
        >
          <h2 className="text-sm font-semibold text-[var(--accent-yellow)]">
            Safra sem base de comparação
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
            A safra {indeterminadasNoRecorte.join(', ')} é a primeira do cenário e não tem safra
            anterior contra a qual cruzar. Rematrícula e nova são{' '}
            <strong>indeterminadas</strong> nela, e por isso ela fica fora do denominador da
            retenção — em vez de entrar como se toda a base fosse nova, o que produziria uma queda
            que não existe.
          </p>
        </section>
      )}

      <GraficoEmpilhado
        dados={dados.porSafra.map((s) => ({
          safra: String(s.safra),
          rematriculas: s.metricas.rematriculas,
          novas: s.metricas.novas,
        }))}
        chaveCategoria="safra"
        titulo="Composição por safra"
        nota="Rematrículas + novas = total, por construção do gerador."
      />

      <section className="grid gap-4 lg:grid-cols-2">
        <GraficoEmpilhado
          dados={dados.porCiclo.map((c) => ({
            ciclo: CICLO_ROTULO[c.ciclo as Ciclo] ?? c.ciclo,
            rematriculas: c.metricas.rematriculas,
            novas: c.metricas.novas,
          }))}
          chaveCategoria="ciclo"
          titulo="Composição por ciclo"
        />
        <GraficoEmpilhado
          dados={dados.turmas.map((t) => ({
            turma: t.turma,
            rematriculas: t.rematriculas,
            novas: t.novas,
          }))}
          chaveCategoria="turma"
          titulo="Composição por turma"
          nota="Turmas fictícias — nomenclatura genérica, sem correspondência com nenhuma instituição."
        />
      </section>

      <GraficoMensal
        dados={dados.mensal}
        safras={safras}
        titulo="Efetivação de matrículas por mês"
      />

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <h3 className="text-sm font-semibold text-[var(--text)]">Retenção por safra</h3>
        <p className="mb-3 mt-0.5 text-[11px] text-[var(--text-dim)]">
          Percentual recalculado da própria linha; travessão onde é indeterminado.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
              <tr>
                <th className="pb-3 font-semibold">Safra</th>
                <th className="pb-3 text-right font-semibold">Total</th>
                <th className="pb-3 text-right font-semibold">Rematrículas</th>
                <th className="pb-3 text-right font-semibold">Novas</th>
                <th className="pb-3 text-right font-semibold">Retenção</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {dados.porSafra.map((s) => (
                <tr key={s.safra}>
                  <td className="py-2.5 font-medium text-[var(--text)]">{s.safra}</td>
                  <td className="py-2.5 text-right tabular-nums text-[var(--text)]">
                    {s.metricas.total.toLocaleString('pt-BR')}
                  </td>
                  <td className="py-2.5 text-right tabular-nums text-[var(--accent-green)]">
                    {s.metricas.rematriculas.toLocaleString('pt-BR')}
                  </td>
                  <td className="py-2.5 text-right tabular-nums text-[var(--accent-blue)]">
                    {s.metricas.novas.toLocaleString('pt-BR')}
                  </td>
                  <td className="py-2.5 text-right tabular-nums text-[var(--text)]">
                    {s.metricas.retencaoPct === null ? (
                      <span className="text-[var(--text-dim)]">—</span>
                    ) : (
                      `${s.metricas.retencaoPct}%`
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
