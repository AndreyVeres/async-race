import ControlPanel from './ControlPanel';
import Garage from './Garage';
import PageButtons from './PageButtons';

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
    this.container.append(await this.garage.render());
    this.container.append(this.pageButtons.render());
    this.container.classList.add('main-page');

    const formCreate = this.container.querySelector('.create');
    const formUpdate = this.container.querySelector('.update');
    const raceButton = this.container.querySelector('.race-button');
    const resetButton = this.container.querySelector('.reset-button');

    const garageWrapper = this.container.querySelector('.garage');
    const prevButtonPage = this.container.querySelector('.prev');
    const nextButtonPage = this.container.querySelector('.next');

    formUpdate?.addEventListener('submit', (e) => {
      this.garage.updateCar(e);
    });

    formCreate?.addEventListener('submit', (e) => {
      this.garage.createCar(e);
    });

    raceButton?.addEventListener('click', this.garage.race);
    resetButton?.addEventListener('click', this.garage.resetAllCars);

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
