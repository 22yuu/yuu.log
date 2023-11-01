'use client';

import ContentHeader from '@/app/(admin)/components/ContentHeader';

export default function page() {
  return (
    <div className="w-full px-16 mt-12 md:ml-[350px]">
      <ContentHeader title="글 작성하기" />
    </div>
  );
}
