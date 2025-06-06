import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";
import { ResponseHandler } from "../responses/response";

export class AuthController {
  public authService = new AuthService();

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

      ResponseHandler.successResponse(res, message, data, 201);
    } catch (error) {
      next(error);
    }
  };
}
