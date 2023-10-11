import CategoryCard from '@/components/categories/CategoryCard';
import MainWrapper from '@/components/layouts/MainWrapper';
import Heading from '@/components/ui/atoms/Heading';
import {
  MockCategoryKeysType,
  categoryList,
} from '@/constants/mock-categories';

export default function CatregoriesPage() {
  const mainCategories: MockCategoryKeysType = Object.keys(categoryList);

  return (
    <MainWrapper>
      <Heading size={'xl'} className="mt-12 mb-6">
        Categories
      </Heading>

      <div id="categories">
        <div className="w-full ">
          {mainCategories.map((mainCategory, index) => {
            return <CategoryCard key={index} category={mainCategory} />;
          })}
        </div>
      </div>
    </MainWrapper>
  );
}
