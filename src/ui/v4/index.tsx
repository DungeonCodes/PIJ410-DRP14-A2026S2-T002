import type { ReactNode } from 'react';
import { UI_V3 } from '../v3';
import Home from './pages/home';
import Organico from './pages/organico';
import Gestao from './pages/gestao';
import Arquitetura from './pages/arquitetura';

function ContextoHerdado({ children }: { children: ReactNode }) {
  return <div className="space-y-6"><p className="rounded-xl border border-[var(--accent-blue)]/30 bg-[var(--accent-blue)]/[0.05] p-4 text-sm text-[var(--text-muted)]">V4 · módulo das Fases 1 ou 2 preservado da V3. O conteúdo abaixo conserva os rótulos e cálculos históricos; os módulos novos estão na mesma navegação V4.</p>{children}</div>;
}

type Props = { searchParams: Promise<Record<string, string | undefined>> };
const CaptacaoV3 = UI_V3.pages['/captacao'];
const MatriculasV3 = UI_V3.pages['/matriculas'];
const AdsV3 = UI_V3.pages['/ads'];
const GoogleV3 = UI_V3.pages['/ads/google'];
const MetaV3 = UI_V3.pages['/ads/meta'];
const EstrategiaV3 = UI_V3.pages['/ads/estrategia'];
const Captacao = (props: Props) => <ContextoHerdado><CaptacaoV3 {...props} /></ContextoHerdado>;
const Matriculas = (props: Props) => <ContextoHerdado><MatriculasV3 {...props} /></ContextoHerdado>;
const Ads = (props: Props) => <ContextoHerdado><AdsV3 {...props} /></ContextoHerdado>;
const Google = (props: Props) => <ContextoHerdado><GoogleV3 {...props} /></ContextoHerdado>;
const Meta = (props: Props) => <ContextoHerdado><MetaV3 {...props} /></ContextoHerdado>;
const Estrategia = (props: Props) => <ContextoHerdado><EstrategiaV3 {...props} /></ContextoHerdado>;

/** Nova composição; nenhuma implementação de V1, V2 ou V3 é modificada. */
export const UI_V4 = {
  Shell: UI_V3.Shell,
  pages: {
    '/': Home,
    '/captacao': Captacao,
    '/matriculas': Matriculas,
    '/ads': Ads,
    '/ads/google': Google,
    '/ads/meta': Meta,
    '/ads/estrategia': Estrategia,
    '/organico': Organico,
    '/gestao': Gestao,
    '/arquitetura': Arquitetura,
  },
};
