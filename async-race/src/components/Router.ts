import { IRoute } from '../types/types';
import MainPage from './MainPage';
import Winners from './Winners';

export default class Router {
  private readonly routes: Array<IRoute>;
  private defaultRoute: IRoute;

  constructor(private rootElement: HTMLElement) {
    this.routes = [
      {
        name: '/',
        component: async () => {
          this.rootElement.append(await new MainPage().render());
        },
      },
      {
        name: '/winners',
        component: async () => {
          this.rootElement.append(await new Winners().render());
        },
      },
    ];

    this.defaultRoute = {
      name: 'Default router',
      component: () => {
        this.rootElement.innerHTML = '404 PAGE';
      },
    };
  }

  updateRouter(): void {
    this.rootElement.innerHTML = '';
    const currentRouteName = window.location.hash.slice(1);
    const currentRoute = this.routes.find(
      (page) => page.name === currentRouteName
    );

    (currentRoute || this.defaultRoute).component();
  }

  initRouter(): void {
    if (window.location.hash === '') {
      window.location.hash = '#/';
    }

    window.onpopstate = () => this.updateRouter();
    this.updateRouter();
  }
}
