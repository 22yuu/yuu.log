import { getFakePost } from '@/api/post';
import MarkdownViewer from '@/components/MarkdownViewer';
import MainWrapper from '@/components/layouts/MainWrapper';
import Heading from '@/components/ui/atoms/Heading';

type Props = {
  params: {
    slug: string;
  };
};
export default async function page({ params: { slug } }: Props) {
  const post = await getFakePost(slug);

  return (
    <MainWrapper>
      <Heading size={'xl'} className="mt-12 mb-6">
        {post.title}
      </Heading>
      <MarkdownViewer content={post.body}></MarkdownViewer>
    </MainWrapper>
  );
}
