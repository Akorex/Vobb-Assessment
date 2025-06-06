import { Request, Response, NextFunction } from "express";
import { ResponseHandler } from "../responses/response";
import { CarService } from "./cars.service";

export class CarControllers {
  private carService = new CarService();

  get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const carId = req.params.carId;

      const { success, message, data } = await this.carService.get(carId);

      if (!success) ResponseHandler.errorResponse(res, message, 404);

      ResponseHandler.successResponse(res, message, data, 200);
    } catch (error) {
      next(error);
    }
  };

  getAllByCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const categoryId = req.params.categoryId;

      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const model = req.query.model as string;
      const availability = req.query.availability as string;

      const filters = {
        model,
        availability,
      };

      const { success, message, data } = await this.carService.getCars(
        categoryId,
        page,
        limit,
        filters
      );

      if (!success) ResponseHandler.errorResponse(res, message, 404);

      ResponseHandler.successResponse(res, message, data, 200);
    } catch (error) {
      next(error);
    }
  };
}
