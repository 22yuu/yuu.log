import { BASE_URL } from "./const";

// 메인 카테고리
export const getAllCategories = async () => {
  const res = await fetch(`${BASE_URL}/admin/category/get-all`, {
    cache: "no-store",
  }).then((data) => data.json());

  return res;
};
export const addMainCategory = async (category: string) => {
  const res = await fetch(`${BASE_URL}/admin/category/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ name: category }),
  }).then((data) => data.json());

  return res;
};
export const editMainCategory = () => {};
export const deleteMainCategory = () => {};

// 하위 카테고리
export const addSubCategory = () => {};
export const editSubCategory = () => {};
export const deleteSubCategory = () => {};
