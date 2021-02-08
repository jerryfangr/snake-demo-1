class Food {
  element: HTMLElement;

  constructor () {
    this.element = <HTMLElement>document.querySelector('#food');
  }

  get x ():number {
    return this.element.offsetLeft;
  }

  get y ():number {
    return this.element.offsetTop;
  }
  
  change () {
    let left = Math.round(Math.random() * 29) * 10;
    let top = Math.round(Math.random() * 29) * 10;
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}

export default Food;