import './styles.css';

export default class HeaderView {
  header: HTMLElement | null;

  constructor() {
    this.header = null;
    this.createHeader();
  }
  createElement(tag: string = 'div'): HTMLElement {
    return document.createElement(tag);
  }

  createButton(id: string = '', name: string = '', text: string = 'button', callback: Function | null = null): HTMLElement {
    const button: HTMLElement = this.createElement('button');
    button.id = id;
    button.textContent = text;
    button.classList.add('button');
    if (callback) button.addEventListener('click', (event) => callback(event));
    return button;
  }

  createHeader(): HTMLElement | null {
    const page: HTMLElement[] = [
      this.createButton('btn1', 'btn1', 'Click Me', () => {
        console.log('Button1 clicked!');
        window.location.href = '#/';
      }),
      this.createButton('btn2', 'btn2', 'Click Me', () => {
        console.log('Button2 clicked!');
        window.location.href = '#/next';
      }),
    ];
    this.header = document.createElement('div');
    this.header?.append(...page);
    return this.header;
  }

  getView(): Node | string {
    if (this.header) return this.header;
    return '';
  }


}