import { Router } from "express";
import { CategoryController } from "./categories.controller";

export class CategoryRoute {
  public router = Router();
  private categoryController = new CategoryController();

  constructor() {
    this.initRoutes();
  }

  initRoutes() {
    this.router.get("/categories", this.categoryController.fetchCategories);
  }
}
