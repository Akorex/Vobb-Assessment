import { AuthController } from "./admin.controller";
import { Router } from "express";

export class AuthRoute {
  public router = Router();
  private authController = new AuthController();

  constructor() {
    this.initRoutes();
  }

  initRoutes() {
    this.router.post("/register", this.authController.register);
    this.router.post("/login", this.authController.login);
  }
}
