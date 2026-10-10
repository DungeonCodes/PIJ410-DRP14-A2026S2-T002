import { mesesAds } from '@/lib/v3/metricas';

export function selecionarMes(raw?: string) {
  const meses = mesesAds();
  return { meses, selecionado: raw && meses.includes(raw) ? raw : meses.at(-1)! };
}

export function SeletorMes({ meses, selecionado }: { meses: string[]; selecionado: string }) {
  return <form className="flex flex-wrap items-end gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4" method="get">
    <label htmlFor="mes-v3" className="space-y-1 text-xs font-semibold text-[var(--text-muted)]"><span>Mês do resumo · cronologia fictícia</span><select id="mes-v3" name="mes" defaultValue={selecionado} className="block rounded-lg border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-3 py-2 text-sm text-[var(--text)]">{meses.map((m) => <option key={m} value={m}>{m.slice(5, 7)}/{m.slice(0, 4)}</option>)}</select></label>
    <button className="rounded-lg bg-[var(--accent-blue)] px-4 py-2 text-sm font-semibold text-white" type="submit">Aplicar mês</button>
  </form>;
}

export const moeda = (v: number | null) => v === null ? '—' : `R$ ${v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
export const numero = (v: number | null) => v === null ? '—' : v.toLocaleString('pt-BR', { maximumFractionDigits: 1 });
