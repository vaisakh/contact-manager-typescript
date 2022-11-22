export class BaseService implements ServiceInterface {
  readonly httpClient: any;
  readonly baseURL: string;

  constructor(client: any, baseURL: string) {
    this.httpClient = client;
    this.baseURL = baseURL;
  }

  get(url: string): any {}
  post(url: string, data: any): any {}
  put(url: string, data: any): any {}
  delete(url: string): any {}
}
