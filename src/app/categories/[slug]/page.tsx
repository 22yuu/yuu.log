type Props = {
  params: {
    slug: string;
  };
};

export default function CategorytPage({ params: { slug } }: Props) {
  console.log(slug);

  return <div>{slug}</div>;
}
