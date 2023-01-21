import {
  ICar,
  IWinnerInfo
} from '../types/types';
import flagImage from '../assets/racing-flag.svg';
import Loader from '../loader/Loader';
import animation from '../utils/animation';
import { Store } from '../store/Store';
import renderCarImage from '../utils/renderCarImage';
import trash from '../assets/trash.svg';
import update from '../assets/update.svg';
import { ENGINESTATE } from '../types/consts';

export default class Car {
  public car: ICar;
  private container: HTMLElement;
  private loader: Loader;
  private driver: HTMLElement;
  private controls: HTMLButtonElement[];
  private engineStatus: boolean;

  constructor(car: ICar) {
    this.car = car;
    this.loader = new Loader();
    this.container = this.getCarHTML();
    this.driver = this.container.querySelector('.car') as HTMLElement;
    this.controls = [
      this.container.querySelector('.start-button'),
      this.container.querySelector('.stop-button'),
    ] as HTMLButtonElement[];
    this.engineStatus = false;
  }

  render() {
    this.controls[0].addEventListener('click', this.startEngine);
    this.controls[1].addEventListener('click', this.stopEngine);
    this.switchButtonsState(false);

    return this.container;
  }

  startEngine = async (): Promise<IWinnerInfo> => {
    const engine = await this.loader.switchEngine(this.car.id, ENGINESTATE.STARTED);
    const { velocity, distance } = engine;

    animation(this.driver, velocity, distance, this.car.id);
    this.switchButtonsState(true);

    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
      try {
        await this.drive();

        const winnerInfo: IWinnerInfo = {
          name: this.car.name,
          id: this.car.id,
          time: Store.animations[this.car.id].time / 1000,
        };
        resolve(winnerInfo);
      } catch {
        cancelAnimationFrame(Store.animations[this.car.id].frame);
      }
    });
  };

  drive = async () => {
    const engine = await this.loader.switchEngine(this.car.id, ENGINESTATE.DRIVE);
    return engine;
  };

  stopEngine = async () => {
    await this.loader.switchEngine(this.car.id, ENGINESTATE.STOPPED)
      .then(() => {
        this.switchButtonsState(false);

        if (Store.animations[this.car.id]) {
          cancelAnimationFrame(Store.animations[this.car.id].frame);
        }

        this.driver.style.transform = `translateX(${0}px)`;
      });
  };

  private getCarHTML() {
    const carHTML = document.createElement('div');
    carHTML.classList.add('car__box');
    carHTML.innerHTML = `
            <div class="car__box-buttons">
              <img class="remove-button button-img" data-id=${this.car.id} src="${trash}">
              <img class="select button-img" data-id=${this.car.id} src="${update}">
              <span style="color:${this.car.color}">${this.car.name}</span>
            </div>
            <div class="garage__item">
              <button data-id=${this.car.id} class="start-button green">A</button>
              <button data-id=${this.car.id} class="stop-button red">B</button>
                <div class="car car_${this.car.id}">
                ${renderCarImage(this.car.color)}
                </div>
              <div class="road road_${this.car.id}"></div>
              <img class="flag finish_${this.car.id}" src=${flagImage} width="50">
            </div>
          `;
    return carHTML;
  }

  switchButtonsState = (state: boolean) => {
    this.engineStatus = state;
    this.controls[0].disabled = this.engineStatus;
    this.controls[1].disabled = !this.engineStatus;
  };
}
