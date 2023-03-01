import {
  ICar,
  IWinnerInfo
} from '../types/types';
import { loader } from '../loader/Loader';
import animation from '../utils/animation';
import { Store } from '../store/Store';
import { ENGINESTATE } from '../types/consts';
import Component from '../utils/component';

import Template from '../templates/carTemplate.html';

export default class Car {
  private container: HTMLElement;
  private driver: HTMLElement;
  private controls: HTMLButtonElement[];
  private engineStatus: boolean;
  private id: number;
  private name: string;
  private color: string;

  constructor({ id, name, color }: ICar) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.container = this.getCarHTML();
    this.driver = this.container.querySelector('.car') as HTMLElement;
    this.controls = [
      this.container.querySelector('.start-button'),
      this.container.querySelector('.stop-button'),
    ] as HTMLButtonElement[];
    this.engineStatus = false;
  }

  render() {
    // this.controls[0].addEventListener('click', this.startEngine);
    // this.controls[1].addEventListener('click', this.stopEngine);
    // this.switchButtonsState(false);

    return this.container;
  }

  startEngine = async (): Promise<IWinnerInfo> => {
    const engine = await loader.switchEngine(this.id, ENGINESTATE.STARTED);
    const { velocity, distance } = engine;

    animation(this.driver, velocity, distance, this.id);
    this.switchButtonsState(true);

    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
      try {
        await this.drive();

        const winnerInfo: IWinnerInfo = {
          name: this.name,
          id: this.id,
          time: Store.animations[this.id].time / 1000,
        };
        resolve(winnerInfo);
      } catch {
        cancelAnimationFrame(Store.animations[this.id].frame);
      }
    });
  };

  drive = async () => {
    const engine = await loader.switchEngine(this.id, ENGINESTATE.DRIVE);
    return engine;
  };

  stopEngine = async () => {
    await loader.switchEngine(this.id, ENGINESTATE.STOPPED)
      .then(() => {
        this.switchButtonsState(false);

        if (Store.animations[this.id]) {
          cancelAnimationFrame(Store.animations[this.id].frame);
        }

        this.driver.style.transform = `translateX(${0}px)`;
      });
  };

  private getCarHTML() {
    const carHTML = new Component(null, 'div', ['car-box'], Template, {
      name: this.name,
      id: `${this.id}`,
      color: this.color,
    })
      .render();
    return carHTML;
  }

  switchButtonsState = (state: boolean) => {
    this.engineStatus = state;
    this.controls[0].disabled = this.engineStatus;
    this.controls[1].disabled = !this.engineStatus;
  };
}
