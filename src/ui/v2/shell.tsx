import Link from 'next/link';
import type { ReactNode } from 'react';
import { MobileNav, SidebarNav } from '@/components/sidebar-nav';
import { SeloSintetico } from '@/components/app-shell';
import { APP, INSTITUICAO_FICTICIA } from '@/lib/identidade';
import { DISCIPLINA_V2 } from '@/lib/identidade-v2';
import { PROJETO_INICIADO_EM } from '@/lib/fases';
import { versionedPath, type UIVersion } from '@/lib/interface';

/** Apresentação V2 com identidade acadêmica corrigida; não altera o shell protegido da V1. */
export function V2Shell({ children, version }: { children: ReactNode; version: UIVersion }) {
  return (
    <div data-ui-version={version} className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-72 flex-col border-r border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-6 lg:flex">
        <Link href={versionedPath(version)} className="block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-blue)]">
            {APP.instituicaoDeEnsino} · {APP.semestre}
          </p>
          <h1 className="mt-2 text-lg font-semibold text-[var(--text)]">{APP.nome}</h1>
          <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">{DISCIPLINA_V2}</p>
        </Link>

        <div className="mt-4">
          <SeloSintetico />
          <p className="mt-2 text-[10px] text-[var(--text-dim)]">Versão de interface: {version.toUpperCase()}</p>
        </div>

        <SidebarNav version={version} />

        <div className="mt-auto space-y-3 pt-6">
          <div className="rounded-md border border-[var(--border)] bg-white/[0.02] px-3 py-2">
            <p className="text-[10px] font-medium uppercase tracking-wide text-[var(--text-dim)]">
              Cenário
            </p>
            <p className="mt-0.5 text-xs text-[var(--text-muted)]">{INSTITUICAO_FICTICIA.nome}</p>
            <p className="mt-0.5 text-[10px] leading-4 text-[var(--text-dim)]">
              {INSTITUICAO_FICTICIA.descritor}
            </p>
          </div>
          <p className="px-3 text-[10px] leading-4 text-[var(--text-dim)]">
            Adaptação acadêmica iniciada em {PROJETO_INICIADO_EM.split('-').reverse().join('/')}.
            Rollout por fases.
          </p>
        </div>
      </aside>

      <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--bg-elevated)]/90 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <Link href={versionedPath(version)} className="min-w-0">
            <p className="truncate text-sm font-semibold text-[var(--text)]">{APP.nome}</p>
            <p className="truncate text-[11px] text-[var(--text-muted)]">{DISCIPLINA_V2}</p>
            <p className="text-[10px] text-[var(--text-dim)]">Versão de interface: {version.toUpperCase()}</p>
          </Link>
          <SeloSintetico compacto />
        </div>
        <MobileNav version={version} />
      </header>

      <main className="lg:pl-72">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">{children}</div>
      </main>
    </div>
  );
}
