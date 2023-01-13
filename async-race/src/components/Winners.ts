import View from './View';

export default class Winners {
  container: HTMLElement;
  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('winners');
    this.container.classList.add('hidden');
  }

  render() {
    this.container.append(View.renderWinners());
    return this.container;
  }
}
