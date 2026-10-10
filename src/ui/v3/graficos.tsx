'use client';

import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const eixo = { fill: '#8b92a5', fontSize: 11 };
const tooltip = { background: '#1a1b23', border: '1px solid #5b6275', borderRadius: 8, color: '#fff' };
const mes = (p: string) => `${p.slice(5, 7)}/${p.slice(2, 4)}`;
const pt = (n: unknown) => typeof n === 'number' ? n.toLocaleString('pt-BR', { maximumFractionDigits: 1 }) : '—';

export function GraficoEfetivacao({ dados }: { dados: { periodo: string; visitas: number | null; matriculas: number | null; percentual: number | null }[] }) {
  return <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
    <h2 className="text-lg font-semibold">Efetivação de visitas em matrículas</h2>
    <p className="mt-1 text-xs text-[var(--text-muted)]">Matrículas do funil ÷ visitas do mesmo mês × 100. Ausência ou zero visitas: taxa indisponível. Não equivale ao total histórico do módulo Matrículas.</p>
    <div role="img" aria-label="Taxa mensal de efetivação de visitas em matrículas, em porcentagem">
      <ResponsiveContainer width="100%" height={300}><LineChart data={dados} margin={{ top: 18, right: 18, bottom: 4, left: 0 }}>
        <CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false} /><XAxis dataKey="periodo" tickFormatter={mes} tick={eixo} minTickGap={24} /><YAxis tick={eixo} unit="%" width={50} domain={[0, 100]} />
        <Tooltip contentStyle={tooltip} labelFormatter={(label) => `Mês ${mes(String(label))}`} formatter={(value, name, item) => {
          if (name !== 'Efetivação') return pt(value);
          const p = item.payload as (typeof dados)[number];
          return [`${pt(value)}% · ${pt(p.matriculas)} matrículas / ${pt(p.visitas)} visitas`, 'Efetivação'];
        }} />
        <Line type="linear" dataKey="percentual" name="Efetivação" stroke="#10b981" strokeWidth={2.5} dot={false} connectNulls={false} />
      </LineChart></ResponsiveContainer>
    </div>
  </section>;
}

export function GraficoSeries({ dados }: { dados: { turma: string; novas: number; rematriculas: number }[] }) {
  return <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
    <h2 className="text-lg font-semibold">Matrículas novas e rematrículas por série</h2>
    <p className="mt-1 text-xs text-[var(--text-muted)]">Séries existentes no cenário sintético. A primeira safra fica fora desta composição, pois não há base anterior para classificar rematrículas.</p>
    <div className="mt-4 overflow-x-auto"><div className="min-w-[780px]" role="img" aria-label="Barras comparativas de matrículas novas e rematrículas por série">
      <ResponsiveContainer width="100%" height={360}><BarChart data={dados} margin={{ top: 8, right: 16, bottom: 55, left: 0 }}>
        <CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false} /><XAxis dataKey="turma" tick={eixo} angle={-45} textAnchor="end" interval={0} height={75} /><YAxis tick={eixo} width={44} />
        <Tooltip contentStyle={tooltip} formatter={pt} /><Legend verticalAlign="top" height={32} />
        <Bar dataKey="novas" name="Matrículas novas" fill="#3b82f6" radius={[3,3,0,0]} /><Bar dataKey="rematriculas" name="Rematrículas" fill="#10b981" radius={[3,3,0,0]} />
      </BarChart></ResponsiveContainer>
    </div></div>
  </section>;
}

type PontoAds = { mes: string; google: number | null; meta: number | null; leadsGoogle: number | null; leadsMeta: number | null; alcanceMeta: number | null; matriculas?: number | null; leads?: number | null };

