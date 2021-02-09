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
    this.setXY('x', value);
  }

  set y (value:number) {
    this.setXY('y', value);
  }

  setXY (type: 'x' | 'y', value:number) {
    if (this[type] === value) {
      return;
    }

    if (value < 0 || value > 290) {
      throw new Error("the snake hit the wall");
    }

    this.moveBody();

    if (type === 'x') {
      this.head.style.transform = 'rotate(90deg)';
      this.head.style.left = value + 'px';
    } else {
      this.head.style.transform = '';
      this.head.style.top = value + 'px';
    }

    this.checkHitBody();
  }

  checkHitBody () {
    for (let i = 1; i < this.bodies.length; i++) {
      let currentBody = <HTMLElement>this.bodies[i];
      let cx = parseInt(currentBody.style.left.split('px')[0], 10);
      let cy = parseInt(currentBody.style.top.split('px')[0], 10);
      if (this.x === cx && this.y === cy) {
        throw new Error("the snake hit the body");
      }
    }
  }

  growUp () {
    this.element.appendChild(document.createElement('div'));
  }

  moveBody () { // 后一节身体移到前一节位置(不改头部)
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let preBody = <HTMLElement>this.bodies[i-1];
      let currentBody = <HTMLElement>this.bodies[i];
      currentBody.style.top = preBody.style.top;
      currentBody.style.left = preBody.style.left;
    }
  }
}

export default Snake;