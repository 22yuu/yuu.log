import { getAccessToken } from '@/api/auth';
import Heading from '@/components/ui/atoms/Heading';
import ChartIcon from '@/components/ui/icons/ChartIcon';
import ContentIcon from '@/components/ui/icons/ContentIcon';
import Pencil from '@/components/ui/icons/Pencil';
import { LoginContextProps, useLoginContext } from '@/contexts/LoginProvider';
import Link from 'next/link';
import React from 'react';

export default function AdminSidePanel() {
  const { user } = useLoginContext() as LoginContextProps;

  return (
    <div className="fixed w-[350px] h-full bg-theme-primary transform -translate-x-full transition-transform ease-in duration-300 md:translate-x-0">
      <div className="w-full text-center mt-12">
        <Heading size={'xl'}>Yuu.log</Heading>
        <div className="p-4">
          <Link
            href="/admin/posts/write"
            className="w-full flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2"
          >
            <Pencil className="w-5 h-5" />글 작성하기
          </Link>
          <button
            className="w-full flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2 mt-8"
            onClick={() => {
              if (user.user.role !== 'guest') {
                getAccessToken(user.accessToken!);
              }
            }}
          >
            더미 테스트 버튼
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
              <Link href="/admin">방문 통계</Link>
            </li>
            <li className="pt-3 pl-12">
              <Link href="/admin/referrer">유입 경로</Link>
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
              <Link href="/admin/posts">글 관리</Link>
            </li>
            <li className="pt-3 pl-12">
              <Link href="/admin/category">카테고리 관리</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
