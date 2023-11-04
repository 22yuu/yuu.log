export type Post = {
  _id: string;
  title: string;
  body: string;
  thumbnail: string;
  images: string[];
  hidden: boolean;
  category: string;
  subCategory: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
};
