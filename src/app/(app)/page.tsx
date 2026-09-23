import Link from 'next/link';
import { ArrowUpRight, Lock } from 'lucide-react';
import { FASES, MODULOS, PROJETO_INICIADO_EM, modulosHabilitados, type Fase } from '@/lib/fases';
import { APP, AVISO_SINTETICO, INSTITUICAO_FICTICIA } from '@/lib/identidade';
import { META_CAPTACAO } from '@/lib/captacao-data';
import { PageHeader } from '@/components/metric-card';

export const revalidate = false;

const FASES_ORDEM: Fase[] = [1, 2, 3, 4];

export default function HomePage() {
  const disponiveis = modulosHabilitados();
  const dataBr = PROJETO_INICIADO_EM.split('-').reverse().join('/');

  return (
    <div className="space-y-8">
      <PageHeader
        kicker={`${APP.instituicaoDeEnsino} · ${APP.semestre}`}
        titulo={APP.nome}
        descricao={
          <>
            Adaptação acadêmica de uma arquitetura de referência preexistente, iniciada em{' '}
            <strong className="text-[var(--text)]">{dataBr}</strong>. O cenário retratado é o da{' '}
            <strong className="text-[var(--text)]">{INSTITUICAO_FICTICIA.nome}</strong> —{' '}
            {INSTITUICAO_FICTICIA.descritor}.
          </>
        }
      />

      <section
        role="note"
        className="rounded-2xl border border-[var(--accent-yellow)]/40 bg-[var(--accent-yellow)]/[0.07] p-5"
      >
        <h2 className="text-sm font-semibold text-[var(--accent-yellow)]">
          Este painel não é um ambiente operacional
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
          {AVISO_SINTETICO}
        </p>
        <p className="mt-2 max-w-3xl text-xs leading-relaxed text-[var(--text-dim)]">
          As datas do cenário formam uma cronologia fictícia de{' '}
          {META_CAPTACAO.reference_date.slice(0, 4)} e anos anteriores. Elas não afirmam que o grupo
          acadêmico coletava dados naquele período: o dataset foi produzido em{' '}
          {META_CAPTACAO.generated_at.split('-').reverse().join('/')}, no início do projeto.
        </p>
      </section>

      <section>
        <div className="mb-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-dim)]">
            Disponível agora
          </p>
          <h2 className="mt-1 text-xl font-semibold text-[var(--text)]">Módulos da Fase 1</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {disponiveis.map((m) => (
            <Link
              key={m.chave}
              href={m.rota}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 transition-colors hover:border-[var(--accent-blue)]/40 hover:bg-white/[0.02]"
            >
              <div>
                <p className="text-base font-semibold text-[var(--text)]">{m.rotulo}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {m.chave === 'captacao'
                    ? 'Funil sintético: contatos, visitas, matrículas e taxas derivadas.'
                    : 'Histórico sintético por safra, ciclo e turma, com retenção.'}
                </p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent-blue)]/15 text-[var(--accent-blue)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-5 w-5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-dim)]">
            Rollout
          </p>
          <h2 className="mt-1 text-xl font-semibold text-[var(--text)]">Plano por fases</h2>
          <p className="mt-1 max-w-3xl text-sm text-[var(--text-muted)]">
            O plano completo existe desde {dataBr}; a disponibilização funcional é incremental.
            Abrir uma fase é uma decisão registrada do grupo, não uma passagem de tempo.
          </p>
        </div>

        <div className="space-y-3">
          {FASES_ORDEM.map((f) => {
            const doGrupo = MODULOS.filter((m) => m.fase === f);
            const ativa = FASES[f].situacao === 'ativa';
            return (
              <div
                key={f}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-dim)]">
                    Fase {f}
                  </span>
                  <h3 className="text-sm font-semibold text-[var(--text)]">{FASES[f].nome}</h3>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-wide ${
                      ativa
                        ? 'border-[var(--accent-green)]/40 bg-[var(--accent-green)]/10 text-[var(--accent-green)]'
                        : 'border-[var(--border)] bg-white/[0.03] text-[var(--text-dim)]'
                    }`}
                  >
                    {ativa ? 'ATIVA' : 'PLANEJADA'}
                  </span>
                </div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {doGrupo.map((m) => (
                    <li
                      key={m.chave}
                      className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
                    >
                      {!m.habilitado && <Lock className="h-3 w-3 text-[var(--text-dim)]" aria-hidden />}
                      {m.grupo ? `${m.grupo} · ${m.rotulo}` : m.rotulo}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
