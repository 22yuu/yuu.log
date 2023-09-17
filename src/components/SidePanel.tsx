'use client';

import Link from 'next/link';
import Hero from './Hero';
import SideMenuList from './SideMenuList';
import Contact from './Contact';
import { usePathname } from 'next/navigation';

export default function SidePanel() {
  const pathName = usePathname().split('/')[1];

  return (
    <section
      className={`w-[350px] h-full bg-neutral-300 flex flex-col items-center ${
        pathName === 'portfolio'
          ? `-translate-x-[350px] transition ease-in-out duration-1000`
          : ''
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
