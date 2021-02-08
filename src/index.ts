import './index.less'
import Food from './modules/food'
import Panel from './modules/panel'

// let food = new Food();
// console.log(food.x, food.y);
// setTimeout(() => {
//   food.change()
//   console.log(food.x, food.y);
// }, 1000)


let p = new Panel(10, 5);
for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    p.addScore();
  }, 1000*i);
}