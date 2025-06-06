import { AuthController } from "./admin.controller";
import { Router } from "express";

export class AdminRoute {
  public router = Router();
  private authController = new AuthController();

  constructor() {
    this.initRoutes();
  }

  initRoutes() {
    this.router.post("/admin/register", this.authController.register);
    this.router.post("/admin/login", this.authController.login);
  }
}
