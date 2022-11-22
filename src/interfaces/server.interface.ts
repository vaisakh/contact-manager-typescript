import { Application } from "express";

interface BaseServer {
  app: Application;
  start(): void;
  stop(): void;
  listen(): void;
}

export default BaseServer;
