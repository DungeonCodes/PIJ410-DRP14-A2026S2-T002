import { UI_V3 } from '../../v3';
import { GOOGLE_LOCAL, SOCIAL_LOCAL } from '@/lib/ads/dados';
import { serieEstrategia } from '@/lib/v3/metricas';
import { cprTemporal } from '@/lib/v4/ads';
import { selecionarMes, moeda } from '@/ui/v3/pages/periodo';
import { GraficoCprTemporal } from '../graficos';

const EstrategiaV3 = UI_V3.pages['/ads/estrategia'];

export default async function EstrategiaV4(props: { searchParams: Promise<{ mes?: string }> }) {
  const { selecionado } = selecionarMes((await props.searchParams).mes);
  const serie = cprTemporal(GOOGLE_LOCAL, SOCIAL_LOCAL, serieEstrategia('2022').map((p) => p.mes));
  const atual = serie.find((p) => p.mes === selecionado)!;
  return <div className="space-y-6">
    <EstrategiaV3 {...props} />
    <GraficoCprTemporal dados={serie} selecionado={selecionado} />
    <p className="text-xs leading-5 text-[var(--text-muted)]">No mês selecionado: CPR Google {moeda(atual.cprGoogle)} por conversão registrada; CPR Meta {moeda(atual.cprMeta)} por conversa. As séries são descritivas e têm denominadores distintos. Não há CPR geral, atribuição de matrículas ou relação causal. A previsão experimental de CPR Google permanece um estudo separado.</p>
  </div>;
}
