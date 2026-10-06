import { redirect } from 'next/navigation';
import { canonicalTarget } from '@/lib/interface';

export default function HomeAlias() {
  redirect(canonicalTarget('/'));
}
