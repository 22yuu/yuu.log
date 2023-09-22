'use client';

import Link from 'next/link';
import { menus } from '@/constants/type-menus';
import useCurrentPath from '@/hooks/useCurrentPath';

export default function SideMenuList() {
  const currentMenu = useCurrentPath();

  return (
    <section className="w-full mt-8">
      <ul className="pl-16">
        {menus.map((menu, index) => (
          <li
            key={index}
            className={`w-full mb-4 border-r-2 ${
              currentMenu === menu.text
                ? 'border-r-white text-white'
                : 'text-zinc-400 hover:border-r-white hover:text-white'
            } `}
          >
            <Link href={menu.href} className="flex">
              <div className="mr-4">{menu.icon}</div>
              <span className="tracking-widest font-semibold uppercase">
                {menu.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
