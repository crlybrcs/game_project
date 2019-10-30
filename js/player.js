let mouseRight = [];
let mouseLeft = [];
let counter1 = 0;
// let counter2 = 0;

class Player {
  constructor() {
    this.width = 150;
    this.height = 150;
    this.x = 460 - 150;
    this.y = 400 - 97;
    this.direction = "right";
    this.velocity = 1;
    // this.img;
  }

  setup() {}

  move() {
    if (keyIsDown(RIGHT_ARROW) && this.x + this.width - 20 < 800) {
      this.x += 4 * this.velocity;
      this.velocity += 0.03;

      this.direction = "right";
    } else if (keyIsDown(LEFT_ARROW) && this.x + 20 > 0) {
      this.x -= 4 * this.velocity;
      this.velocity += 0.03;

      this.direction = "left";
    } else {
      this.velocity = 1;
    }
  }

  draw() {
    this.move();

    // console.log(this.y);
    this.rect = {
      x: this.x + 25,
      y: this.y + 50,
      width: this.width - 55,
      height: this.height
    };

    if (this.direction === "right") {
      if (frameCount % 3 === 0) {
        counter1 = (counter1 + 1) % mouseRight.length;
      }
      this.img = mouseRight[counter1];
      image(this.img, this.x, this.y, this.width, this.height);

      noFill();
      rect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    } else if (this.direction === "left") {
      if (frameCount % 3 === 0) {
        counter1 = (counter1 + 1) % mouseLeft.length;
      }
      this.img = mouseLeft[counter1];
      image(this.img, this.x, this.y, this.width, this.height);
      noFill();
      rect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
  }
}
