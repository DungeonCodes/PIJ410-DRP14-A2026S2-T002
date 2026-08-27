import type { Metadata } from 'next';
import './globals.css';
import { APP, SELO_SINTETICO } from '@/lib/identidade';

export const metadata: Metadata = {
  title: `${APP.nome} · ${APP.disciplina}`,
  description: `Aplicação acadêmica do PIJ410 (UNIVESP). ${SELO_SINTETICO}. Sem integrações reais e sem dados operacionais.`,
  // Artefato acadêmico: não deve ser indexado nem apresentado como serviço.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
