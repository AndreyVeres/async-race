import { CarsProps, IWinnersResponse, METHODS } from '../types/types';
import { Store } from './Store';

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

  getWinners = async () => {
    const request = await this.getData(`winners?_page=${Store.winnersCurrentPage}&_limit=${Store.winnersPageSize}&_sort=${Store.sortType}&_order=${Store.order}`)
    const winners = await request.json();

    const response: IWinnersResponse = {
      status: request.status,
      totalCount: request.headers.get('X-Total-Count'),
      winnersCars: winners,
    }

    return response;
  }

  getCar = async (id: number) => {
    const car = await this.getData(`garage/${id}`)
      .then((res) => res.json());

    return car;
  };


  getWinner = async (id: number) => {
    const request = await this.getData(`winners/${id}`);
    const winner = await request.json()

    return {
      status : request.status,
      winner
    }

  }
}
