export interface ICategory {
  _id: string;
  title: string;
  description?: string;
}

export interface CategoryDTO {
  title: string;
  description?: string;
}
