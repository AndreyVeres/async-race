export interface ICar {
  name: string;
  id?: number;
  color: string;
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
  STOPPED = 'stopped'
}
