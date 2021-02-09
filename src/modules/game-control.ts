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
    this.panel = new Panel(10, 5);
    this.direction = 'Stop';
    this.isLive = true;
    this.init();
  }

  init () {
    this.bindEvents();
    this.run('', this.direction);
  }

  bindEvents () {
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
  }

  keyDownHandler (event: KeyboardEvent) {
    event.preventDefault();
    this.direction = this.normalizeDirection(event.key);
  }

  normalizeDirection (direction: string) {
    switch (direction) {
      case 'ArrowUp':
      case 'Up':
        return 'Up';
      case 'ArrowDown':
      case 'Down':
        return 'Down';
      case 'ArrowLeft':
      case 'Left':
        return 'Left';
      case 'ArrowRight':
      case 'Right':
        return 'Right';
      default:
        return 'Stop';
    }
  }

  reverseDirection (direction: string) {
    switch (direction) {
      case 'Up':
        return 'Down';
      case 'Down':
        return 'Up';
      case 'Left':
        return 'Right';
      case 'Right':
        return 'Left';
      default:
        return 'stop';
    }
  }

  run (currentDirection:string, nextDirection:string) {
    let hasBody = this.snake.bodies.length > 1;
    let rd = this.reverseDirection(nextDirection);
    if (rd !== 'Stop') {
      if (hasBody && currentDirection === rd) {
        nextDirection = currentDirection;
      }

      let {x, y} = this.calculateMovedXY(nextDirection);
  
      this.checkEat(x, y);
  
      try {
        this.snake.x = x;
        this.snake.y = y;      
      } catch (error) {
        alert('Game Over! ' + error.message);
        return;
      }
    }
    this.isLive && setTimeout(() => {
      this.run(nextDirection, this.direction);
    }, 400 / this.panel.level);
  }

  calculateMovedXY (direction:string) {
    let x = this.snake.x;
    let y = this.snake.y;
    switch (direction) {
      case 'Up':
        this.direction = 'Up';
        y -= 10;
        break;
      case 'Down':
        this.direction = 'Down';
        y += 10;
        break;
      case 'Left':
        this.direction = 'Left';
        x -= 10;
        break;
      case 'Right':
        this.direction = 'Right';
        x += 10;
        break;
    }

    return {x, y}
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