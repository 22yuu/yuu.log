import { categories } from '@/constants/type-menus';
import { usePathname } from 'next/navigation';

export default function useCurrentPath() {
  return usePathname().split('/')[1] || categories.home;
}
