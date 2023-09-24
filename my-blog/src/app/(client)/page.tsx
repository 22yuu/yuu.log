'use client';

import MainWrapper from '@/components/layouts/MainWrapper';
import PostCard from '@/components/posts/PostCard';

export default function HomePage() {
  return (
    <MainWrapper>
      <div className="flex mt-6 ">
        <div className="flex flex-col max-w-5xl w-full px-2">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </MainWrapper>
  );
}
