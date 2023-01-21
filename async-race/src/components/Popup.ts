import { IWinnerInfo } from '../types/types';
import Component from '../utils/component';

export default class Popup {
  private container: HTMLDivElement;
  private popupState: boolean;
  private winnerName: null | string;
  private winnerTime: null | number;
  constructor() {
    this.container = document.createElement('div');
    this.popupState = false;
    this.winnerName = null;
    this.winnerTime = null;
  }

  shopPopup = (winner: IWinnerInfo) => {
    this.popupState = true;
    const { name, time } = winner;
    this.winnerName = name;
    this.winnerTime = time;
    this.render();
  };

  render() {
    const popup = new Component(this.container, 'div', [`${this.popupState === false ? 'hidden' : 'popup'}`]);
    const message = new Component(popup.element, 'span', ['popup-message'], `Winner ${this.winnerName} with time: ${this.winnerTime?.toFixed(1)}`);

    this.container.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('popup')) {
        this.popupState = false;
        popup.destroy();
      }
    });

    return this.container;
  }
}
