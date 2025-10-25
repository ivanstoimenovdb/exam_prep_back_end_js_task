import { Router  } from "express";

import homeController  from "./controllers/homeController.js";
import errorController from "./controllers/errorController.js";
import userController from "./controllers/userController.js";
import blogController from "./controllers/blogController.js";

const routes = Router();

routes.use(homeController);
routes.use('/users', userController);
routes.use('/blogs', blogController);

routes.use(errorController);

export default routes;