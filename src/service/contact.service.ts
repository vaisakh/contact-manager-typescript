import {BaseService} from "./base.service";

class ContactService extends BaseService {

    private contactList: Array<any> = [
        {name: 'vaisakh', phone: 8899009988},
        {name: 'vm', phone: 9898989898}
    ]

    constructor() {
        super('axios', 'environment.baseURL');
    }

    public find() {
        return this.contactList
    }

    public findOne(id: string) {

    }

    public create(data: any) {
        this.contactList.push(data)
    }

    public update() {

    }

    public deleteIds() {

    }

}

export default new ContactService()