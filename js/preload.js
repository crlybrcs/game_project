let kitchenBg;
let pudding;
let shrimp;
let strawberry;
let sushi;
let waffle;
let watermelon;
let apple;
let asparagus;
let avocado;
let bacon;
let blueberries;
let boiledEgg;
let brocoli;
let burger;
let cake;
let can;
let carrot;
let cheese;
let chickenLeg;
let chocolate;
let cola;
let cupcake;
let donut;
let eggplant;
let grapes;
let ham;
let icecream;
let tuna;
let artichoke;
let burrito;
let cherry;
let mushroom;
let pancake;
let pizza;
let plum;
let radish;
let paw;
let crystal;

function preload() {
  kitchenBg = loadImage("../assets/kitchen.png");

  mouseRight.push(loadImage("../assets/mouse_right_e0000.png"));
  mouseRight.push(loadImage("../assets/mouse_right_e0001.png"));
  mouseRight.push(loadImage("../assets/mouse_right_e0002.png"));
  mouseRight.push(loadImage("../assets/mouse_right_e0003.png"));
  mouseRight.push(loadImage("../assets/mouse_right_e0004.png"));
  mouseRight.push(loadImage("../assets/mouse_right_e0005.png"));
  mouseRight.push(loadImage("../assets/mouse_right_e0006.png"));
  mouseRight.push(loadImage("../assets/mouse_right_e0007.png"));
  mouseRight.push(loadImage("../assets/mouse_right_e0008.png"));
  mouseLeft.push(loadImage("../assets/mouse_left_w0000.png"));
  mouseLeft.push(loadImage("../assets/mouse_left_w0001.png"));
  mouseLeft.push(loadImage("../assets/mouse_left_w0002.png"));
  mouseLeft.push(loadImage("../assets/mouse_left_w0003.png"));
  mouseLeft.push(loadImage("../assets/mouse_left_w0004.png"));
  mouseLeft.push(loadImage("../assets/mouse_left_w0005.png"));
  mouseLeft.push(loadImage("../assets/mouse_left_w0006.png"));
  mouseLeft.push(loadImage("../assets/mouse_left_w0007.png"));
  mouseLeft.push(loadImage("../assets/mouse_left_w0008.png"));

  waffle = loadImage("../assets/Waffle_Border.png");
  pudding = loadImage("../assets/Pudding_Border.png");
  burger = loadImage("../assets/Burger_Border.png");
  cake = loadImage("../assets/Cake_Border.png");
  bacon = loadImage("../assets/Bacon_Border.png");
  can = loadImage("../assets/Can-Border.png");
  cheese = loadImage("../assets/Cheese_Border.png");
  chickenLeg = loadImage("../assets/ChickenLegCooked_Border.png");
  chocolate = loadImage("../assets/Chocolate_Border.png");
  cola = loadImage("../assets/ColaGlass_Border.png");
  cupcake = loadImage("../assets/Cupcake_Border.png");
  donut = loadImage("../assets/Donut.png");
  ham = loadImage("../assets/Ham_Border.png");
  icecream = loadImage("../assets/IceCream_Border.png");
  pancake = loadImage("../assets/Pancake-Border.png");
  pizza = loadImage("../assets/Pizza-Borde.png");

  tuna = loadImage("../assets/Tuna_Border.png");
  shrimp = loadImage("../assets/Shrimp_Border.png");
  strawberry = loadImage("../assets/Strawberry_Border.png");
  sushi = loadImage("../assets/Sushi-KatseuiBorder.png");
  watermelon = loadImage("../assets/Watermelon_Border.png");
  apple = loadImage("../assets/Apple_Border.png");
  asparagus = loadImage("../assets/Asparagus_Border.png");
  avocado = loadImage("../assets/Avocado_Border.png");
  blueberries = loadImage("../assets/Blueberries_Border.png");
  boiledEgg = loadImage("../assets/boiledEgg_Border.png");
  brocoli = loadImage("../assets/Brocolli.png");
  carrot = loadImage("../assets/Carrot_Border.png");
  eggplant = loadImage("../assets/Eggplant-Border.png");
  grapes = loadImage("../assets/Grapes_Border.png");
  artichoke = loadImage("../assets/Artichoke_Border.png");
  burrito = loadImage("../assets/Burrito_Border.png");
  cherry = loadImage("../assets/Cherry_Border.png");
  mushroom = loadImage("../assets/Mushroom_Border.png");
  plum = loadImage("../assets/Plum_Border.png");
  radish = loadImage("../assets/Radish_Border.png");

  paw = loadImage("../assets/resized_paw.png");
  crystal = loadImage("../assets/crystal_01j.png");

  // song = loadSound("Theme2Alt.wav");
  // gameOver = loadSound("Fanfare.wav");
}
