import { getCategories } from '@/utils/file/file';

export default function CatregoriesPage() {
  const categories = getCategories();
  console.log(categories);

  return <div>카테고리</div>;
}
