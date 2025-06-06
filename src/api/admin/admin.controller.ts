import { NextFunction, Request, Response } from "express";
import { AuthService } from "./admin.service";
import { ResponseHandler } from "../responses/response";
import { AdminRequest } from "../utils";
import { CarService } from "../cars/cars.service";

export class AdminController {
  public authService = new AuthService();
  public carService = new CarService();

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { firstName, lastName, email, phone, password } = req.body;

      const payload = { firstName, lastName, email, phone, password };

      const { success, message, data } = await this.authService.register(
        payload
      );

      if (!success) ResponseHandler.errorResponse(res, message, 400);

      ResponseHandler.successResponse(res, message, data, 201);
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const { success, message, data } = await this.authService.login(
        email,
        password
      );

      if (!success) ResponseHandler.errorResponse(res, message, 400);

      ResponseHandler.successResponse(res, message, data, 200);
    } catch (error) {
      next(error);
    }
  };

  createNewCar = async (
    req: AdminRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { brand, model, price, colour, plateNumber, category } = req.body;

      const payload = { brand, model, price, colour, plateNumber, category };

      const { success, message, data } = await this.carService.create(payload);

      if (!success) ResponseHandler.errorResponse(res, message, 400);

      ResponseHandler.successResponse(res, message, data, 201);
    } catch (error) {
      next(error);
    }
  };
}
