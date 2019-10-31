// h 256
// w 161
class Paw {
  constructor() {
    this.height = 256;
    this.width = 161;
    this.x = Math.random() * (CANVAS_WIDTH - 161);
    this.y = CANVAS_HEIGHT;
    // - 256;
    this.angle = 0;
    this.direction = "UP";
  }

  showUp() {
    let startPosition = this.y;
    //+ this.height;

    image(paw, this.x, startPosition, this.width, this.height);

    if (this.direction === "UP") {
      this.y -= 6;
    } else {
      this.y += 6;
    }

    if (startPosition < 180) {
      this.direction = "DOWN";
    }

    if (this.y > CANVAS_HEIGHT) {
      if (this.display !== false) {
        if (this.collide === true) {
          collisionCounter++;
        }
      }
      this.display = false;
    }
  }
}
