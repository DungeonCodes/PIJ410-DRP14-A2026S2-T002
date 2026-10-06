import { notFound } from 'next/navigation';
import { isUIVersion } from '@/lib/interface';
import { moduloDaRota } from '@/lib/fases';
import { exigirModuloHabilitado } from '@/lib/gate-servidor';
import { INTERFACES } from '@/ui';

export default async function VersionPage({ params, searchParams }: {
  params: Promise<{ uiVersion: string; module?: string[] }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { uiVersion, module: segments = [] } = await params;
  if (!isUIVersion(uiVersion)) notFound();
  const route = segments.length ? `/${segments.join('/')}` : '/';
  const modulo = moduloDaRota(route);
  if (modulo) exigirModuloHabilitado(modulo.chave);
  const pages = INTERFACES[uiVersion].pages;
  if (!Object.hasOwn(pages, route)) notFound();
  const Page = pages[route as keyof typeof pages];
  return <Page version={uiVersion} searchParams={searchParams} />;
}
