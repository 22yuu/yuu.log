'use client';

import SubCategories from '@/components/categories/SubCategories';
import AngleRightIcon from '@/components/ui/icons/AngleRightIcon';
import React, { useState } from 'react';
import SubCategoryItem from './SubCategoryItem';
import { categoryList } from '@/constants/mock-categories';

type Props = {
  name: string;
};

export default function MainCategoryItem({ name }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex w-full h-14 items-center bg-theme-primary border border-zinc-300 dark:border-zinc-500">
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 bg-theme-bg flex justify-center items-center border border-l-0 border-zinc-300 dark:border-zinc-500"
        >
          <AngleRightIcon
            className={`w-4 h-4 transform ${
              open && 'rotate-90'
            } transition-transform duration-300`}
          />
        </button>
        <div className="flex w-full items-center justify-between px-6">
          <p>{name}</p>
          <button className="w-14 flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2 text-sm">
            추가
          </button>
        </div>
      </div>
      {open && (
        <>
          {categoryList[name].map((subCategory, index) => (
            <SubCategoryItem
              key={`${subCategory}-${index}`}
              name={subCategory}
            />
          ))}
        </>
      )}
    </div>
  );
}
