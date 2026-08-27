'use client';

// -----------------------------------------------------------------------------
// Gráficos da Fase 1 (Recharts) — espelham a estrutura visual da arquitetura de
// referência: linha mensal por safra, funil, distribuição e barras empilhadas.
// -----------------------------------------------------------------------------
// Uma regra atravessa todos: valor `null` significa AUSÊNCIA DE OBSERVAÇÃO e
// interrompe a linha (`connectNulls={false}`). Zero continua significando
// "observado e não houve". Um mês futuro não pode ser desenhado como queda.
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const CORES_SAFRA = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'];
const CORES_STATUS: Record<string, string> = {
  matriculado: '#10b981',
  quente: '#f59e0b',
  frio: '#8b92a5',
  perdido: '#ef4444',
  'sem-classificacao': '#5b6275',
};

const eixo = { stroke: '#5b6275', fontSize: 11 };
const grade = { stroke: 'rgba(255,255,255,0.06)' };

const tooltipEstilo = {
  contentStyle: {
    background: '#1a1b23',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 8,
    fontSize: 12,
  },
  labelStyle: { color: '#8b92a5' },
} as const;

/** Série mensal com uma linha por safra. */
export function GraficoMensal({
  dados,
  safras,
  titulo,
}: {
  dados: Record<string, number | string | null>[];
  safras: number[];
  titulo: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <h3 className="text-sm font-semibold text-[var(--text)]">{titulo}</h3>
      <p className="mb-3 mt-0.5 text-[11px] text-[var(--text-dim)]">
        Linha interrompida = mês ainda não observado no cenário (não é zero).
      </p>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={dados} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid {...grade} vertical={false} />
          <XAxis dataKey="mes" tick={eixo} axisLine={false} tickLine={false} />
          <YAxis tick={eixo} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipEstilo} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          {safras.map((s, i) => (
            <Line
              key={s}
              type="monotone"
              dataKey={String(s)}
              name={String(s)}
              stroke={CORES_SAFRA[i % CORES_SAFRA.length]}
              strokeWidth={2}
              dot={false}
              connectNulls={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

/** Funil em três estágios, com as taxas derivadas exibidas entre eles. */
export function GraficoFunil({
  contatos,
  visitas,
  matriculas,
  taxaContatoVisita,
  taxaVisitaMatricula,
}: {
  contatos: number;
  visitas: number;
  matriculas: number;
  taxaContatoVisita: number;
  taxaVisitaMatricula: number;
}) {
  const etapas = [
    { rotulo: 'Contatos', valor: contatos, cor: '#3b82f6' },
    { rotulo: 'Visitas', valor: visitas, cor: '#f59e0b' },
    { rotulo: 'Matrículas', valor: matriculas, cor: '#10b981' },
  ];
  const maximo = Math.max(contatos, 1);

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <h3 className="text-sm font-semibold text-[var(--text)]">Funil de captação</h3>
      <p className="mb-4 mt-0.5 text-[11px] text-[var(--text-dim)]">
        Taxas calculadas dos volumes ao lado — não são campos independentes.
      </p>
      <div className="space-y-3">
        {etapas.map((e, i) => (
          <div key={e.rotulo}>
            <div className="flex items-baseline justify-between text-xs">
              <span className="text-[var(--text-muted)]">{e.rotulo}</span>
              <span className="font-semibold tabular-nums text-[var(--text)]">
                {e.valor.toLocaleString('pt-BR')}
              </span>
            </div>
            <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-white/[0.05]">
              <div
                className="h-full rounded-full"
                style={{ width: `${(e.valor / maximo) * 100}%`, background: e.cor }}
              />
            </div>
            {i < etapas.length - 1 && (
              <p className="mt-1 text-[10px] text-[var(--text-dim)]">
                ↓ {i === 0 ? taxaContatoVisita : taxaVisitaMatricula}%{' '}
                {i === 0 ? 'contato → visita' : 'visita → matrícula'}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Distribuição por situação do funil. */
export function GraficoDistribuicao({
  dados,
  titulo,
}: {
  dados: { chave: string; rotulo: string; valor: number }[];
  titulo: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <h3 className="mb-3 text-sm font-semibold text-[var(--text)]">{titulo}</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={dados} layout="vertical" margin={{ top: 4, right: 16, left: 24, bottom: 0 }}>
          <CartesianGrid {...grade} horizontal={false} />
          <XAxis type="number" tick={eixo} axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="rotulo"
            tick={{ ...eixo, fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            width={96}
          />
          <Tooltip {...tooltipEstilo} />
          <Bar dataKey="valor" name="Leads" radius={[0, 4, 4, 0]}>
            {dados.map((d) => (
              <Cell key={d.chave} fill={CORES_STATUS[d.chave] ?? '#3b82f6'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/** Barras simples por categoria (canais, ciclos, turmas). */
export function GraficoBarras({
  dados,
  chaveCategoria,
  chaveValor,
  titulo,
  nota,
  cor = '#3b82f6',
}: {
  dados: Record<string, string | number>[];
  chaveCategoria: string;
  chaveValor: string;
  titulo: string;
  nota?: string;
  cor?: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <h3 className="text-sm font-semibold text-[var(--text)]">{titulo}</h3>
      {nota && <p className="mb-3 mt-0.5 text-[11px] text-[var(--text-dim)]">{nota}</p>}
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={dados} margin={{ top: 12, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid {...grade} vertical={false} />
          <XAxis dataKey={chaveCategoria} tick={{ ...eixo, fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis tick={eixo} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipEstilo} />
          <Bar dataKey={chaveValor} fill={cor} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/** Barras empilhadas rematrícula × nova. A soma das partes é o total. */
export function GraficoEmpilhado({
  dados,
  chaveCategoria,
  titulo,
  nota,
}: {
  dados: Record<string, string | number>[];
  chaveCategoria: string;
  titulo: string;
  nota?: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <h3 className="text-sm font-semibold text-[var(--text)]">{titulo}</h3>
      {nota && <p className="mb-3 mt-0.5 text-[11px] text-[var(--text-dim)]">{nota}</p>}
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={dados} margin={{ top: 12, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid {...grade} vertical={false} />
          <XAxis dataKey={chaveCategoria} tick={{ ...eixo, fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis tick={eixo} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipEstilo} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="rematriculas" name="Rematrículas" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
          <Bar dataKey="novas" name="Novas" stackId="a" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
