'use client';
import React, { useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import AngleRightIcon from '@/components/ui/icons/AngleRightIcon';

export default function CategoryPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-[1200px] px-16 mt-12 md:ml-[350px]">
      <ContentHeader title="카테고리 관리" />
      <div className="flex justify-between my-4">
        <p>드래그 앤 드롭으로 카테고리 순서를 변경할 수 있습니다.</p>
        <div className="flex">
          <button className="w-14 flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2 text-sm">
            추가
          </button>
        </div>
      </div>
      <div className="w-full h-[90%] bg-theme-primary/50 px-8 pt-4">
        <div className="flex w-full h-14 items-center bg-theme-primary border border-zinc-300 dark:border-zinc-500">
          <button
            onClick={() => setOpen(!open)}
            className="w-14 h-14 bg-theme-bg flex justify-center items-center border border-l-0 border-zinc-300 dark:border-zinc-500"
          >
            <AngleRightIcon
              className={`w-4 h-4 transform ${
                open && 'rotate-90'
              } transition-transform duration-300`}
            />
          </button>
          <div className="flex w-full items-center justify-between px-6">
            <p>FE</p>
            <button className="w-14 flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2 text-sm">
              추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
