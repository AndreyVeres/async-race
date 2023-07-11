import {
  CarsProps,
  IEngine,
  IWinner,
  IWinnerInfo,
  IWinnersResponse
} from '../types/types';
import { Store } from '../store/Store';
import { METHODS } from '../types/consts';

class Loader {
  private baseLink = 'https://async-race-backend-t7bq.onrender.com';

  async getData(endpoint: string, _method?: string, body?: CarsProps | IWinner) {
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
      if (res.status === 429) {
        console.log('car already started');
      }
      if (res.status === 401 || res.status === 404) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      }
    }
    return res;
  }

  switchEngine = async (id: number, status: string): Promise<IEngine> => {
    const engine = await this.getData(`engine?id=${id}&status=${status}`, METHODS.PATCH)
      .then((res) => res.json());
    return engine;
  };

  getWinners = async (): Promise<IWinnersResponse> => {
    const request = await this.getData(`winners?_page=${Store.winnersCurrentPage}&_limit=${Store.winnersPageSize}&_sort=${Store.sortType}&_order=${Store.order}`);

    const winners: IWinner[] = await request.json();
    const response: IWinnersResponse = {
      status: request.status,
      totalCount: request.headers.get('X-Total-Count'),
      winnersCars: winners,
    };

    return response;
  };

  getCar = async (id: number) => {
    const car = await this.getData(`garage/${id}`)
      .then((res) => res.json());

    return car;
  };

  getWinner = async (id: number | string) => {
    const request = await this.getData(`winners/${id}`);
    const winner: IWinner = await request.json();

    return {
      status: request.status,
      winner,
    };
  };

  deleteCar = async (id: number | string): Promise<void> => {
    const request = await this.getWinner(id);
    const { status } = request;

    if (status === 200) {
      await this.getData(`winners/${id}`, METHODS.DELETE);
    }
    await this.getData(`garage/${id}`, METHODS.DELETE);
  };

  createWinner = async (winnerInfo: IWinnerInfo) => {
    const { time, id } = winnerInfo;

    const checkWinner = await this.getWinner(id);
    const { status, winner } = checkWinner;

    if (status === 200) {
      const updatedWinner = {
        wins: winner.wins += 1,
        time: time < winner.time ? +time.toFixed(1) : winner.time,
        id: winner.id,
      };

      this.getData(`winners/${id}`, METHODS.PUT, updatedWinner);
    } else {
      const newWinner = {
        wins: 1,
        time: +time.toFixed(1),
        id,
      };
      this.getData('winners', METHODS.POST, newWinner);
    }
  };
}

export const loader = new Loader();
