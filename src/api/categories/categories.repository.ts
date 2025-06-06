import { CategoryDTO } from "./categories.interface";
import Category from "./categories.model";

export class CategoryRepository {
  public async getAll() {
    const categories = await Category.find({});

    return categories;
  }

  public async create(payload: CategoryDTO) {
    const category = await Category.create({
      title: payload.title,
      description: payload.description,
    });

    return category;
  }

  public async bulkCreate(payload: CategoryDTO[]) {
    const categories = payload.map((item) => ({
      title: item.title,
      description: item.description,
    }));

    const createdCategories = await Category.insertMany(categories);

    return createdCategories;
  }
}
