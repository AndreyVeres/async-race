export interface IRoute {
  name: string;
  component: () => void;
}

export interface CarsProps {
  name: string;
  color: string;
}

export interface IWinnersResponse {
  status: number
  totalCount:string | null,
  winnersCars :IWinner[]
}

export interface ICar extends CarsProps {
  id: number;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnerCar extends ICar, IWinner {
  position: number;
}

export interface IEngine {
  velocity: number;
  distance: number;
}

export enum METHODS {
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

export enum ENGINESTATE {
  STARTED = 'started',
  STOPPED = 'stopped',
  DRIVE = 'drive'
}

export interface IAnimations {
  [key: number]: number;
}
