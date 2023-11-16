'use client';

import { useState } from 'react';
import MainCategoryItem from './MainCategoryItem';
import { categoryList } from '@/constants/mock-categories';

type Props = {
  isAdd?: boolean;
  toggleAdd?: () => void;
};

export default function Categories({ isAdd, toggleAdd }: Props) {
  const [categoires, setCategories] = useState(Object.keys(categoryList));

  const onAddCategory = (newCategoryName: string) => {
    setCategories([...categoires, newCategoryName]);
  };

  const onEditCateogry = (id: string, updated: string) => {
    setCategories(
      categoires.map((name, index) => {
        if (index === Number(id)) {
          return updated;
        }
        return name;
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
      {categoires.map((category, index) => {
        return (
          <MainCategoryItem
            key={`${category}-${index}`}
            id={`${index}`}
            name={category}
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
