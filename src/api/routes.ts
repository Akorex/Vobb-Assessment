import { AdminRoute } from "./admin/admin.route";
import { CarRoute } from "./cars/cars.route";
import { CategoryRoute } from "./categories/categories.route";

export const routes = [new AdminRoute(), new CarRoute(), new CategoryRoute()];
