// Fase 2 acadêmica ativa desde 06/10/2026: somente dados sintéticos locais.
// O guarda central permanece obrigatório; nenhuma integração operacional.
import { exigirModuloHabilitado } from '@/lib/gate-servidor';
import { PainelAds } from '@/components/ads-painel';
import { ResultadosGoogleCPR } from '@/components/google-cpr-resultados';

export const revalidate = false;

export default async function AdsGooglePage({ searchParams }: { searchParams: Promise<{ anos?: string; campanhas?: string }> }) {
  exigirModuloHabilitado('ads-google');
  const params = await searchParams;
  return <div className="space-y-8"><PainelAds modo="google" anos={params.anos} campanhas={params.campanhas} /><ResultadosGoogleCPR /></div>;
}
