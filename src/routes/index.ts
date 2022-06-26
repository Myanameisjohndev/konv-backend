import { Router } from "express";

import { operationsRoutes } from "./operations";
import { userRoutes } from "./user";

const routes = Router();

routes.use("/operations", operationsRoutes);
routes.use("/account", userRoutes);

export { routes };
