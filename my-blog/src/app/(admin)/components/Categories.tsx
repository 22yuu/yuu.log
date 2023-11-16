'use client';

import MainCategoryItem from './MainCategoryItem';
import {
  MockCategoryKeysType,
  categoryList,
} from '@/constants/mock-categories';

export default function Categories() {
  const mainCategories: MockCategoryKeysType = Object.keys(categoryList);

  return (
    <>
      {mainCategories.map((category, index) => {
        return (
          <MainCategoryItem key={`${category}-${index}`} name={category} />
        );
      })}
    </>
  );
}
