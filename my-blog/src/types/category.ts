export interface CategoryProps {
  _id: string;
  name: string;
  subCategoires?: SubCategoryProps[];
}

export interface SubCategoryProps {
  _id: string;
  name: string;
}
