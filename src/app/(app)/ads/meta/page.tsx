// -----------------------------------------------------------------------------
// FASE 2 — PREPARADO NO CÓDIGO, NÃO DISPONÍVEL AO USUÁRIO.
// -----------------------------------------------------------------------------
// A rota existe para que o espelhamento com a arquitetura de referência seja
// incremental e revisável, mas o feature gate a mantém fechada: enquanto
// 'ads-meta' estiver 'habilitado: false' em 'src/lib/fases.ts', esta página
// responde 404 e nunca chega a renderizar. Conteúdo sintético preparado para revisão.
//
// Abrir a fase é um commit humano que muda o gate, não uma passagem de tempo.
// -----------------------------------------------------------------------------
import { exigirModuloHabilitado } from '@/lib/gate-servidor';
import { PainelAds } from '@/components/ads-painel';

export const revalidate = false;

export default async function AdsMetaPage({ searchParams }: { searchParams: Promise<{ anos?: string }> }) {
  exigirModuloHabilitado('ads-meta');
  const params = await searchParams;
  return <PainelAds modo="meta" anos={params.anos} />;
}
