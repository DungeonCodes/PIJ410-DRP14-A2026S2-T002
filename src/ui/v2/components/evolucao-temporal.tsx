'use client';

import { useState } from 'react';
import {
  CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import type { PontoTemporal } from '../temporal';

type Serie = 'contatos' | 'visitas' | 'matriculas';
const SERIES: { chave: Serie; rotulo: string; cor: string }[] = [
  { chave: 'contatos', rotulo: 'Contatos', cor: '#3b82f6' },
  { chave: 'visitas', rotulo: 'Visitas', cor: '#f59e0b' },
  { chave: 'matriculas', rotulo: 'Matrículas do funil', cor: '#10b981' },
];

function TooltipTemporal({ active, payload, label, selecionadas }: {
  active?: boolean;
  payload?: ReadonlyArray<{ payload?: PontoTemporal }>;
  label?: unknown;
  selecionadas: Serie[];
}) {
  if (!active || !payload?.length) return null;
  const ponto = payload[0]?.payload as PontoTemporal | undefined;
  if (!ponto) return null;
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-3 text-xs shadow-lg">
      <p className="mb-2 font-semibold">{String(label ?? ponto.rotulo)}</p>
      {SERIES.filter((serie) => selecionadas.includes(serie.chave)).map((serie) => (
        <p key={serie.chave} className="mt-1" style={{ color: serie.cor }}>
          {serie.rotulo}: {ponto[serie.chave]?.toLocaleString('pt-BR') ?? '—'}
        </p>
      ))}
    </div>
  );
}

export function EvolucaoTemporal({ dados }: { dados: PontoTemporal[] }) {
  const [selecionadas, setSelecionadas] = useState<Serie[]>(SERIES.map((serie) => serie.chave));

  function alternar(chave: Serie) {
    setSelecionadas((atuais) => {
      if (atuais.includes(chave)) return atuais.length === 1 ? atuais : atuais.filter((item) => item !== chave);
      return SERIES.map((serie) => serie.chave).filter((item) => item === chave || atuais.includes(item));
    });
  }

  return (
    <section aria-labelledby="evolucao-temporal-titulo" className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <h2 id="evolucao-temporal-titulo" className="text-lg font-semibold">Evolução temporal</h2>
      <p className="mt-1 text-xs text-[var(--text-muted)]">
        Contagens mensais do mesmo funil sintético de Captação, por safra e ciclo selecionados.
        Matrículas do funil não são o total histórico do módulo Matrículas. Linha interrompida significa ausência de observação, não zero.
      </p>
      <fieldset className="mb-4 mt-4 flex flex-wrap gap-3" aria-label="Séries exibidas na evolução temporal">
        <legend className="sr-only">Séries exibidas</legend>
        {SERIES.map((serie) => (
          <label key={serie.chave} className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-sm">
            <input
              type="checkbox"
              checked={selecionadas.includes(serie.chave)}
              disabled={selecionadas.length === 1 && selecionadas.includes(serie.chave)}
              onChange={() => alternar(serie.chave)}
              className="accent-[var(--accent-blue)]"
            />
            <span aria-hidden="true" className="inline-block w-4 border-t-2" style={{ borderColor: serie.cor }} />
            {serie.rotulo}
          </label>
        ))}
      </fieldset>
      <div role="img" aria-label={`Evolução temporal mensal. Séries visíveis: ${SERIES.filter((s) => selecionadas.includes(s.chave)).map((s) => s.rotulo).join(', ')}.`}>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={dados} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis dataKey="rotulo" tick={{ stroke: '#8b92a5', fontSize: 11 }} axisLine={false} tickLine={false} minTickGap={24} />
            <YAxis tick={{ stroke: '#8b92a5', fontSize: 11 }} axisLine={false} tickLine={false} allowDecimals={false} />
            <Tooltip content={(props) => <TooltipTemporal {...props} selecionadas={selecionadas} />} filterNull={false} />
            {SERIES.filter((serie) => selecionadas.includes(serie.chave)).map((serie) => (
              <Line key={serie.chave} type="monotone" dataKey={serie.chave} name={serie.rotulo}
                stroke={serie.cor} strokeWidth={2} dot={false} connectNulls={false} isAnimationActive={false} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
