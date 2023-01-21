import { IAnimations } from '../types/types';
import Car from '../components/Car';

export interface IStore {
  animations: IAnimations;
  pageSize: number;
  currentPage: number;
  allCarsCount: string | null;
  winnerCarsCount: string | null;
  carsInGarage: Car[];
  winnersCars: Car[];
  winnersPageSize: number;
  winnersCurrentPage: number;
  createInput: string;
  updateInput: string;
  sortType: 'wins' | 'time';
  order: 'ASC' | 'DESC';

}

export const Store: IStore = {
  createInput: '',
  updateInput: '',
  animations: {},
  pageSize: 7,
  currentPage: 1,
  allCarsCount: '',
  winnerCarsCount: '',
  carsInGarage: [],
  winnersCars: [],
  winnersPageSize: 10,
  winnersCurrentPage: 1,
  sortType: 'wins',
  order: 'DESC',
};
