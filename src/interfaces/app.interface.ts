import { Application, Router } from "express";

interface BaseApplication {
  app: Application;
  router: Router;
}

export default BaseApplication;
