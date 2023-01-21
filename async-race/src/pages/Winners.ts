import { IWinner, IWinnerCar } from '../types/types';
import Loader from '../loader/Loader';
import { Store } from '../store/Store';
import renderCarImage from '../utils/renderCarImage';
import Component from '../utils/component';
import PageButtons from '../components/PageButtons';

export default class Winners {
  container: HTMLElement;
  loader: Loader;

  pageButtons: PageButtons;
  tableWrapper: Component;
  table: HTMLTableElement;

  constructor() {
    this.container = document.createElement('div');
    this.tableWrapper = new Component(this.container, 'div', ['winners-wrapper']);
    this.table = Winners.renderWinnersContainer();
    this.loader = new Loader();
    this.pageButtons = new PageButtons();
  }

  initWinners = async () => {
    this.table = Winners.renderWinnersContainer();
    const getWinners = await this.loader.getWinners();
    const { status, totalCount, winnersCars } = getWinners;
    Store.winnerCarsCount = totalCount;
    const winnersTitle = new Component(this.tableWrapper.element, 'h1', ['winners-title'], `Total Winners : ${Store.winnerCarsCount}`);
    const pageCount = new Component(this.tableWrapper.element, 'p', ['winners-page'], `page : ${Store.winnersCurrentPage}`);

    if (status === 200) {
      winnersCars.map(async (c: IWinner) => {
        const winnerCar = await this.loader.getCar(c.id);

        const winnerCarData: IWinnerCar = {

          id: c.id,
          wins: c.wins,
          time: c.time,
          ...winnerCar,
        };

        this.table.append(Winners.renderWinnerItem(winnerCarData));
      });
    }
    this.tableWrapper.element.append(this.table);

    const winsButton = this.container.querySelector('.wins');
    const timeButton = this.container.querySelector('.time');

    winsButton?.addEventListener('click', this.sortByWins);
    timeButton?.addEventListener('click', this.sortByTime);
  };

  sortByWins = async () => {
    Store.sortType = 'wins';
    Store.order = Store.order === 'DESC' ? 'ASC' : 'DESC';

    this.updateWinners();
  };

  sortByTime = () => {
    Store.sortType = 'time';
    Store.order = Store.order === 'DESC' ? 'ASC' : 'DESC';

    this.updateWinners();
  };

  updateWinners = () => {
    this.tableWrapper.element.innerHTML = '';
    this.initWinners();
  };

  prevPage() {
    if (Store.winnersCurrentPage - 1 === 0) return;
    Store.winnersCurrentPage -= 1;
    this.updateWinners();
  }

  nextPage() {
    if (Store.winnerCarsCount) {
      if (Store.winnersCurrentPage + 1
        > Math.ceil(parseInt(Store.winnerCarsCount, 10) / Store.winnersPageSize)) return;
    }
    Store.winnersCurrentPage += 1;
    this.updateWinners();
  }

  async render() {
    await this.initWinners();
    this.container.prepend(this.pageButtons.render());

    const prevButton = this.container.querySelector('.prev');
    const nextButton = this.container.querySelector('.next');

    prevButton?.addEventListener('click', () => {
      this.prevPage();
    });
    nextButton?.addEventListener('click', () => {
      this.nextPage();
    });

    return this.container;
  }

  static renderWinnersContainer = () => {
    const winnersHTML = document.createElement('table');
    winnersHTML.classList.add('winners-table');
    winnersHTML.innerHTML = `
        <tr>
          <th>id</th>
          <th>Car</th>
          <th>Name</th>
          <th class="wins">Wins </th>
          <th class="time">Best time (seconds) </th>\
        </tr>
    `;
    return winnersHTML;
  };

  static renderWinnerItem = (winner: IWinnerCar) => {
    const {
      color,
      name,
      wins,
      time,
      id,
    } = winner;
    const winnerHTML = document.createElement('tr');
    winnerHTML.innerHTML = `
        <tr>
          <td>${id}</td>
            <td>
            ${renderCarImage(color)}
            </td>
            <td>${name}</td>
            <td>${wins}</td>
          <td>${time}</td>
        </tr>
    `;

    return winnerHTML;
  };
}
