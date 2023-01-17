/* eslint-disable import/prefer-default-export */
import { IAnimations } from '../types/types';

export interface IStore {
  animations: IAnimations;
  pageSize: number;
  currentPage: number;
  allCarsCount: string | null;
}

export const Store: IStore = {
  animations: {},
  pageSize: 7,
  currentPage: 1,
  allCarsCount: '',
};

// export default {};
