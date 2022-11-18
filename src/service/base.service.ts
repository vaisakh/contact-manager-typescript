
export class BaseService {
    private httpClient: any
    protected baseURL: string

    constructor(client: any, baseURL: string) {
        this.httpClient = client
        this.baseURL = baseURL
    }

    protected get(url: string) {}
    protected post(url: string, data: any) {}
    protected put(url: string, data: any) {}
    protected delete(url: string, data: any) {}
}