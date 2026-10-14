'use client';

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export function GraficoCprTemporal({ dados, selecionado }: { dados: { mes: string; cprGoogle: number | null; cprMeta: number | null }[]; selecionado: string }) {
  const mes = (m: string) => `${m.slice(5, 7)}/${m.slice(2, 4)}`;
  const moeda = (n: unknown) => typeof n === 'number' ? `R$ ${n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '—';
  return <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5" aria-label="CPR temporal V4">
    <h2 className="text-lg font-semibold">Custo por resultado · evolução mensal</h2>
    <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">Google: investimento ÷ conversões registradas. Meta: investimento da campanha de conversas ÷ conversas. Duas séries descritivas em R$, com denominadores diferentes; sem soma entre canais. Mês do resumo: {mes(selecionado)}.</p>
    <div className="mt-4 overflow-x-auto"><div className="min-w-[720px]" role="img" aria-label="Séries temporais separadas de CPR Google por conversão registrada e CPR Meta por conversa, de janeiro a dezembro de 2022">
      <ResponsiveContainer width="100%" height={300}><LineChart data={dados} margin={{ top: 12, right: 20, bottom: 4, left: 10 }}>
        <CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false} />
        <XAxis dataKey="mes" tickFormatter={mes} tick={{ fill: '#aab2c3', fontSize: 11 }} minTickGap={20} />
        <YAxis tick={{ fill: '#aab2c3', fontSize: 11 }} width={74} tickFormatter={(n) => `R$ ${Number(n).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}`} />
        <Tooltip contentStyle={{ background: '#1a1b23', border: '1px solid #5b6275', borderRadius: 8, color: '#fff' }} labelFormatter={(m) => `Mês ${mes(String(m))}`} formatter={moeda} />
        <Legend verticalAlign="top" height={36} />
        <Line type="linear" dataKey="cprGoogle" name="CPR Google · conversão" stroke="#60a5fa" strokeWidth={3} dot={{ r: 3 }} connectNulls={false} />
        <Line type="linear" dataKey="cprMeta" name="CPR Meta · conversa" stroke="#c4b5fd" strokeWidth={3} dot={{ r: 3 }} connectNulls={false} />
      </LineChart></ResponsiveContainer>
    </div></div>
    <p className="mt-2 text-xs text-[var(--text-muted)]">Pontos ausentes ou com resultado zero ficam sem CPR; “—” significa indisponibilidade.</p>
  </section>;
}
