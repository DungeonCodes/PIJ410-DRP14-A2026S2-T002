// V2 combina a evolução técnica/acadêmica de Ads/CPR com a alteração comunitária
// FB-V1-P1-001, restrita à apresentação temporal de Captação.
import { UI_V1 } from '../v1';
import Ads from '../v1/pages/ads';
import CaptacaoV2 from './pages/captacao';
import GoogleV2 from './pages/google';
import Meta from '../v1/pages/meta';
import Estrategia from '../v1/pages/estrategia';

export const UI_V2 = {
  ...UI_V1,
  pages: {
    ...UI_V1.pages,
    '/captacao': CaptacaoV2,
    '/ads': Ads,
    '/ads/google': GoogleV2,
    '/ads/meta': Meta,
    '/ads/estrategia': Estrategia,
  },
};
