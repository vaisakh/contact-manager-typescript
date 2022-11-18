import App from './app'
import {Application} from "express";
import BaseServer from './interfaces/server.interface'
import ContactController from "./controller/contact.controller";

class Server implements BaseServer {
    readonly app: Application

    constructor(app: App) {
        this.app = app.getApp()
    }

    start() {
        this.listen()
    }

    stop() {}

    listen() {
        this.app.listen('3000', () => console.log('server started at 3000'))
    }
}

let app: App = new App([
    new ContactController()
])

let server: Server = new Server(app)

server.listen()