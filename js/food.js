class Food {
  constructor(randomFood) {
    this.width = 40;
    this.height = 40;
    this.x = random(width);
    this.y = -40;
    this.food = randomFood.type;
    this.healthy = randomFood.healthy;
    this.eaten = false;
  }

  setup() {
    //
  }

  draw() {
    this.food && image(this.food, this.x, this.y, this.width, this.height);

    // no difference in speed after 10 coins?
    if (score >= 10) {
      this.y += 3;
    } else if (score >= 20) {
      this.y += 4;
    } else if (score >= 30) {
      this.y += 5;
    } else if (score < 10) {
      this.y += 2;
    }

    // if (score <= -10) {
    //   game.player.x = 200;
    //   game.player.y = 200;
    // } else if (score === -20) {
    //   game.player.x = 250;
    //   game.player.y = 250;
    // }
  }
}
