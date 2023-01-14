import { ICar, METHODS } from "../types/types"
import View from "./View"
import flagImage from '../assets/racing-flag.svg'
import Loader from "./Loader"

export default class Car {
    private car: ICar;
    private container: HTMLElement;
    private loader: Loader;

    constructor(car: ICar) {
        this.car = car
        this.loader = new Loader()
        this.container = this.getCarHTML()

    }

    render() {
        const startEngineButton = this.container.querySelector('.start-button');
        const stopEngineButton = this.container.querySelector('.stop-button');

        startEngineButton?.addEventListener('click', this.startEngine);
        stopEngineButton?.addEventListener('click', this.stopEngine);

    //    console.log(this.container)
        return this.container;
    }


    private startEngine = () => {
        console.log('start')
    }

    private stopEngine() {
        console.log('stop')
    }


    private getCarHTML() {
        const carHTML = document.createElement('div');
        carHTML.classList.add('car__box')
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