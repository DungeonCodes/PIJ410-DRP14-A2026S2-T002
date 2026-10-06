// BASELINE V1 PRÉ-VALIDAÇÃO — congelada em 06/10/2026 (ADR-008).
// Mudanças de UX pertencem à V2; exceções críticas exigem registro e revisão dos hashes.
import Home from './pages/home';
import Captacao from './pages/captacao';
import Matriculas from './pages/matriculas';
import Ads from './pages/ads';
import Google from './pages/google';
import Meta from './pages/meta';
import Estrategia from './pages/estrategia';
import { AppShell } from '@/components/app-shell';

export const UI_V1 = Object.freeze({
  Shell: AppShell,
  pages: Object.freeze({
    '/': Home,
    '/captacao': Captacao,
    '/matriculas': Matriculas,
    '/ads': Ads,
    '/ads/google': Google,
    '/ads/meta': Meta,
    '/ads/estrategia': Estrategia,
  }),
});
