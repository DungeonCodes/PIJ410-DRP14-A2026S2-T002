import { Suspense } from 'react';
import { BarraDeFiltros } from '@/components/filtros';
import { GraficoBarras, GraficoDistribuicao, GraficoFunil, GraficoMensal } from '@/components/graficos';
import { BarraCenario, MetricCard, PageHeader } from '@/components/metric-card';
import {
  META_CAPTACAO,
  ciclosDisponiveis,
  distribuicaoCanais,
  distribuicaoStatus,
  obterCaptacao,
  safrasDisponiveis,
} from '@/lib/captacao-data';
import { CICLO_ROTULO, type Ciclo } from '@/lib/sintetico/cenario';
import { exigirModuloHabilitado } from '@/lib/gate-servidor';

export const revalidate = false;

/** Default ao abrir sem parâmetros: as duas safras mais recentes do cenário. */
function safrasPadrao(): number[] {
  return safrasDisponiveis().slice(-2);
}

function lerLista(raw: string | undefined, validos: string[]): string[] {
  if (!raw) return [];
  const pedidos = raw.split(',').map((s) => s.trim()).filter(Boolean);
  const filtrados = pedidos.filter((p) => validos.includes(p));
  return filtrados;
}

export default async function CaptacaoPage({
  searchParams,
}: {
  searchParams: Promise<{ safras?: string; ciclos?: string }>;
}) {
  exigirModuloHabilitado('captacao');

  const params = await searchParams;
  const todasSafras = safrasDisponiveis();
  const todosCiclos = ciclosDisponiveis();

  const safras = (() => {
    const pedidas = lerLista(params.safras, todasSafras.map(String)).map(Number);
    return pedidas.length > 0 ? pedidas.sort((a, b) => a - b) : safrasPadrao();
  })();
  const ciclos = (() => {
    const pedidos = lerLista(params.ciclos, todosCiclos);
    return pedidos.length > 0 ? pedidos : todosCiclos;
  })();

  const dados = obterCaptacao(safras, ciclos);
  const status = distribuicaoStatus(safras, ciclos);
  const canais = distribuicaoCanais(safras, ciclos);
  const comparativo = safras.length > 1;
  const m = dados.agregado;

  const rotulosCiclo = Object.fromEntries(
    todosCiclos.map((c) => [c, CICLO_ROTULO[c as Ciclo] ?? c]),
  ) as Record<string, string>;

  return (
    <div className="space-y-8">
      <PageHeader
        kicker="Fase 1 · módulo ativo"
        titulo="Funil de Captação"
        descricao={
          <>
            {comparativo
              ? `Comparando ${safras.length} safras · ${m.contatos.toLocaleString('pt-BR')} contatos no recorte`
              : `${m.contatos.toLocaleString('pt-BR')} contatos na safra ${safras[0]}`}
            {' '}· {dados.totalSemFiltro.toLocaleString('pt-BR')} no cenário completo. Todos os
            números são sintéticos e determinísticos.
          </>
        }
        meta={
          <BarraCenario
            itens={[
              { rotulo: 'Cenário', valor: `${META_CAPTACAO.scenario_version} · semente ${META_CAPTACAO.seed}` },
              { rotulo: 'Dataset gerado em', valor: META_CAPTACAO.generated_at.split('-').reverse().join('/') },
              {
                rotulo: 'Cronologia fictícia até',
                valor: META_CAPTACAO.reference_date.split('-').reverse().join('/'),
              },
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
        <MetricCard rotulo="Contatos" valor={m.contatos} acento="azul" detalhe="Entradas no funil" />
        <MetricCard
          rotulo="Visitas"
          valor={m.visitas}
          acento="ambar"
          detalhe={`${m.taxaContatoVisita}% dos contatos`}
        />
        <MetricCard
          rotulo="Matrículas"
          valor={m.matriculas}
          acento="verde"
          detalhe={`${m.taxaVisitaMatricula}% das visitas`}
        />
        <MetricCard
          rotulo="Perdidos"
          valor={m.perdidos}
          acento="neutro"
          detalhe="Encerrados sem matrícula"
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <GraficoFunil
          contatos={m.contatos}
          visitas={m.visitas}
          matriculas={m.matriculas}
          taxaContatoVisita={m.taxaContatoVisita}
          taxaVisitaMatricula={m.taxaVisitaMatricula}
        />
        <GraficoDistribuicao dados={status} titulo="Situação dos contatos no recorte" />
      </section>

      <GraficoMensal dados={dados.mensal.contatos} safras={safras} titulo="Contatos por mês" />

      <section className="grid gap-4 lg:grid-cols-2">
        <GraficoMensal dados={dados.mensal.visitas} safras={safras} titulo="Visitas por mês" />
        <GraficoMensal dados={dados.mensal.matriculas} safras={safras} titulo="Matrículas por mês" />
      </section>

      <GraficoBarras
        dados={canais.map((c) => ({ canal: c.canal, valor: c.valor }))}
        chaveCategoria="canal"
        chaveValor="valor"
        titulo="Origem declarada do contato"
        nota="Categorias fictícias do cenário. Nenhuma ferramenta ou fornecedor real é representado."
      />

      {comparativo && (
        <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <h3 className="text-sm font-semibold text-[var(--text)]">Comparativo por safra</h3>
          <p className="mb-3 mt-0.5 text-[11px] text-[var(--text-dim)]">
            Cada taxa é recalculada dos volumes da própria linha.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
                <tr>
                  <th className="pb-3 font-semibold">Safra</th>
                  <th className="pb-3 text-right font-semibold">Contatos</th>
                  <th className="pb-3 text-right font-semibold">Visitas</th>
                  <th className="pb-3 text-right font-semibold">Matrículas</th>
                  <th className="pb-3 text-right font-semibold">c→v</th>
                  <th className="pb-3 text-right font-semibold">v→m</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {dados.safras.map((s) => (
                  <tr key={s.safra}>
                    <td className="py-2.5 font-medium text-[var(--text)]">{s.safra}</td>
                    <td className="py-2.5 text-right tabular-nums text-[var(--text)]">
                      {s.metricas.contatos.toLocaleString('pt-BR')}
                    </td>
                    <td className="py-2.5 text-right tabular-nums text-[var(--text)]">
                      {s.metricas.visitas.toLocaleString('pt-BR')}
                    </td>
                    <td className="py-2.5 text-right tabular-nums text-[var(--text)]">
                      {s.metricas.matriculas.toLocaleString('pt-BR')}
                    </td>
                    <td className="py-2.5 text-right tabular-nums text-[var(--accent-yellow)]">
                      {s.metricas.taxaContatoVisita}%
                    </td>
                    <td className="py-2.5 text-right tabular-nums text-[var(--accent-green)]">
                      {s.metricas.taxaVisitaMatricula}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
