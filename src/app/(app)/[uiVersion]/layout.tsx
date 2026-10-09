import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { APP } from '@/lib/identidade';
import { DISCIPLINA_V2 } from '@/lib/identidade-v2';
import { isUIVersion } from '@/lib/interface';
import { INTERFACES } from '@/ui';

export async function generateMetadata({ params }: { params: Promise<{ uiVersion: string }> }): Promise<Metadata> {
  const { uiVersion } = await params;
  if (!isUIVersion(uiVersion)) notFound();
  return { title: `${APP.nome} · ${uiVersion === 'v2' ? DISCIPLINA_V2 : APP.disciplina}` };
}

export default async function VersionLayout({ children, params }: {
  children: ReactNode;
  params: Promise<{ uiVersion: string }>;
}) {
  const { uiVersion } = await params;
  if (!isUIVersion(uiVersion)) notFound();
  const Shell = INTERFACES[uiVersion].Shell;
  return <Shell version={uiVersion}>{children}</Shell>;
}
