import { CarsProps, METHODS } from '../types/types';

export default class Loader {
  private baseLink = 'http://127.0.0.1:3000';

  async getData(endpoint: string, _method?: string, body?: CarsProps) {
    const url = `${this.baseLink}/${endpoint}`;

    const request = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: _method,
      body: JSON.stringify(body),
    })
      .then(Loader.errorHandler);

    return request;
  }

  static errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) { console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`); }
      throw Error(res.statusText);
    }
    return res;
  }

  switchEngine = async (id: number, status: string) => {
    const engine = await this.getData(`engine?id=${id}&status=${status}`, METHODS.PATCH)
      .then((res) => res.json());
    return engine;
  };
}
