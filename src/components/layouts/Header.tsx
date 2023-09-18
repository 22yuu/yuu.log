'use client';
import { categories } from '@/constants/type-menus';
import { usePathname } from 'next/navigation';
import Search from '../Search';

export default function Header() {
  const category = usePathname().split('/')[1] || categories.home;

  return (
    <header className="fixed top-0 left-0 md:left-[350px] right-0 h-12 transition-all duration-200 ease-in-out z-50 border-b border-b-zinc-300">
      <div className="flex w-full h-full max-w-7xl items-center justify-between px-4 md:px-6 mx-auto">
        <div className="flex h-full items-center">
          <h2 className="font-semibold text-sm">
            {firstCharCapitalize(category)}
          </h2>
        </div>
        <div className="block w-[70%] text-lg font-semibold text-center text-ellipsis whitespace-nowrap md:hidden">
          Yuu
        </div>
        <Search />
      </div>
    </header>
  );
}

function firstCharCapitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}