"use client";

import { useEffect, useState } from "react";
import MainCategoryItem from "./MainCategoryItem";
import { categoryList } from "@/constants/mock-categories";
import { addMainCategory, getAllCategories } from "@/api/category";
import { CategoryProps } from "@/types/category";

type Props = {
  isAdd?: boolean;
  toggleAdd?: () => void;
};

export default function Categories({ isAdd, toggleAdd }: Props) {
  // const [categoires, setCategories] = useState(Object.keys(categoryList));
  const [categoires, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      getAllCategories().then((data) => {
        setCategories(data);
      });
    };

    getCategories();
  }, []);

  const onAddCategory = (newCategoryName: string) => {
    // setCategories([...categoires, newCategoryName]);
    addMainCategory(newCategoryName).then((data) => setCategories(data));
  };

  const onEditCateogry = (id: string, updated: string) => {
    setCategories(
      categoires.map((category) => {
        if (category._id === id) {
          category.name = updated;
        }

        return category;
      })
    );
  };

  const onDeleteCategory = (id: string) => {
    setCategories(
      categoires.filter((name, index) => {
        if (index === Number(id)) {
          return;
        }
        return name;
      })
    );
  };

  return (
    <>
      {categoires.map((category) => {
        return (
          <MainCategoryItem
            key={`${category._id}`}
            id={`${category._id}`}
            name={category.name}
            subCategories={category.subCategoires || []}
            onAdd={onAddCategory}
            onDelete={onDeleteCategory}
            onEdit={onEditCateogry}
          />
        );
      })}
      {isAdd && (
        <MainCategoryItem
          isAdd={isAdd}
          toggleAdd={toggleAdd}
          onAdd={onAddCategory}
          onDelete={onDeleteCategory}
          onEdit={onEditCateogry}
        />
      )}
    </>
  );
}
