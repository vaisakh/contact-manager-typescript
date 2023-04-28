import express, { Express, Router } from "express";
import BaseApplication from "./interfaces/app.interface";
import Controller from "./interfaces/controller.interface";

class App implements BaseApplication {
  readonly app: Express;
  readonly router: Router;

  constructor(private controllers: Controller[]) {
    this.app = express();
    this.router = express.Router();

    this.init();
  }

  public getApp(): Express {
    return this.app;
  }

  private init() {
    this.middleware();
    this.routes();
  }

  private middleware() {
    this.app.use(express.json());
  }

  private routes() {
    this.controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }
}

export default App;
