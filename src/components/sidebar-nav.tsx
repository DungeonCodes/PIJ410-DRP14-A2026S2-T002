'use client';

// -----------------------------------------------------------------------------
// Navegação — desktop e mobile a partir da MESMA árvore
// -----------------------------------------------------------------------------
// A lista de itens NÃO é escrita aqui: ela é derivada de `modulosHabilitados()`.
// É o que garante que um módulo bloqueado suma das três superfícies ao mesmo
// tempo, sem que ninguém precise lembrar de removê-lo de cada uma.
//
// Client component apenas por causa de `usePathname` (estado ativo). O AppShell
// permanece Server Component.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { moduloDaRota, modulosHabilitados, type ModuloAcademico } from '@/lib/fases';

const BASE = 'block rounded-md px-3 py-2 text-sm font-medium transition-colors';
const INATIVO = 'text-[var(--text-muted)] hover:bg-white/[0.04] hover:text-[var(--text)]';
const ATIVO = 'bg-white/[0.06] text-[var(--text)]';

function ativo(pathname: string, m: ModuloAcademico): boolean {
  return moduloDaRota(pathname)?.chave === m.chave;
}

/** Agrupa os módulos visíveis preservando a ordem do catálogo. */
function agrupar(modulos: ModuloAcademico[]) {
  const blocos: { grupo: string | null; itens: ModuloAcademico[] }[] = [];
  for (const m of modulos) {
    const g = m.grupo ?? null;
    const ultimo = blocos[blocos.length - 1];
    if (ultimo && ultimo.grupo === g && g !== null) ultimo.itens.push(m);
    else blocos.push({ grupo: g, itens: [m] });
  }
  return blocos;
}

export function SidebarNav() {
  const pathname = usePathname() ?? '';
  const blocos = agrupar(modulosHabilitados());

  return (
    <nav className="mt-8 space-y-1" aria-label="Módulos disponíveis">
      {blocos.map((bloco, i) => (
        <Fragment key={bloco.grupo ?? `solto-${i}`}>
          {bloco.grupo ? (
            <div role="group" aria-labelledby={`nav-grupo-${bloco.grupo}`}>
              <p
                id={`nav-grupo-${bloco.grupo}`}
                className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-dim)]"
              >
                {bloco.grupo}
              </p>
              <div className="space-y-1 border-l border-[var(--border)] pl-2">
                {bloco.itens.map((m) => (
                  <Link
                    key={m.chave}
                    href={m.rota}
                    aria-current={ativo(pathname, m) ? 'page' : undefined}
                    className={`${BASE} ${ativo(pathname, m) ? ATIVO : INATIVO}`}
                  >
                    {m.rotulo}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            bloco.itens.map((m) => (
              <Link
                key={m.chave}
                href={m.rota}
                aria-current={ativo(pathname, m) ? 'page' : undefined}
                className={`${BASE} ${ativo(pathname, m) ? ATIVO : INATIVO}`}
              >
                {m.rotulo}
              </Link>
            ))
          )}
        </Fragment>
      ))}
    </nav>
  );
}

export function MobileNav() {
  const pathname = usePathname() ?? '';
  const chip = 'shrink-0 rounded-md border border-[var(--border)] px-3 py-2 text-xs font-medium transition-colors';

  return (
    <nav className="mt-3 flex items-center gap-2 overflow-x-auto pb-1" aria-label="Módulos disponíveis">
      {modulosHabilitados().map((m) => (
        <Link
          key={m.chave}
          href={m.rota}
          aria-current={ativo(pathname, m) ? 'page' : undefined}
          className={`${chip} ${
            ativo(pathname, m) ? 'bg-white/[0.06] text-[var(--text)]' : 'text-[var(--text-muted)]'
          }`}
        >
          {m.rotulo}
        </Link>
      ))}
    </nav>
  );
}
