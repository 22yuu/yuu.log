"use client";

import ContentHeader from "../../components/ContentHeader";
import Categories from "../../components/Categories";
import { useRef, useState } from "react";

export default function CategoryPage() {
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [isAdd, setIsAdd] = useState(false);

  const toggleAddCategory = () => {
    setIsAdd(!isAdd);
  };

  return (
    <div className="w-full max-w-[1200px] px-16 mt-12 md:ml-[350px]">
      <ContentHeader title="카테고리 관리" />
      <div className="flex justify-between my-4">
        <p>드래그 앤 드롭으로 카테고리 순서를 변경할 수 있습니다.</p>
        <div className="flex">
          <button
            className="w-14 flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2 text-sm"
            onClick={toggleAddCategory}
          >
            추가
          </button>
        </div>
      </div>
      <div
        ref={categoriesRef}
        className="w-full h-[90%] bg-theme-primary/50 px-8 pt-4 overflow-auto"
      >
        <Categories isAdd={isAdd} toggleAdd={toggleAddCategory} />
      </div>
    </div>
  );
}
