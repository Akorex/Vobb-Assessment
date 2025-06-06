import { verifyUserAccessToken } from "../utils";
import { AdminController } from "./admin.controller";
import { Router } from "express";

export class AdminRoute {
  public router = Router();
  private adminController = new AdminController();

  constructor() {
    this.initRoutes();
  }

  initRoutes() {
    this.router.post("/admin/register", this.adminController.register);
    this.router.post("/admin/login", this.adminController.login);
    this.router.post(
      "/admin/cars",
      verifyUserAccessToken,
      this.adminController.createNewCar
    );
  }
}
