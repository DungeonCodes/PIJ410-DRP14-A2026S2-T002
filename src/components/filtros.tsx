'use client';

// -----------------------------------------------------------------------------
// Filtros de safra e ciclo — estado na URL, não no navegador
// -----------------------------------------------------------------------------
// Mesma escolha da arquitetura de referência: qualquer visão é compartilhável
// por link e reproduzível a partir dele. Sem estado local, sem localStorage.
//
// Invariante: ao menos um item sempre selecionado. Desmarcar o último não faz
// nada — uma tela vazia não é um recorte, é um bug.
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

function alternar(atual: string[], valor: string): string[] {
  const existe = atual.includes(valor);
  if (existe && atual.length === 1) return atual;
  return existe ? atual.filter((v) => v !== valor) : [...atual, valor];
}

function hrefCom(pathname: string, params: URLSearchParams, chave: string, valores: string[]) {
  const p = new URLSearchParams(params.toString());
  p.set(chave, valores.join(','));
  return `${pathname}?${p.toString()}`;
}

export function BarraDeFiltros({
  titulo,
  chave,
  opcoes,
  selecionados,
  rotulos,
}: {
  titulo: string;
  chave: string;
  opcoes: string[];
  selecionados: string[];
  rotulos?: Record<string, string>;
}) {
  const pathname = usePathname() ?? '';
  const params = useSearchParams();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-dim)]">
        {titulo}
      </span>
      {opcoes.map((op) => {
        const ativo = selecionados.includes(op);
        const proximo = alternar(selecionados, op);
        const ultimoAtivo = ativo && selecionados.length === 1;
        return (
          <Link
            key={op}
            href={hrefCom(pathname, params, chave, proximo)}
            aria-pressed={ativo}
            aria-disabled={ultimoAtivo || undefined}
            className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-colors ${
              ativo
                ? 'border-[var(--accent-blue)]/50 bg-[var(--accent-blue)]/15 text-[var(--text)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'
            } ${ultimoAtivo ? 'cursor-default opacity-80' : ''}`}
          >
            {rotulos?.[op] ?? op}
          </Link>
        );
      })}
    </div>
  );
}
