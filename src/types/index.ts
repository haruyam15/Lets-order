export type Category = 'JavaScript' | 'React' | 'CS';

export interface CategoryData {
  name: Category;
  id: string;
}

export interface Item {
  id: number;
  category: string;
  title: string;
  price: number;
  icon_img: string;
}
