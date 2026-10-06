import { redirect } from 'next/navigation';
import { canonicalTarget, type UIQuery } from '@/lib/interface';
import { exigirModuloHabilitado } from '@/lib/gate-servidor';

export default async function CanonicalAlias({ searchParams }: { searchParams: Promise<UIQuery> }) {
  exigirModuloHabilitado('ads-estrategia');
  redirect(canonicalTarget('/ads/estrategia', await searchParams));
}
