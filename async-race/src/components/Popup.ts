import { IWinnerInfo } from '../types/types';
import Component from '../utils/component';

export default class Popup {
  private container = document.createElement('div');

  render(winner: IWinnerInfo) {
    const popup = new Component(this.container, 'div', ['popup']);
    const message = new Component(popup.element, 'span', ['popup-message'], `Winner ${winner.name} with time: ${winner.time?.toFixed(1)}`);

    this.container.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('popup')) {
        popup.destroy();
      }
    });
    return this.container;
  }
}
