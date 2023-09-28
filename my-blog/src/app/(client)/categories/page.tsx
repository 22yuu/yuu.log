import CategoryCard from '@/components/categories/CategoryCard';
import MainWrapper from '@/components/layouts/MainWrapper';
import {
  MockCategoryKeysType,
  categoryList,
} from '@/constants/mock-categories';

export default function CatregoriesPage() {
  const mainCategories: MockCategoryKeysType = Object.keys(categoryList);

  return (
    <MainWrapper>
      <h2 className="mt-12 mb-6 text-2xl font-semibold text-theme-text">
        Categories
      </h2>

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
