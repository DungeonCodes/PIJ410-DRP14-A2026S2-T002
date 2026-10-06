// -----------------------------------------------------------------------------
// FASE 2 — PREPARADO NO CÓDIGO, NÃO DISPONÍVEL AO USUÁRIO.
// -----------------------------------------------------------------------------
// A rota existe para que o espelhamento com a arquitetura de referência seja
// incremental e revisável, mas o feature gate a mantém fechada: enquanto
// 'ads-google' estiver 'habilitado: false' em 'src/lib/fases.ts', esta página
// responde 404 e nunca chega a renderizar. Conteúdo sintético preparado para revisão.
//
// Abrir a fase é um commit humano que muda o gate, não uma passagem de tempo.
// -----------------------------------------------------------------------------
import { exigirModuloHabilitado } from '@/lib/gate-servidor';
import { PainelAds } from '@/components/ads-painel';
import { ResultadosGoogleCPR } from '@/components/google-cpr-resultados';

export const revalidate = false;

export default async function AdsGooglePage({ searchParams }: { searchParams: Promise<{ anos?: string; campanhas?: string }> }) {
  exigirModuloHabilitado('ads-google');
  const params = await searchParams;
  return <div className="space-y-8"><PainelAds modo="google" anos={params.anos} campanhas={params.campanhas} /><ResultadosGoogleCPR /></div>;
}
