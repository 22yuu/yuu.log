import { categoryList } from "@/constants/mock-categories";
import Link from "next/link";
import React from "react";

type Props = {
  category: string;
  open: boolean;
};

export default function SubCategories({ category, open }: Props) {
  return (
    <ul
      className={`w-full bg-white dark:bg-zinc-800 border dark:border-none rounded-b max-h-[500px] transition-[max-height] duration-300 ease-in-out overflow-hidden ${
        !open && "max-h-0 hidden"
      }`}
    >
      {category.length > 0 &&
        categoryList[category].map((subCategory) => (
          <li
            key={subCategory}
            className="px-4 py-3 text-theme-text border-b border-b-theme-text/5 last:border-none transition-all"
          >
            <Link href={`#`}>{subCategory}</Link>
          </li>
        ))}
    </ul>
  );
}
