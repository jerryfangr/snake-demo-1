class Food {
  element: HTMLElement;
  _x:number;
  _y:number;

  constructor () {
    this.element = <HTMLElement>document.querySelector('#food');
    this._x = 40;
    this._y = 40;
  }

  get x ():number {
    return this._x;
  }

  get y ():number {
    return this._y;
  }
  
  change () {
    this._x = Math.round(Math.random() * 29) * 10;
    this._y = Math.round(Math.random() * 29) * 10;
    this.element.style.left = this._x + 'px';
    this.element.style.top = this._y + 'px';
  }
}

export default Food;