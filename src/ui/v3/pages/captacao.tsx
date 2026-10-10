import CaptacaoV2 from '@/ui/v2/pages/captacao';
import { obterCaptacao, safrasDisponiveis, ciclosDisponiveis } from '@/lib/captacao-data';
import { evolucaoTemporal } from '@/ui/v2/temporal';
import { efetivacaoMensal } from '@/lib/v3/metricas';
import { GraficoEfetivacao } from '../graficos';

function lerLista(raw: string | undefined, validos: string[]) {
  return [...new Set(raw?.split(',').filter((s) => validos.includes(s)) ?? [])];
}

export default async function CaptacaoV3(props: { searchParams: Promise<{ safras?: string; ciclos?: string }> }) {
  const params = await props.searchParams;
  const todas = safrasDisponiveis();
  const safras = lerLista(params.safras, todas.map(String)).map(Number);
  const selecionadas = safras.length ? safras.sort((a, b) => a - b) : todas.slice(-2);
  const ciclos = lerLista(params.ciclos, ciclosDisponiveis());
  const dados = obterCaptacao(selecionadas, ciclos.length ? ciclos : ciclosDisponiveis());
  return <div className="space-y-8"><CaptacaoV2 {...props} /><GraficoEfetivacao dados={efetivacaoMensal(evolucaoTemporal(dados, selecionadas))} /></div>;
}
