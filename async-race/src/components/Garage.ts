import Loader from './Loader';
import { CarsProps, ICar, METHODS } from '../types/types';
import Car from './Car';

export default class Garage {
  private container: HTMLElement = document.createElement('div');
  public carList: HTMLElement;
  private title: HTMLElement = document.createElement('h1');
  private pageTitle: HTMLElement = document.createElement('div');
  private allCarsCount: string | null = '';
  protected loader = new Loader();
  private pageSize = 7;
  private currentPage = 1;
  private carsInGarage: Car[] = [];
  constructor() {
    //   // this.loader = new Loader();
    //   // this.container;
    this.carList = document.createElement('div');
    //   // this.title;
    //   // this.pageTitle;
    //   // this.currentPage = 1;
    //   // this.allCarsCount = '';
    //   // this.pageSize = 7;
    //   // this.carsInGarage = [];
  }

  prevPage() {
    if (this.currentPage - 1 === 0) return;
    this.currentPage -= 1;
    this.updateGarage();
  }

  nextPage() {
    if (this.allCarsCount) {
      if (this.currentPage + 1
        > Math.ceil(parseInt(this.allCarsCount, 10) / this.pageSize)) return;
    }
    this.currentPage += 1;
    this.updateGarage();
  }

  async initGarage() {
    await this.loader.getData(`garage?_page=${this.currentPage}&_limit=${this.pageSize}`)
      .then((res: Response) => {
        this.allCarsCount = res.headers.get('X-Total-Count');
        this.title.innerHTML = `Garage size : ${this.allCarsCount}`;
        this.pageTitle.innerHTML = `page : ${this.currentPage}`;
        return res.json();
      })
      .then((cars: ICar[]) => {
        this.carsInGarage = [];
        cars.map((car: ICar) => {
          const newCar = new Car(car);
          this.carsInGarage.push(newCar);
          this.carList.append(newCar.render());
        });
      });
  }

  async createCar(e: Event) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const newCarProps: CarsProps = {
      name: target.carName.value,
      color: target.carColor.value,
    };

    await this.loader.getData('garage', METHODS.POST, newCarProps)
      .then((res: Response) => res.json())
      .then(() => {
        this.updateGarage();
      });
  }

  async deleteCar(id: string) {
    await this.loader.getData(`garage/${id}`, METHODS.DELETE)
      .then((res) => res.json())
      .then(() => {
        this.updateGarage();
      });
  }

  async selectCarToUpdate(id: string) {
    const res = await this.loader.getData(`garage/${id}`);
    const oldCarInfo: ICar = await res.json();
    const updateForm: HTMLFormElement | null = document.querySelector('.update');

    if (updateForm) {
      updateForm.classList.remove('disabled');
      updateForm.carColor.value = oldCarInfo.color;
      updateForm.carName.value = oldCarInfo.name;
      updateForm.carId.value = oldCarInfo.id;
    }
  }

  async updateCar(e: Event) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const id = target.carId.value;
    const updatedCarProps: CarsProps = {
      name: target.carName.value,
      color: target.carColor.value,

    };

    await this.loader.getData(`garage/${id}`, METHODS.PUT, updatedCarProps);
    this.updateGarage();
    const updateForm: HTMLFormElement | null = document.querySelector('.update');
    if (updateForm) updateForm.classList.add('disabled');
  }

  updateGarage() {
    this.carList.innerHTML = '';

    this.initGarage();
  }

  resetAllCars = () => {
    this.carsInGarage.map((car) => {
      car.stopEngine();
    });
  };

  raceDEMO = () => {
    this.carsInGarage.forEach((car) => {
      car.startEngine();
    });
  };

  // static remove = () => {
  //   this.container.remove();
  // };

  async render() {
    await this.initGarage();
    this.container.append(this.title);
    this.container.append(this.pageTitle);
    this.container.append(this.carList);
    this.container.classList.add('garage');
    this.carList.classList.add('car__list');

    // const raceButton = document.querySelector('.race-button');
    // const resetButton = document.querySelector('.reset-button');

    // raceButton?.addEventListener('click', this.raceDEMO);
    // resetButton?.addEventListener('click', this.resetAllCars);
    return this.container;
  }
}
