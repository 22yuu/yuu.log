'use client';

import FolderOpenIcon from '../ui/icons/FolderOpenIcon';
import { useState } from 'react';
import FolderCloseIcon from '../ui/icons/FolderCloseIcon';
import AngleRightIcon from '../ui/icons/AngleRightIcon';
import SubCategories from './SubCategories';

type Props = {
  category: string;
};
export default function CategoryCard({ category }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-8 flex flex-col">
      <div
        className="flex justify-between w-full rounded-t bg-theme-primary/30  p-3 text-theme-text cursor-pointer border dark:border-none"
        onClick={() => setOpen(!open)}
        key={category}
      >
        <div className="flex items-center gap-2 ">
          {open ? (
            <FolderOpenIcon className="w-5 h-5 text-zinc-500" />
          ) : (
            <FolderCloseIcon className="w-5 h-5 text-zinc-500" />
          )}
          {category}
        </div>
        <button className="p-1 rounded-full hover:bg-slate-200/50 dark:hover:bg-zinc-500">
          <AngleRightIcon
            className={`w-4 h-4 transform ${
              open && 'rotate-90'
            } transition-transform duration-300`}
          />
        </button>
      </div>
      <SubCategories category={category} open={open} />
    </div>
  );
}
