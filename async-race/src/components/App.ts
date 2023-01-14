import Car from './Car';
import Garage from './Garage';
import View from './View';
import Winners from './Winners';

export default class App {
  private container: HTMLElement;
  private winners: Winners;
  private garage: Garage;
  constructor() {
    this.container = document.body;
    this.garage = new Garage();
    this.winners = new Winners();

  }

  static changePage() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      const winnersPage = document.querySelector('.winners');
      const garagePage = document.querySelector('.garage');
      if (hash === 'garage') {
        (winnersPage as HTMLElement).classList.add('hidden');
        (garagePage as HTMLElement).classList.remove('hidden');
      } else if (hash === 'winners') {
        (garagePage as HTMLElement).classList.add('hidden');
        (winnersPage as HTMLElement).classList.remove('hidden');
      }
    });
  }

  start() {
    this.container.append(View.renderNavigation());
    this.container.append(View.renderControls());
    this.container.append(this.garage.render());
    this.container.append(this.winners.render());
    this.container.append(View.renderPageButtons());




    App.changePage();

    const formCreate = document.querySelector('.create');
    const formUpdate = document.querySelector('.update');

    const garageWrapper = document.querySelector('.garage');
    const prevButtonPage = document.querySelector('.prev');
    const nextButtonPage = document.querySelector('.next');

    formUpdate?.addEventListener('submit', (e) => {
      this.garage.updateCar(e);
    });

    formCreate?.addEventListener('submit', (e) => {
      this.garage.createCar(e);
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
  }
}

// async function startEndine(id: number) {
//   const request = await fetch('http://127.0.0.1:3000/garage/page=2&_limit=7', {

//     method: 'GET',
//   });

//   const response = await request.json();
//   console.log(response);
//   return response;
// }

// const animateCar = (element: HTMLElement | null) => {
//   const car = element;
//   if (car) {
//     car.style.display = 'none';
//   }
// };
