import MainWrapper from '@/components/layouts/MainWrapper';

type Props = {
  params: {
    slug: string;
  };
};

export default function CategorytPage({ params: { slug } }: Props) {
  return <MainWrapper>{slug}</MainWrapper>;
}
