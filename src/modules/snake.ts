class Snake {
  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;

  constructor () {
    this.element = <HTMLElement>document.querySelector('#snake');
    this.head = <HTMLElement>document.querySelector('#snake>.snake-head');
    this.bodies = this.element.getElementsByTagName('div');
  }

  get x ():number {
    return this.head.offsetLeft;
  }

  get y ():number {
    return this.head.offsetTop;
  }

  set x (value:number) {
    if (this.x === value) {
      return;
    }

    if (value < 0 || value > 290) {
      throw new Error("the snake hit the wall");
    }

    this.head.style.left = value + 'px';
  }

  set y (value:number) {
    if (this.y === value) {
      return;
    }

    if (value < 0 || value > 290) {
      throw new Error("the snake hit the wall");
    }

    this.head.style.top = value + 'px';
  }

  growUp () {
    this.element.appendChild(document.createElement('div'));
  }
}

export default Snake;