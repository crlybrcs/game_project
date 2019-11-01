let score = 0;

let goods = [];

let collisionCounter = 0;

let lives = ["🐭", "🐭", "🐭"];

let mode = 0;
function keyPressed() {
  if (keyCode === 32) {
    mode = 1;
  } else if (mode === 2) {
    fill("black");
    textSize(25);
    background("white");
    textFont("monospace");
    text("GAME OVER", 330, 220);
    // noLoop();
    // clear();
    // mode = 0;
  }
}

class Game {
  constructor() {
    this.player = new Player();
    this.paw = new Paw();
    this.foods = [];
  }

  setup() {
    this.player.setup();
  }

  draw() {
    keyPressed();
    if (mode === 0) {
      textSize(25);
      textFont("monospace");
      text("Press SPACE to start", 260, 180);
      textSize(18);
      text("try catching as more healthy food as you can!", 170, 270);
      text("use <- and -> to control the mouse", 225, 290);
    } else if (mode === 1) {
      clear();

      image(kitchenBg, 0, 0, width, height);

      goods.forEach(award => {
        award.setup();
        award.draw();
      });
      // image(crystal, 0, 0, 32, 32);
      if ((score >= 13 && score % 5 === 0) || this.paw.display === true) {
        if (this.paw.display !== false) this.paw.display = true;
        this.paw.showUp();
      } else if (this.paw.display === false) {
        console.log("this.paw.display === false");
        this.paw = new Paw();
      }

      this.player.draw();
      if ((frameCount > 30) & (frameCount % 80 === 0)) {
        // console.log("food");
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
          { type: tuna, healthy: true },
          { type: artichoke, healthy: true },
          { type: burrito, healthy: false },
          { type: cherry, healthy: true },
          { type: mushroom, healthy: true },
          { type: pancake, healthy: false },
          { type: pizza, healthy: false },
          { type: plum, healthy: true },
          { type: radish, healthy: true }
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
            this.foods.splice(index, 1);
            goods.push(new Award(this.player));
          } else {
            score -= 1;
            this.foods.splice(index, 1);
          }
          food.eaten = true;
        }
      });
      // this.player.score.innerText = this.player.score;
      scoreSpan.innerText = score;
      // console.log(score);

      if (this.isPawCollision(this.player, this.paw)) {
        console.log("paw grabs mouse");
        this.paw.collide = true;
      }

      if (collisionCounter === 0) {
        text("❤️ ❤️ ❤️", 507, 45);
      } else if (collisionCounter === 1) {
        text("❤️ ❤️", 507, 45);
      } else if (collisionCounter === 2) {
        text("❤️", 507, 45);
      } else if (collisionCounter === 3) {
        mode = 2;
      }
    }
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

  isPawCollision(player, paw) {
    // console.log(paw.x, paw.y);
    if (
      player.x < paw.x + paw.width &&
      player.x + player.width > paw.x &&
      paw.y < player.y
    ) {
      return true;
    }
  }
}
