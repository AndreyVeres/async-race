import Loader from './Loader';
import { CarsProps, ICar, METHODS } from '../types/types';
import Car from './Car';
import { Store } from './Store';

export default class Garage {
  private container: HTMLElement = document.createElement('div');
  private carList: HTMLElement;
  private title: HTMLElement = document.createElement('h1');
  private pageTitle: HTMLElement = document.createElement('div');
  private allCarsCount: string | null = '';
  protected loader = new Loader();
  // private carsInGarage: Car[] = [];
  constructor() {
    this.carList = document.createElement('div');
  }

  prevPage() {
    if (Store.currentPage - 1 === 0) return;
    Store.currentPage -= 1;
    this.updateGarage();
  }

  nextPage() {
    if (Store.allCarsCount) {
      if (Store.currentPage + 1
        > Math.ceil(parseInt(Store.allCarsCount, 10) / Store.pageSize)) return;
    }
    Store.currentPage += 1;
    this.updateGarage();
  }

  async initGarage() {
    await this.loader.getData(`garage?_page=${Store.currentPage}&_limit=${Store.pageSize}`)
      .then((res: Response) => {
        this.allCarsCount = res.headers.get('X-Total-Count');
        this.title.innerHTML = `Garage size : ${this.allCarsCount}`;
        this.pageTitle.innerHTML = `page : ${Store.currentPage}`;
        return res.json();
      })
      .then((cars: ICar[]) => {
        Store.carsInGarage = [];
        cars.map((car: ICar) => {
          const newCar = new Car(car);
          Store.carsInGarage.push(newCar);
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
    Store.carsInGarage.map((car) => {
      car.stopEngine();
    });
  };

  race = async () => {
    const promises = Store.carsInGarage.map(async (car) => await car.startEngine());
    const winnerId = await Promise.any(promises);

    // try {
    //   const getWinner = await this.loader.getWinner(winnerId)
    //   const { status, winner } = getWinner
      
    // } catch (e) {

    // }

  };

  async render() {
    await this.initGarage();
    this.container.append(this.title);
    this.container.append(this.pageTitle);
    this.container.append(this.carList);
    this.container.classList.add('garage');
    this.carList.classList.add('car__list');

    return this.container;
  }
}
