'use client';

import Link from 'next/link';
import Hero from './Hero';
import SideMenuList from './SideMenuList';
import Contact from './Contact';
import { usePathname } from 'next/navigation';
import { categories } from '@/constants/type-menus';

export default function SidePanel() {
  const pathName = usePathname().split('/')[1];
  const isPortfolioPath = pathName === categories.portfolio;
  const animateSidePanelHidden =
    ' transform -translate-x-full transition-transform ease-in duration-300';
  return (
    <section
      className={`fixed w-52 md:w-[350px] h-full bg-neutral-300 flex flex-col items-center ${
        isPortfolioPath
          ? animateSidePanelHidden
          : `${animateSidePanelHidden} md:translate-x-0`
      }`}
    >
      <Hero />
      <div className="p-4">
        <Link href="/" className="text-3xl font-bold">
          Yuu.log
        </Link>
      </div>
      {/* <p className="p-2">
        세상에 영향력을 기여하는 개발자로 성장하고 싶은 개발자 이진유입니다.
      </p> */}
      <SideMenuList />
      <Contact />
    </section>
  );
}
