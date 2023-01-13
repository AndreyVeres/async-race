export interface ICar {
  name: string;
  id?: number;
  color: string;
}

export enum METHODS {
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}
