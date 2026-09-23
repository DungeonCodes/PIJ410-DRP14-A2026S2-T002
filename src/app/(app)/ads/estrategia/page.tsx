// -----------------------------------------------------------------------------
// FASE 2 — PREPARADO NO CÓDIGO, NÃO DISPONÍVEL AO USUÁRIO.
// -----------------------------------------------------------------------------
// A rota existe para que o espelhamento com a arquitetura de referência seja
// incremental e revisável, mas o feature gate a mantém fechada: enquanto
// 'ads-estrategia' estiver 'habilitado: false' em 'src/lib/fases.ts', esta página
// responde 404 e nunca chega a renderizar. Não há leitura de dado aqui, nem
// consumo de API — o corpo abaixo é um esqueleto sem conteúdo.
//
// Abrir a fase é um commit humano que muda o gate, não uma passagem de tempo.
// -----------------------------------------------------------------------------
import { exigirModuloHabilitado } from '@/lib/gate-servidor';

export const revalidate = false;

export default function AdsEstrategiaPage() {
  exigirModuloHabilitado('ads-estrategia');

  // Inalcançável enquanto o módulo estiver bloqueado. Mantido para que a
  // estrutura da rota compile e possa ser preenchida quando a fase abrir.
  return null;
}
