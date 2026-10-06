'use client';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export function GraficosCPRSazonal({ historico, futuro, sazonalidade }: {
  historico: { periodo: string; cpr: number | null }[];
  futuro: { periodo: string; cpr: number }[];
  sazonalidade: { mes: string; indice: number | null }[];
}) {
  const dados = [...historico.map((m) => ({ periodo: m.periodo.slice(0, 7), observado: m.cpr, previsto: null as number | null })),
    ...futuro.map((m) => ({ periodo: m.periodo.slice(0, 7), observado: null, previsto: m.cpr }))];
  const eixo = { fill: '#8b92a5', fontSize: 11 };
  const estilo = { background: '#1a1b23', border: '1px solid #5b6275', color: '#e5e7eb', borderRadius: 8 };
  return <div className="space-y-5">
    <figure className="rounded-xl border border-[var(--border)] p-4"><figcaption className="mb-3 text-sm">CPR observado sintético e projeção — início da previsão: {futuro[0].periodo.slice(0, 7)}. Ausência interrompe o histórico; previsão tracejada não é observação.</figcaption>
      <ResponsiveContainer width="100%" height={300}><LineChart data={dados} margin={{ top: 22, right: 12, bottom: 4, left: 0 }}>
        <CartesianGrid stroke="rgba(255,255,255,0.08)" /><XAxis dataKey="periodo" tick={eixo} minTickGap={45} /><YAxis tick={eixo} width={44} />
        <Tooltip contentStyle={estilo} formatter={(valor) => typeof valor === 'number' ? valor.toLocaleString('pt-BR', { maximumFractionDigits: 2 }) : valor} /><Legend />
        <ReferenceLine x={futuro[0].periodo.slice(0, 7)} stroke="#8b92a5" strokeDasharray="3 3" label={{ value: 'Início da previsão', fill: '#8b92a5', position: 'insideTopRight', fontSize: 11 }} />
        <Line type="linear" dataKey="observado" name="Histórico observado (sintético)" stroke="#3b82f6" dot={false} strokeWidth={2} connectNulls={false} />
        <Line type="linear" dataKey="previsto" name="Previsão experimental" stroke="#f59e0b" strokeDasharray="6 4" dot={{ r: 3 }} strokeWidth={2} connectNulls={false} />
      </LineChart></ResponsiveContainer>
    </figure>
    <figure className="rounded-xl border border-[var(--border)] p-4"><figcaption className="mb-3 text-sm">Índice sazonal histórico de CPR — 1 = média global; análise descritiva, não causal.</figcaption>
      <ResponsiveContainer width="100%" height={230}><BarChart data={sazonalidade}>
        <CartesianGrid stroke="rgba(255,255,255,0.08)" /><XAxis dataKey="mes" tick={eixo} /><YAxis tick={eixo} width={44} />
        <Tooltip contentStyle={estilo} formatter={(valor) => typeof valor === 'number' ? valor.toLocaleString('pt-BR', { maximumFractionDigits: 3 }) : valor} /><ReferenceLine y={1} stroke="#8b92a5" strokeDasharray="3 3" /><Bar dataKey="indice" name="Índice sazonal" fill="#10b981" />
      </BarChart></ResponsiveContainer>
    </figure>
  </div>;
}
