import React from 'react';

type Props = {
  name: string;
};

export default function SubCategoryItem({ name }: Props) {
  return (
    <div className="pl-16">
      <div className="flex w-full h-14 items-center bg-theme-primary border border-zinc-300 dark:border-zinc-500">
        <div className="flex w-full items-center justify-between px-6">
          <p>{name}</p>
          <button className="w-14 flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2 text-sm">
            수정
          </button>
        </div>
      </div>
    </div>
  );
}
