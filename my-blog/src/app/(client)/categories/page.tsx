import MainWrapper from "@/components/layouts/MainWrapper";
import {
  MockCategoryKeysType,
  categoryList,
} from "@/constants/mock-categories";

export default function CatregoriesPage() {
  const mainCategories: MockCategoryKeysType = Object.keys(categoryList);

  return (
    <MainWrapper>
      <ul>
        {mainCategories.map((mainCategory) => {
          return (
            <li>
              {mainCategory}
              <ul>
                {mainCategory.length > 0 &&
                  categoryList[mainCategory].map((subCategories) => (
                    <li className="ml-2">{subCategories}</li>
                  ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </MainWrapper>
  );
}
