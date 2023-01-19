import { IWinner, IWinnerCar, IWinnersResponse } from '../types/types';
import { Component } from '../utils/component';
import Car from './Car';

import Loader from './Loader';
import { Store } from './Store';
import View from './View';



export default class Winners {
  container: HTMLElement;
  loader: Loader;
  table: HTMLTableElement;


  constructor() {
    this.container = document.createElement('div');
    this.loader = new Loader();
    this.table = this.renderWinnersContainer()

  }


  initWinners = async () => {
    const getWinners = await this.loader.getWinners();
    const { status, totalCount, winnersCars } = getWinners;

    if (totalCount) {
      new Component(this.container, 'h1', ['winners-title'], `Total Winners ( ${totalCount} )`);
    }

    if (status === 200) {
      const table = new Component(this.container, 'table', ['winners-table'])


      winnersCars.map(async (c: IWinner, index: number) => {
        const winnerCar = await this.loader.getCar(c.id);

        const winnerCarData: IWinnerCar = {
          position: index,
          id: c.id,
          wins: c.wins,
          time: c.time,
          ...winnerCar
        }
        const newCar = new Car(winnerCarData)
        Store.winnersCars.push(newCar)
        this.table.append(this.renderWinnerItem(winnerCarData))
      })

    }

  }

  async render() {
    await this.initWinners();

    this.container.append(this.table)


    const winsButton = this.container.querySelector('.wins');
    const timeButton = this.container.querySelector('.time');

    return this.container;
  }

  private renderWinnersContainer = () => {
    const winnersHTML = document.createElement('table');
    winnersHTML.classList.add('winners');
    winnersHTML.innerHTML = `
     
        <tr>
          <th>Number</th>
          <th>Car</th>
          <th>Name</th>
          <th class="wins">Wins </th>
          <th class="time">Best time (seconds) </th>
        </tr>
    
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
