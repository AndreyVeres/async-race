import {
  ICar, METHODS, ENGINESTATE, IEngine
} from '../types/types';
import View from './View';
import flagImage from '../assets/racing-flag.svg';
import Loader from './Loader';

export default class Car {
  private car: ICar;
  private container: HTMLElement;
  private carImage: HTMLElement | null;
  private loader: Loader;
  private velocity: number | null;
  private distance: number | null;
  private engineStatus: string;
  constructor(car: ICar) {
    this.car = car;
    this.engineStatus = ENGINESTATE.STOPPED;
    this.velocity = null;
    this.distance = null;
    this.loader = new Loader();
    this.container = this.getCarHTML();
    this.carImage = this.container.querySelector('.car');
  }

  render() {
    const startEngineButton: HTMLButtonElement | null = this.container.querySelector('.start-button');
    const stopEngineButton: HTMLButtonElement | null = this.container.querySelector('.stop-button');

    startEngineButton?.addEventListener('click', () => {
      // this.startEngine();

      this.startEngine();
    });
    stopEngineButton?.addEventListener('click', () => {
      this.stopEngine();
    });

    return this.container;
  }

  drive = async () => {
    await this.loader.getData(`engine?id=${this.car.id}&status=drive`, METHODS.PATCH)
      .then((res) => res.json())
      .then((wrym) => console.log(wrym));
  };

  stopEngine = async () => {
    await this.loader.getData(`engine?id=${this.car.id}&status=${ENGINESTATE.STOPPED}`, METHODS.PATCH)
      .then((res: Response) => res.json())
      .then(() => {
        this.velocity = null;
        this.distance = null;
        this.engineStatus = ENGINESTATE.STOPPED;
      });
  };

  startEngine = async () => {
    if (this.engineStatus === ENGINESTATE.STARTED) {
      console.log(`engine car ${this.car.name} already started`);
      return;
    }
    await this.loader.getData(`engine?id=${this.car.id}&status=${ENGINESTATE.STARTED}`, METHODS.PATCH)
      .then((res: Response) => res.json())
      .then((engine: IEngine) => {
        this.velocity = engine.velocity;
        this.distance = engine.distance;
        this.engineStatus = ENGINESTATE.STARTED;
      })
      .then(() => {
        driveCar(this.carImage, this.velocity);
      })
      .then(() => this.drive());
  };

  private getCarHTML() {
    const carHTML = document.createElement('div');
    carHTML.classList.add('car__box');
    carHTML.innerHTML = `
            <button data-id=${this.car.id} class="remove-button">remove</button>
            <button data-id=${this.car.id}  class="select">select</button>
            <span>${this.car.name}</span>
            <div class="road">
              <button data-id=${this.car.id} id='start' class="start-button">a</button>
              <button data-id=${this.car.id} class="stop-button disabled-button">b</button>
              <div class="car" id=${this.car.id}-img>
               ${View.renderCarImage(this.car.color)}
              </div>
              <img class="flag" src=${flagImage} width="50">
          `;
    return carHTML;
  }
}

function driveCar(element: HTMLElement | null, velocity: number | null) {
  const start = new Date().getTime();
  const el = element!;

  function step() {
    const currentTime = new Date().getTime();
    const progress = currentTime - start;

    if (progress < 2000) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
