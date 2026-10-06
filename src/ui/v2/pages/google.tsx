// Evolução técnica acadêmica autorizada; não é mudança solicitada pela comunidade.
import GoogleV1 from '../../v1/pages/google';
import { PrevisaoCPRSazonal } from '../components/previsao-cpr-sazonal';

export default async function GoogleV2(props: Parameters<typeof GoogleV1>[0]) {
  return <div className="space-y-8"><GoogleV1 {...props} /><PrevisaoCPRSazonal /></div>;
}
