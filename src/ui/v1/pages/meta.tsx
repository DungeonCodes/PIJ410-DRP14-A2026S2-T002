// Fase 2 acadêmica ativa desde 06/10/2026: somente dados sintéticos locais.
// O guarda central permanece obrigatório; nenhuma integração operacional.
import { exigirModuloHabilitado } from '@/lib/gate-servidor';
import { PainelAds } from '@/components/ads-painel';

export const revalidate = false;

export default async function AdsMetaPage({ searchParams }: { searchParams: Promise<{ anos?: string }> }) {
  exigirModuloHabilitado('ads-meta');
  const params = await searchParams;
  return <PainelAds modo="meta" anos={params.anos} />;
}
