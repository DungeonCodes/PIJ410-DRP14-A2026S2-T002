import { UI_V2 } from '../v2';
import Home from './pages/home';
import Captacao from './pages/captacao';
import Matriculas from './pages/matriculas';
import Ads from './pages/ads';
import Google from './pages/google';
import Meta from './pages/meta';
import Estrategia from './pages/estrategia';

/** V3 herda apenas shell/identidade e guarda de fases; páginas históricas não são editadas. */
export const UI_V3 = {
  ...UI_V2,
  pages: {
    ...UI_V2.pages,
    '/': Home,
    '/captacao': Captacao,
    '/matriculas': Matriculas,
    '/ads': Ads,
    '/ads/google': Google,
    '/ads/meta': Meta,
    '/ads/estrategia': Estrategia,
  },
};
