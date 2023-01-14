import View from './View';
import Loader from './Loader';
import { ICar, METHODS } from '../types/types';
import Car from './Car';

export default class Garage {
  private container: HTMLElement;
  private carList: HTMLElement;
  private title: HTMLElement;
  private pageTitle: HTMLElement;
  private allCarsCount: string | null;
  protected loader: Loader;
  private pageSize: number;
  private currentPage: number;
  private carsInGarage: any[]
  constructor() {
    this.loader = new Loader();
    this.container = document.createElement('div');
    this.carList = document.createElement('div');
    this.title = document.createElement('h1');
    this.pageTitle = document.createElement('div');
    this.currentPage = 1;
    this.allCarsCount = '';
    this.pageSize = 7;
    this.carsInGarage = []
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

        cars.map((car: ICar) => {
          const newCar = new Car(car).render();
          this.carList.append(newCar)
        });
      });
  }

  async createCar(e: Event) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const newCarProps: ICar = {
      name: target.carName.value,
      color: target.carColor.value,
    };

    await this.loader.getData('garage', METHODS.POST, newCarProps)
      .then((res: Response) => res.json())
      .then((car: ICar) => {
        const newCar = new Car(car).render()
        this.carList.append(newCar)
        this.updateGarage()
      });
     
  }

  deleteCar(id: string) {
    this.loader.getData(`garage/${id}`, METHODS.DELETE);
    document.getElementById(`${id}`)?.remove();
    this.updateGarage();
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

    const updatedCarProps: ICar = {
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

  render() {
    this.initGarage();
    this.container.append(this.title);
    this.container.append(this.pageTitle);
    this.container.append(this.carList);
    this.container.classList.add('garage');
    this.carList.classList.add('car__list');


    

    return this.container;
  }
}
