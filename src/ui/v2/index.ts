// V2: evolução técnica acadêmica de CPR sazonal; nenhuma mudança decorrente de feedback.
// Futuras substituições de Shell/páginas/componentes ficam aqui ou em src/ui/v2/.
// Nunca editar a V1 ou seus componentes protegidos para desenvolver a V2.
import { UI_V1 } from '../v1';
import GoogleV2 from './pages/google';

export const UI_V2 = { ...UI_V1, pages: { ...UI_V1.pages, '/ads/google': GoogleV2 } };
