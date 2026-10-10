import MatriculasV2 from '@/ui/v1/pages/matriculas';
import { safrasDisponiveis, ciclosDisponiveis } from '@/lib/matriculas-data';
import { composicaoPorSerie } from '@/lib/v3/metricas';
import { GraficoSeries } from '../graficos';

function lerLista(raw: string | undefined, validos: string[]) {
  return [...new Set(raw?.split(',').filter((s) => validos.includes(s)) ?? [])];
}

export default async function MatriculasV3(props: { searchParams: Promise<{ safras?: string; ciclos?: string }> }) {
  const params = await props.searchParams;
  const todas = safrasDisponiveis();
  const safras = lerLista(params.safras, todas.map(String)).map(Number);
  const selecionadas = safras.length ? safras.sort((a, b) => a - b) : todas.slice(-2);
  const ciclos = lerLista(params.ciclos, ciclosDisponiveis());
  const composicao = composicaoPorSerie(selecionadas, ciclos.length ? ciclos : ciclosDisponiveis());
  return <div className="space-y-8"><MatriculasV2 {...props} /><GraficoSeries dados={composicao.linhas} />
    {composicao.safrasIndeterminadas.length > 0 && <p className="text-xs text-[var(--text-muted)]">Safra sem classificação de rematrícula: {composicao.safrasIndeterminadas.join(', ')}. Seu total permanece no histórico acima.</p>}
  </div>;
}
