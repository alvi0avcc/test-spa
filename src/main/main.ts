export default class MainView {
  main: HTMLElement | null;
  hash: string;
  constructor(hash: string) {
    this.main = null;
    this.hash = hash;
    this.createMain();
  }
  createElement(tag: string = 'div'): HTMLElement {
    return document.createElement(tag);
  }

  createButton(id: string = '', name: string = '', text: string = 'button', callback: Function | null = null): HTMLElement {
    const button: HTMLElement = this.createElement('button');
    button.id = id;
    button.textContent = text;
    if (callback) button.addEventListener('click', (event) => callback(event));
    return button;
  }

  createMain(): HTMLElement | null {
    this.main = document.createElement('div');
    console.log(this.hash);

    const page: HTMLElement[] = [
      this.createButton('btn1', 'btn1', 'Click Me', () => {
        console.log('Button1 clicked!');
      }),
      this.createButton('btn2', 'btn2', 'Click Me', () => {
        console.log('Button2 clicked!');
      }),
    ];

    if (this.hash === '/next')
      page.push(
        this.createButton('btn3', 'btn3', 'Click Me', () => {
          console.log('Button3 clicked!');
        }),
      );

    if (this.hash === '/404') {
      this.main?.append(
        this.createButton('btn1', 'btn1', 'Error 404', () => {
        }));
      return this.main;
    }
    this.main?.append(...page);
    return this.main;
  }

  getView(): Node | string {
    if (this.main) return this.main;
    return '';
  }


}