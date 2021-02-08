class Snake {
  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;

  constructor () {
    this.element = <HTMLElement>document.querySelector('#snake');
    this.head = <HTMLElement>document.querySelector('#snake>div');
    this.bodies = this.element.getElementsByTagName('div');
  }

  get x ():number {
    return this.head.offsetLeft;
  }

  set x (value:number) {
    this.head.style.left = value + 'px';
  }

  get y ():number {
    return this.head.offsetTop;
  }

  set (value:number) {
    this.head.style.top = value + 'px';
  }

  growUp () {
    this.element.appendChild(document.createElement('div'));
  }
}

export default Snake;