export interface IRoute {
  name: string;
  component: () => void;
}

export interface CarsProps {
  name: string;
  color: string;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnersResponse {
  status: number;
  totalCount: string | null;
  winnersCars: IWinner[];
}

export interface IEngine {
  velocity: number;
  distance: number;
}

export interface ICar extends CarsProps {
  id: number;
}

export interface IWinnerCar extends ICar, IWinner {
  position: number;
}

export interface IAnimationState {

  time: number;
  frame: number;
}

export interface IAnimations {
  [key: number]: IAnimationState;
}

export interface IWinnerInfo {
  time: number;
  id: number;
  name: string;

}
