import Snake from './snake'
import Food from './food'
import Panel from './panel'

class GameControl {
  snake: Snake;
  food: Food;
  panel: Panel;
  direction: string;
  isLive: boolean;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.panel = new Panel(10, 10);
    this.direction = '';
    this.isLive = true;
    this.init();
  }

  init () {
    this.bindEvents();
    this.run()
  }

  bindEvents () {
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
  }

  keyDownHandler (event: KeyboardEvent) {
    event.preventDefault();
    // console.log(event.key);
    // console.log(event.keyCode);
    this.direction = event.key;
  }

  run () {
    let x = this.snake.x;
    let y = this.snake.y;
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        x -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        x += 10;
        break;
    }

    this.checkEat(x, y);

    try {
      this.snake.x = x;
      this.snake.y = y;      
    } catch (error) {
      console.log('Game Over! ' + error.message);
      return;
    }

    this.isLive && setTimeout(() => {
      this.run();
    }, 500 / this.panel.level);
  }

  checkEat (x:number, y:number) {
    if (x === this.food.x && y === this.food.y) {
      this.food.change();
      this.panel.addScore();
      this.snake.growUp();
    } 
  }
}

export default GameControl;