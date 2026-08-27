import { notFound } from 'next/navigation';
import { moduloHabilitado } from '@/lib/fases';

/**
 * Guarda de servidor das rotas sob feature gate. **Fail closed**: se o módulo
 * não estiver habilitado — ou se a chave não existir no catálogo — a rota
 * responde 404 e a página nunca é renderizada.
 *
 * Por que 404 e não redirect: um redirect silencioso faria uma decisão de
 * rollout parecer erro de navegação, e ainda revelaria que a rota existe. O
 * 404 é a resposta honesta para "isto não está disponível". Ninguém vê uma
 * página pronta só porque digitou a URL.
 *
 * Chamar como PRIMEIRA linha da página, antes de qualquer leitura de dado.
 */
export function exigirModuloHabilitado(chave: string): void {
  if (!moduloHabilitado(chave)) notFound();
}
