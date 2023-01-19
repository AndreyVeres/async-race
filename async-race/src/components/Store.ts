/* eslint-disable import/prefer-default-export */
import { IAnimations } from '../types/types';
import Car from './Car';

export interface IStore {
  animations: IAnimations;
  pageSize: number;
  currentPage: number;
  allCarsCount: string | null;
  carsInGarage:Car[];
  winnersCars:Car[];
  winnersPageSize:number;
  winnersCurrentPage:number;
  sortType:string
  order:string
}

export const Store: IStore = {
  animations: {},
  pageSize: 7,
  currentPage: 1,
  allCarsCount: '',
  carsInGarage: [],
  winnersCars:[],
  winnersPageSize: 10 ,
  winnersCurrentPage: 1,
  sortType: 'id',
  order: 'ASC'
  
};

// export default {};
