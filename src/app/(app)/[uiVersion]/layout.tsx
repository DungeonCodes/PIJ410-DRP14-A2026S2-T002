import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { isUIVersion } from '@/lib/interface';
import { INTERFACES } from '@/ui';

export default async function VersionLayout({ children, params }: {
  children: ReactNode;
  params: Promise<{ uiVersion: string }>;
}) {
  const { uiVersion } = await params;
  if (!isUIVersion(uiVersion)) notFound();
  const Shell = INTERFACES[uiVersion].Shell;
  return <Shell version={uiVersion}>{children}</Shell>;
}
