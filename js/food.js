class Food {
  constructor(randomFood) {
    this.width = 40;
    this.height = 40;
    this.x = random(width);
    this.y = -50;
    this.food = randomFood.type;
    this.healthy = randomFood.healthy;
    this.eaten = false;
    // console.log(this.healthy);
  }

  setup() {
    // this.img = loadImage('assets/')
  }

  draw() {
    // fill(String(this.food));
    // if (this.healthy) {
    //   this.food(this.x, this.y, this.width, this.height);
    // } else if (!this.healthy) {
    //   rect(this.x, this.y, this.width, this.height);
    // }

    image(this.food, this.x, this.y, this.width, this.height);
    noFill();
    rect(this.x, this.y, this.width, this.height);
    this.y += 2;
  }
}
