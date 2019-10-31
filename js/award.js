class Award {
  constructor(player) {
    this.x = player.x + player.width / 2;
    this.y = player.y;
    this.width = 32;
    this.height = 32;
  }

  setup() {
    image(crystal, this.x, this.y, this.width, this.height);
  }

  draw() {
    this.y -= 6;
  }
}
