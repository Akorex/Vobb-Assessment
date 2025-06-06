import { Router } from "express";
import { CarControllers } from "./cars.controllers";

export class CarRoute {
  public router = Router();
  private carController = new CarControllers();

  constructor() {
    this.initRoutes();
  }
  initRoutes() {
    this.router.get("/cars/:carId", this.carController.get);
    this.router.get("/cars/:categoryId", this.carController.getAllByCategory);
  }
}
