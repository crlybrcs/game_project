let score = 0;

class Game {
  constructor() {
    this.player = new Player();
    this.foods = [];
  }

  setup() {
    this.player.setup();
    mySound.setVolume(1);
    mySound.play();
  }

  draw() {
    clear();
    image(kitchenBg, 0, 0, width, height);
    this.player.draw();

    if ((frameCount > 30) & (frameCount % 80 === 0)) {
      console.log("food");

      let typeOfFood = [
        { type: pudding, healthy: false },
        { type: shrimp, healthy: true },
        { type: strawberry, healthy: true },
        { type: sushi, healthy: true },
        { type: waffle, healthy: false },
        { type: watermelon, healthy: true },
        { type: apple, healthy: true },
        { type: asparagus, healthy: true },
        { type: avocado, healthy: true },
        { type: bacon, healthy: false },
        { type: blueberries, healthy: true },
        { type: boiledEgg, healthy: true },
        { type: brocoli, healthy: true },
        { type: burger, healthy: false },
        { type: cake, healthy: false },
        { type: can, healthy: false },
        { type: carrot, healthy: true },
        { type: cheese, healthy: false },
        { type: chickenLeg, healthy: true },
        { type: chocolate, healthy: false },
        { type: cola, healthy: false },
        { type: cupcake, healthy: false },
        { type: donut, healthy: false },
        { type: eggplant, healthy: true },
        { type: grapes, healthy: true },
        { type: ham, healthy: false },
        { type: icecream, healthy: false },
        { type: tuna, healthy: true }
      ];
      let randomFood =
        typeOfFood[Math.floor(Math.random() * typeOfFood.length)];

      this.foods.push(new Food(randomFood));
    }

    this.foods.forEach((food, index) => {
      food.draw();

      if (food.x + food.width <= 0 || food.x + food.width >= CANVAS_WIDTH) {
        //remove food
        this.foods.splice(index, 1);
      }

      if (this.isCollision(food, this.player.rect)) {
        if (food.eaten === true) {
          return;
        }

        if (food.healthy === true) {
          score += 1;
        } else {
          score -= 1;
        }

        food.eaten = true;
      }
    });
    // this.player.score.innerText = this.player.score;
    scoreSpan.innerText = score;
    console.log(score);
  }

  isCollision(food, player) {
    if (player.x + player.width < food.x || food.x + food.width < player.x) {
      return false;
    }
    if (player.y > food.y + food.height || food.y > player.y + player.height) {
      return false;
    }

    return true;
  }
}
