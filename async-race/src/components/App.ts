import MainPage from './MainPage';
import Navigation from './Navigation';
import Winners from './Winners';

export default class App {
  private container: HTMLElement;
  private MainPage: MainPage;
  private winners: Winners;
  private navigation: Navigation;
  constructor() {
    this.container = document.body;
    this.navigation = new Navigation();
    this.winners = new Winners();
    this.MainPage = new MainPage();
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

  async start() {
    this.container.append(this.navigation.render());
    this.container.append(await this.MainPage.render());

    this.container.append(this.winners.render());
    App.changePage();
  }
}
