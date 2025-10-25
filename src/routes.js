import { Router  } from "express";

import homeController  from "./controllers/homeController.js";
import errorController from "./controllers/errorController.js";
import userController from "./controllers/userController.js";

const routes = Router();

// Home page controller.
routes.use(homeController);

// TODOs add other controllers here.
routes.use('/users', userController);


// Error controller.
routes.use(errorController);

export default routes;