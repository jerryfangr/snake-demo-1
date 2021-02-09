class Panel {
  score = 0;
  level = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  maxLevel:number;
  upScore:number;

  constructor (maxLevel: number, upScore:number) {
    this.scoreEle = <HTMLElement>document.querySelector('#score');
    this.levelEle = <HTMLElement>document.querySelector('#level');
    this.maxLevel = maxLevel;
    this.upScore = upScore;
    this.init();
  }

  init () {
    this.scoreEle.textContent = this.score + '';
    this.levelEle.textContent = this.level + '';
  }

  get speed (): number {
    return this.maxLevel - this.level;
  }

  addScore () {
    if (this.score > 0 && this.score % this.upScore === 0) {
      this.levelUp();
    }
    this.scoreEle.textContent = ++this.score + '';
  }

  levelUp () {
    if (this.level < this.maxLevel) {
      this.levelEle.textContent = ++this.level + '';
    }
  }
}

export default Panel;