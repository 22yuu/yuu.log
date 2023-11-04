import { getFakePosts } from '@/api/post';
import MainWrapper from '@/components/layouts/MainWrapper';
import PostCard from '@/components/posts/PostCard';

export default async function HomePage() {
  const posts = await getFakePosts();

  return (
    <MainWrapper>
      <div className="flex mt-6 ">
        <div className="flex flex-col max-w-5xl w-full px-2">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </MainWrapper>
  );
}
