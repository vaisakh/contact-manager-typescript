import Controller from '../interfaces/controller.interface'
import {Request, Response, Router} from "express";
import ContactService from "../service/contact.service";

class ContactController implements Controller {
    readonly path = '/contact'
    readonly router = Router()
    private readonly contactService = ContactService

    constructor() {
        this.routes()
    }

    private routes() {
        this.router.get(this.path, this.getAllContacts)
        this.router.post(this.path, this.createContact)
    }

    private getAllContacts(request: Request, response: Response) {
        response.json({ data: ContactService.find()})
    }

    private createContact(request: Request, response: Response) {
        response.json({data: ContactService.create(request.body)})
    }
}

export default ContactController