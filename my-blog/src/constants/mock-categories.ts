export type MockCategoriesType = {
  [mainCategory: string]: string[];
};
export type MockCategoryKeysType = Extract<keyof MockCategoriesType, string>[];

export const categoryList: MockCategoriesType = {
  Algorithm: ["백준", "프로그래머스", "삼성 SW 아카데미"],
  FE: ["JavaScript", "React", "TypeScript", "NextJS"],
  Daily: ["TIL", "맛집리스트", "여행"],
};
