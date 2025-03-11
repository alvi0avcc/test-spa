export default class Router {
  // routes: Record<string, string>;
  onHashChange: (hash: string) => void;

  constructor(onHashChange: (hash: string) => void) {
    // this.routes = routes;
    this.onHashChange = onHashChange;
    this.init();
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRouting());
    window.addEventListener('load', () => this.handleRouting());
  }

  handleRouting() {
    const currentHash = window.location.hash.slice(1) || '/';
    console.log('currentHash=', currentHash);

    // const route = this.routes[currentHash];
    // console.log('route =', route);

    this.onHashChange(currentHash);
  }
}
