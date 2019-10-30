const game = new Game();

function setup() {
  let gameCanvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  gameCanvas.parent("canvas");
  console.log("setup");
}

function draw() {
  game.draw();
}

let scoreSpan = document.querySelector(".score");
console.log(score.innerText);