export function GraficoCanal({ dados, canal }: { dados: PontoAds[]; canal: 'google' | 'meta' }) {
  const google = canal === 'google';
  return <div className="grid gap-4 xl:grid-cols-2">
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <h2 className="text-base font-semibold">Investimento mensal · {google ? 'Google' : 'Meta'}</h2>
      <p className="mb-4 text-xs text-[var(--text-muted)]">Valores em R$ sintéticos</p>
      <ResponsiveContainer width="100%" height={270}><BarChart data={dados}><CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false} /><XAxis dataKey="mes" tickFormatter={mes} tick={eixo} /><YAxis tick={eixo} width={55} tickFormatter={(v) => Number(v).toLocaleString('pt-BR')} /><Tooltip contentStyle={tooltip} formatter={(v) => `R$ ${pt(v)}`} labelFormatter={(v) => mes(String(v))} /><Bar dataKey={canal} name="Investimento" fill={google ? '#3b82f6' : '#8b5cf6'} radius={[4,4,0,0]} /></BarChart></ResponsiveContainer>
    </section>
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <h2 className="text-base font-semibold">{google ? 'Leads simulados · Google' : 'Alcance simulado · Meta'}</h2>
      <p className="mb-4 text-xs text-[var(--text-muted)]">{google ? 'Derivação acadêmica dos cliques; conversões são outra métrica.' : 'Estimativa acadêmica de pessoas alcançadas; não são impressões nem leads.'}</p>
      <ResponsiveContainer width="100%" height={270}><LineChart data={dados}><CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false} /><XAxis dataKey="mes" tickFormatter={mes} tick={eixo} /><YAxis tick={eixo} width={55} /><Tooltip contentStyle={tooltip} formatter={pt} labelFormatter={(v) => mes(String(v))} /><Legend />
        <Line type="linear" dataKey={google ? 'leadsGoogle' : 'alcanceMeta'} name={google ? 'Leads simulados' : 'Alcance simulado'} stroke={google ? '#10b981' : '#8b5cf6'} strokeWidth={2} dot={false} connectNulls={false} />
      </LineChart></ResponsiveContainer>
    </section>
    {!google && <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 xl:col-span-2"><h2 className="text-base font-semibold">Leads simulados · Meta</h2><p className="mb-4 text-xs text-[var(--text-muted)]">Derivação acadêmica das conversas; interações não são leads.</p><ResponsiveContainer width="100%" height={230}><LineChart data={dados}><CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false} /><XAxis dataKey="mes" tickFormatter={mes} tick={eixo} /><YAxis tick={eixo} width={55} /><Tooltip contentStyle={tooltip} formatter={pt} labelFormatter={(v) => mes(String(v))} /><Line type="linear" dataKey="leadsMeta" name="Leads simulados" stroke="#10b981" strokeWidth={2} dot={false} connectNulls={false} /></LineChart></ResponsiveContainer></section>}
  </div>;
}

export function GraficoEstrategia({ dados }: { dados: PontoAds[] }) {
  return <div className="space-y-4">
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"><h2 className="text-base font-semibold">Investimento mensal por canal · R$ sintéticos</h2>
      <ResponsiveContainer width="100%" height={250}><BarChart data={dados}><CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false} /><XAxis dataKey="mes" tickFormatter={mes} tick={eixo} /><YAxis tick={eixo} width={55} tickFormatter={(v) => Number(v).toLocaleString('pt-BR')} /><Tooltip contentStyle={tooltip} formatter={(v) => `R$ ${pt(v)}`} labelFormatter={(v) => mes(String(v))} /><Legend /><Bar dataKey="google" name="Google Ads" fill="#3b82f6" /><Bar dataKey="meta" name="Meta Ads" fill="#8b5cf6" /></BarChart></ResponsiveContainer>
    </section>
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"><h2 className="text-base font-semibold">Leads simulados e matrículas observadas · contagens</h2>
      <p className="mt-1 text-xs text-[var(--text-muted)]">Bases sintéticas independentes. O alinhamento por mês permite comparação visual, sem atribuição causal ou identidade de pessoas entre bases.</p>
      <ResponsiveContainer width="100%" height={250}><LineChart data={dados}><CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false} /><XAxis dataKey="mes" tickFormatter={mes} tick={eixo} /><YAxis tick={eixo} width={55} /><Tooltip contentStyle={tooltip} formatter={pt} labelFormatter={(v) => mes(String(v))} /><Legend /><Line type="linear" dataKey="leads" name="Leads simulados Ads" stroke="#f59e0b" strokeWidth={2} dot={false} connectNulls={false} /><Line type="linear" dataKey="matriculas" name="Matrículas do histórico" stroke="#10b981" strokeWidth={2} dot={false} connectNulls={false} /></LineChart></ResponsiveContainer>
    </section>
  </div>;
}
