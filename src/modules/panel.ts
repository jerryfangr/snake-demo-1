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
  }

  addScore () {
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
    this.scoreEle.textContent = ++this.score + '';
  }
  levelUp () {
    if (this.level < 10) {
      this.levelEle.textContent = ++this.level + '';
    }
  }
}

export default Panel;