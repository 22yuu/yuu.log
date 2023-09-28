'use client';

import { categoryList } from '@/constants/mock-categories';
import FolderOpenIcon from '../ui/icons/FolderOpenIcon';
import { useState } from 'react';
import FolderCloseIcon from '../ui/icons/FolderCloseIcon';
import AngleRightIcon from '../ui/icons/AngleRightIcon';
import AngleDownIcon from '../ui/icons/AngleDownIcon';

type Props = {
  category: string;
};
export default function CategoryCard({ category }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-8 flex flex-col">
      <div
        className="flex justify-between w-full rounded-t bg-theme-primary p-3 text-theme-text"
        key={category}
      >
        <div className="flex items-center gap-2 ">
          {open ? (
            <FolderOpenIcon className="w-5 h-5" />
          ) : (
            <FolderCloseIcon className="w-5 h-5" />
          )}
          {category}
        </div>
        <button
          className="p-1 rounded-full hover:bg-zinc-700"
          onClick={() => setOpen(!open)}
        >
          <AngleRightIcon
            className={`transform ${
              open && 'rotate-90'
            } transition-transform duration-300`}
          />
        </button>
      </div>
      <div
        className={`w-full bg-zinc-600 rounded-b ${
          !open && ' hidden transition-all ease-in-out duration-150'
        }`}
      >
        <ul>
          {category.length > 0 &&
            categoryList[category].map((subCategory) => (
              <li
                key={subCategory}
                className="px-4 py-3 text-theme-text border-b border-b-theme-text/5 last:border-none"
              >
                {subCategory}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
