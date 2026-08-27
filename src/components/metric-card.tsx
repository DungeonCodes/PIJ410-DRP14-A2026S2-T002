import type { ReactNode } from 'react';

/**
 * Card de métrica. `valor === null` renderiza um travessão explícito, nunca
 * zero: ausência de medição e medição de zero são coisas diferentes e a
 * interface não pode achatá-las.
 */
export function MetricCard({
  rotulo,
  valor,
  detalhe,
  sufixo,
  acento = 'azul',
}: {
  rotulo: string;
  valor: number | null;
  detalhe?: ReactNode;
  sufixo?: string;
  acento?: 'azul' | 'verde' | 'ambar' | 'roxo' | 'neutro';
}) {
  const cor = {
    azul: 'text-[var(--accent-blue)]',
    verde: 'text-[var(--accent-green)]',
    ambar: 'text-[var(--accent-yellow)]',
    roxo: 'text-[var(--accent-purple)]',
    neutro: 'text-[var(--text)]',
  }[acento];

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-dim)]">
        {rotulo}
      </p>
      <p className={`mt-2 text-2xl font-semibold tabular-nums ${cor}`}>
        {valor === null ? (
          <span className="text-[var(--text-dim)]">—</span>
        ) : (
          <>
            {valor.toLocaleString('pt-BR')}
            {sufixo && <span className="ml-0.5 text-sm font-medium">{sufixo}</span>}
          </>
        )}
      </p>
      {detalhe && <p className="mt-1 text-[11px] leading-4 text-[var(--text-muted)]">{detalhe}</p>}
    </div>
  );
}

/** Cabeçalho padrão das páginas do painel. */
export function PageHeader({
  kicker,
  titulo,
  descricao,
  meta,
}: {
  kicker: string;
  titulo: string;
  descricao: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <header>
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-blue)]">
        {kicker}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)]">{titulo}</h1>
      <div className="mt-2 max-w-3xl text-sm leading-6 text-[var(--text-muted)]">{descricao}</div>
      {meta}
    </header>
  );
}

/** Barra de metadados do cenário sintético. */
export function BarraCenario({
  itens,
}: {
  itens: { rotulo: string; valor: string }[];
}) {
  return (
    <div className="mt-4 inline-flex flex-col gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs text-[var(--text-muted)]">
      {itens.map((i) => (
        <div key={i.rotulo} className="flex flex-wrap items-center gap-x-2">
          <span className="font-medium">{i.rotulo}</span>
          <span aria-hidden>·</span>
          <span className="font-semibold text-[var(--text)]">{i.valor}</span>
        </div>
      ))}
    </div>
  );
}
