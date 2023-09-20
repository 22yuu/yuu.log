import MainWrapper from '@/components/layouts/MainWrapper';
import { getCategories } from '@/utils/file/file';

export default function CatregoriesPage() {
  const categories = getCategories();

  return <MainWrapper>카테고리</MainWrapper>;
}
