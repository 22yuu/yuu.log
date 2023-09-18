type Props = {
  params: {
    slug: string;
  };
};

export default function CategorytPage({ params: { slug } }: Props) {
  return <div>{slug}</div>;
}
