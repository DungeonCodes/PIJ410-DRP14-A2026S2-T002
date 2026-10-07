// V2: evolução técnica/acadêmica que introduz Ads, o experimento CPR e a
// previsão sazonal. Nenhuma mudança decorre de feedback comunitário.
import { UI_V1 } from '../v1';
import Ads from '../v1/pages/ads';
import GoogleV2 from './pages/google';
import Meta from '../v1/pages/meta';
import Estrategia from '../v1/pages/estrategia';

export const UI_V2 = {
  ...UI_V1,
  pages: {
    ...UI_V1.pages,
    '/ads': Ads,
    '/ads/google': GoogleV2,
    '/ads/meta': Meta,
    '/ads/estrategia': Estrategia,
  },
};
