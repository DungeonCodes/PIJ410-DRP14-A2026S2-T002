// BASELINE V1 INICIAL PRÉ-ADS — composição histórica corrigida em 07/10/2026.
// Os artefatos de Ads permanecem preservados para composição exclusiva da V2.
import Home from './pages/home';
import Captacao from './pages/captacao';
import Matriculas from './pages/matriculas';
import { AppShell } from '@/components/app-shell';

export const UI_V1 = Object.freeze({
  Shell: AppShell,
  pages: Object.freeze({
    '/': Home,
    '/captacao': Captacao,
    '/matriculas': Matriculas,
  }),
});
