const game = new Game();

let song;
let gameOver;

function setup() {
  let gameCanvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  gameCanvas.parent("canvas");

  // let gameOver = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  // gameOver.parent("gameover");

  console.log("setup");
  // song.play();
  // let slider = createSlider(0, 1, 0.1, 0.01);
}

function draw() {
  game.draw();
}

let scoreSpan = document.querySelector(".score");
console.log(score.innerText);

// function keyPressed() {
//   if (keyCode === 32) {
//     playing === false;
//   }
// }
function award() {}
