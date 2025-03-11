import './style.css';
// import State from './state/state';
import Router from "./router/router"
import HeaderView from "./header/header";
import MainView from "./main/main";

export default class App {
  header: HeaderView | null;
  main: MainView | null;
  footer: HTMLElement | null;
  router: Router;
  hash: string;

  constructor() {
    this.hash = '/';
    this.header = null;
    this.main = null;
    this.footer = null;

    this.router = new Router((hash: string) => this.onHashChange(hash));

    // const state = new State();

    this.createView();
  }

  createView() {
    this.header = new HeaderView();
    this.main = new MainView(this.hash);
    // const footer = new FooterView();

    document.body.append(this.header.getView(), this.main.getView());
  }

  clearView() {
    document.body.replaceChildren();
  }

  onButtonClick(path: string) {
    console.log('Button clicked with path:', path);
    this.router.handleRouting();
  }

  onHashChange(hash: string) {
    this.hash = hash;
    console.log('Hash changed to:', hash);
    this.clearView();
    switch (hash) {
      case '/':
        // history.pushState(null, '', '#/');
        window.location.href = '#/';
        break;

      case '/next':
        window.location.href = '#/next';
        break;

      default:
        // history.pushState(null, '', '#/404');
        window.location.href = '#/404';
        console.log('error 404');
        this.hash = '/404';
        break;
    }

    this.createView();
  }

}
