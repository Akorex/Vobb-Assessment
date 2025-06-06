import { Request, Response, NextFunction } from "express";
import { ResponseHandler } from "../responses/response";
import { CategoryService } from "./categories.services";

export class CategoryController {
  private categoryService = new CategoryService();

  fetchCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { success, message, data } =
        await this.categoryService.fetchCategories();

      if (!success) ResponseHandler.errorResponse(res, message, 404);

      ResponseHandler.successResponse(res, message, data, 200);
    } catch (error) {
      next(error);
    }
  };
}
