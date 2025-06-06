import { CustomError } from "../errorhandlers/error";
import { ResponseHandler } from "../responses/response";
import Car from "./cars.model";

export class CarService {
  public async get(id: string) {
    try {
      const car = await Car.findById(id);

      if (!car) {
        return ResponseHandler.error(`Car does not exist`, null);
      }

      return ResponseHandler.success(`Car successfully retrieved`, car);
    } catch (error) {
      throw CustomError.wrap(error);
    }
  }

  public async getCars(categoryId: string, page: number, limit: number) {
    try {
      const offset = (page - 1) * limit;

      let query = { categoryId };

      const [cars, totalCount] = await Promise.all([
        Car.find(query).sort({ createdAt: -1 }).skip(offset).limit(limit),
        Car.countDocuments(query),
      ]);

      return ResponseHandler.success(`Cars successfully retrieved`, {
        cars: {
          data: cars,
          count: cars.length,
          total: totalCount,
          currentPage: page,
          totalPages: Math.ceil(totalCount / limit),
        },
      });
    } catch (error) {
      throw CustomError.wrap(error);
    }
  }
}
