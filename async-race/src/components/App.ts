import Navigation from './Navigation';
import Router from './Router';

export default class App {
  private body: HTMLElement = document.body;
  private rootElement: HTMLElement = document.createElement('div');

  private navigation: Navigation;
  private router: Router;

  constructor() {
    this.rootElement.classList.add('root');
    this.navigation = new Navigation();
    this.router = new Router(this.rootElement);
  }

  async start() {
    this.body.append(this.navigation.render());
    this.body.append(this.rootElement);
    this.router.initRouter();
  }
}
