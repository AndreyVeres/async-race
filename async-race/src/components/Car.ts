import {
  ICar, ENGINESTATE, IAnimations, IEngine
} from '../types/types';
import View from './View';
import flagImage from '../assets/racing-flag.svg';
import Loader from './Loader';
import animation from './animation';
import { Store } from './Store';

interface IControlsButton {
  button: HTMLButtonElement;
  state: boolean;
}

interface ICarControls {
  start: IControlsButton;
  stop: IControlsButton;
}

export default class Car {
  public car: ICar;
  private container: HTMLElement;
  private loader: Loader;
  static animations: IAnimations = {};
  private carControls: ICarControls;
  private driver: HTMLElement;
  private engineStatus = ENGINESTATE.STOPPED;
  constructor(car: ICar) {
    this.car = car;
    this.loader = new Loader();
    this.container = this.getCarHTML();
    this.driver = this.container.querySelector('.car') as HTMLElement;
    this.carControls = {
      start: {
        button: this.container.querySelector('.start-button') as HTMLButtonElement,
        state: false,
      },
      stop: {
        button: this.container.querySelector('.stop-button') as HTMLButtonElement,
        state: true,
      },
    };
  }

  render() {
    this.carControls.start.button.addEventListener('click', () => {
      this.startEngine();
    });
    this.carControls.stop.button.addEventListener('click', async () => {
      this.stopEngine();
    });
    this.switchButtonsState();
    return this.container;
  }

  startEngine = async () => {
    if (this.engineStatus === ENGINESTATE.STARTED) {
      console.log(`engine ${this.car.name} already started`);
      return;
    }

    this.engineStatus = ENGINESTATE.STARTED;
    const engine: IEngine = await this.loader.switchEngine(this.car.id, ENGINESTATE.STARTED);

    animation(this.driver, engine.velocity, engine.distance, this.car.id);
    this.switchButtonsState();
    try {
      await this.drive();
    } catch (error) {
      // cancelAnimationFrame(Car.animations[this.car.id]);
      cancelAnimationFrame(Store.animations[this.car.id]);
    }
  };

  drive = async () => {
    const engine = await this.loader.switchEngine(this.car.id, ENGINESTATE.DRIVE);
    // .then((res) => console.log(res));
  };

  stopEngine = async () => {
    await this.loader.switchEngine(this.car.id, ENGINESTATE.STOPPED)
      .then(() => {
        this.engineStatus = ENGINESTATE.STOPPED;
        this.switchButtonsState();
        cancelAnimationFrame(Store.animations[this.car.id]);
        // cancelAnimationFrame(Car.animations[this.car.id]);
        this.driver.style.transform = `translateX(${0}px)`;
      });
  };

  private getCarHTML() {
    const carHTML = document.createElement('div');
    carHTML.classList.add('car__box');
    carHTML.innerHTML = `
            <button data-id=${this.car.id} class="remove-button">remove</button>
            <button data-id=${this.car.id}  class="select">select</button>
            <span>${this.car.name}</span>
            <div class="garage__item">
              <button data-id=${this.car.id} id='start' class="start-button">a</button>
              <button data-id=${this.car.id} class="stop-button disabled-button">b</button>
                <div class="car car_${this.car.id}">
                ${View.renderCarImage(this.car.color)}
                </div>
              <div class="road road_${this.car.id}"></div>
              <img class="flag finish_${this.car.id}" src=${flagImage} width="50">
            </div>
          `;

    return carHTML;
  }

  switchButtonsState = () => {
    Object.values(this.carControls).forEach((carController) => {
      carController.button.disabled = carController.state;
      carController.state = !carController.state;
    });
  };
}
