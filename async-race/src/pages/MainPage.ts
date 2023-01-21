import ControlPanel from '../components/ControlPanel';
import Garage from '../components/Garage';
import PageButtons from '../components/PageButtons';

import { Store } from '../store/Store';
import generateRandomCars from '../utils/carGenerator';

export default class MainPage {
  private container: HTMLElement = document.createElement('div');
  private garage: Garage;
  private controlPanel: ControlPanel;
  private pageButtons: PageButtons;

  constructor() {
    this.garage = new Garage();
    this.controlPanel = new ControlPanel();
    this.pageButtons = new PageButtons();
  }

  async render() {
    this.container.append(this.controlPanel.render());
    this.container.append(this.pageButtons.render());
    this.container.append(await this.garage.render());

    this.container.classList.add('main-page');

    const formCreate = this.container.querySelector('.create');
    const formUpdate = this.container.querySelector('.update');

    const formCreateInput = formCreate?.querySelector('.create-text') as HTMLInputElement;
    const formUpdateInput = formUpdate?.querySelector('.update-text') as HTMLInputElement;

    const raceButton = this.container.querySelector('.race-button') as HTMLButtonElement;
    const resetButton = this.container.querySelector('.reset-button') as HTMLButtonElement;
    const randomCarsButton = this.container.querySelector('.generate-button') as HTMLButtonElement;

    const garageWrapper = this.container.querySelector('.garage');
    const prevButtonPage = this.container.querySelector('.prev') as HTMLButtonElement;
    const nextButtonPage = this.container.querySelector('.next') as HTMLButtonElement;

    randomCarsButton?.addEventListener('click', async (e) => {
      const randomCars = generateRandomCars();
      const promises = randomCars.map((randomCar) => this.garage.createCar(e, randomCar));

      await Promise.all(promises)
        .then(() => this.garage.updateGarage());
    });

    formCreateInput?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      Store.createInput = target.value;
    });

    formUpdateInput.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      Store.updateInput = target.value;
    });

    formUpdate?.addEventListener('submit', (e) => {
      this.garage.updateCar(e);
    });

    formCreate?.addEventListener('submit', (e) => {
      raceButton.disabled = false;
      this.garage.createCar(e);
      this.garage.updateGarage();
    });

    raceButton?.addEventListener('click', async () => {
      this.garage.race();

      raceButton.disabled = true;
      resetButton.disabled = true;
      prevButtonPage.disabled = true;
      nextButtonPage.disabled = true;
      randomCarsButton.disabled = true;
    });

    resetButton?.addEventListener('click', () => {
      Garage.resetAllCars();
      raceButton.disabled = false;
      prevButtonPage.disabled = false;
      nextButtonPage.disabled = false;
      randomCarsButton.disabled = false;
    });

    prevButtonPage?.addEventListener('click', () => {
      this.garage.prevPage();
    });

    nextButtonPage?.addEventListener('click', () => {
      this.garage.nextPage();
    });

    garageWrapper?.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;

      const { id } = target.dataset;
      if (target.classList.contains('select') && id) {
        this.garage.selectCarToUpdate(id);
      }

      if (target.classList.contains('remove-button') && id) {
        this.garage.deleteCar(id);
      }
    });

    return this.container;
  }
}
