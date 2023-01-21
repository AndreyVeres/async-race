import Loader from '../loader/Loader';
import { CarsProps, ICar } from '../types/types';
import Car from './Car';
import { Store } from '../store/Store';
import Popup from './Popup';
import { METHODS } from '../types/consts';

export default class Garage {
  private container: HTMLElement = document.createElement('div');
  private carList: HTMLElement;
  private title: HTMLElement = document.createElement('h1');
  private pageTitle: HTMLElement = document.createElement('div');
  protected loader = new Loader();
  private popup: Popup;

  constructor() {
    this.carList = document.createElement('div');
    this.popup = new Popup();
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
        Store.allCarsCount = res.headers.get('X-Total-Count');
        this.title.innerHTML = `Garage size : ${Store.allCarsCount}`;
        this.pageTitle.innerHTML = `page : ${Store.currentPage}`;
        return res.json();
      })
      .then((cars: ICar[]) => {
        Store.carsInGarage = [];
        cars.map((car: ICar) => {
          const newCar = new Car(car);
          Store.carsInGarage.push(newCar);
          this.carList.append(newCar.render());
          return car;
        });
      });
  }

  async createCar(e: Event, randomCar?: CarsProps) {
    let newCar;

    if (randomCar) {
      newCar = randomCar;
    } else {
      e.preventDefault();
      const target = e.target as HTMLFormElement;
      newCar = {
        name: target.carName.value,
        color: target.carColor.value,
      };
    }
    await this.loader.getData('garage', METHODS.POST, newCar);
  }

  async deleteCar(id: string) {
    await this.loader.deleteCar(id)
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

  static resetAllCars = async () => {
    Store.carsInGarage.map((car) => car.stopEngine());
  };

  race = async () => {
    const racers = Store.carsInGarage.map(async (car) => car.startEngine());
    const winnerInfo = await Promise.any(racers);
    const resetButton = document.querySelector('.reset-button') as HTMLButtonElement;
    resetButton.disabled = false;
    this.container.append(this.popup.render(winnerInfo));
    this.loader.createWinner(winnerInfo);
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
