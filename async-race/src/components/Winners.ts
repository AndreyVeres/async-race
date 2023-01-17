import { IWinner, IWinnerCar } from '../types/types';

import Loader from './Loader';
import View from './View';

export default class Winners {
  container: HTMLElement;
  loader: Loader;

  constructor() {
    this.container = this.renderWinnersContainer();
    this.loader = new Loader();
  }

  initWinners = async () => {
    const winners = await this.loader.getWinners();
    winners.forEach(async (winner: IWinner, index: number) => {
      const winnerCar = await this.loader.getCar(winner.id);
      if (winnerCar) {
        const winnerCarData = {
          position: index,
          id: winner.id,
          name: winnerCar.name,
          color: winnerCar.color,
          wins: winner.wins,
          time: winner.time,
        };
        this.container.append(this.renderWinnerItem(winnerCarData));
      }
    });
  };

  async render() {
    await this.initWinners();

    const winsButton = this.container.querySelector('.wins');
    const timeButton = this.container.querySelector('.time');

    return this.container;
  }

  private renderWinnersContainer = () => {
    const winnersHTML = document.createElement('table');
    winnersHTML.classList.add('winners');
    winnersHTML.innerHTML = `
      <tbody>
        <tr>
          <th>Number</th>
          <th>Car</th>
          <th>Name</th>
          <th class="wins">Wins </th>
          <th class="time">Best time (seconds) </th>
        </tr>
      </tbody>
    `;
    return winnersHTML;
  };

  private renderWinnerItem = (winner: IWinnerCar) => {
    const {
      color,
      name,
      wins,
      time,
      position,
    } = winner;
    const winnerHTML = document.createElement('tr');
    winnerHTML.innerHTML = `
        <tr>
          <td>${position}</td>
            <td>
            ${View.renderCarImage(color)}
            </td>
            <td>${name}</td>
            <td>${wins}</td>
          <td>${time}</td>
        </tr>
    `;

    return winnerHTML;
  };
}
