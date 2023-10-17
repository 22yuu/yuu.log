import Hero from '@/components/Hero';
import ToggleDarkModeBtn from '@/components/ToggleDarkModeBtn';
import Login from '@/components/admin/Login';
import Heading from '@/components/ui/atoms/Heading';
import ChartIcon from '@/components/ui/icons/ChartIcon';
import ContentIcon from '@/components/ui/icons/ContentIcon';
import Link from 'next/link';

export default function page() {
  const user = true;

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex w-full h-full text-theme-text">
      {/* admin side panel */}
      <div className="fixed w-[350px] h-full bg-theme-primary transform -translate-x-full transition-transform ease-in duration-300 md:translate-x-0">
        <div className="w-full text-center mt-12">
          <Heading size={'xl'}>Yuu.log</Heading>
          <div className="p-4">
            <button className="w-full border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2">
              글 작성 하기
            </button>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <div className="flex pl-6 py-2 items-center">
              <ChartIcon className="mr-2" />
              <Heading size={'md'}>통계</Heading>
            </div>
            <ul>
              <li className="pt-3 pl-12">
                <Link href="/">방문 통계</Link>
              </li>
              <li className="pt-3 pl-12">
                <Link href="/">유입 경로</Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex pl-6 py-2 items-center">
              <ContentIcon className="mr-2" />
              <Heading size={'md'}>콘텐츠</Heading>
            </div>
            <ul>
              <li className="pt-3 pl-12">
                <Link href="/">글 관리</Link>
              </li>
              <li className="pt-3 pl-12">
                <Link href="/">카테고리 관리</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* contents */}
      <div className="w-full px-16 mt-12 md:ml-[350px]">
        <div className="flex justify-between mb-8 border border-red-500">
          <Heading size={'xl'}>Dash Board</Heading>
          <div className="flex items-center gap-4">
            <span>Welcome! {user ? 'Admin' : 'Guest'}</span>
            <ToggleDarkModeBtn />
          </div>
        </div>
        <div className="h-[300px] mb-8 border border-red-500"></div>
        <div className="h-[300px] mb-8 border border-red-500"></div>
        <div className="h-[300px] mb-8 border border-red-500"></div>
        <div className="h-[300px] mb-8 border border-red-500"></div>
      </div>
    </div>
  );
}
