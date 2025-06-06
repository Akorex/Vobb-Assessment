import { CustomError } from "../errorhandlers/error";
import { ResponseHandler } from "../responses/response";
import { CategoryRepository } from "./categories.repository";
import Car from "../cars/cars.model";

export class CategoryService {
  private categoryRepository = new CategoryRepository();

  public async fetchCategories() {
    try {
      const categories = await this.categoryRepository.getAll();

      const results = await Promise.all(
        categories.map(async (category) => {
          const categoryId = category._id;
          const productCount = await Car.countDocuments({
            category: categoryId,
          });

          return {
            ...category.toObject(),
            productCount,
          };
        })
      );

      return ResponseHandler.success(`Successfully fetched categories`, {
        categories: results,
      });
    } catch (error) {
      throw CustomError.wrap(error);
    }
  }
}
