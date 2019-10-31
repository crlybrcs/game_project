// let mode;

// class StartPage {
//   setup() {
//     mode = 0;
//     createCanvas(806, 206);
//     console.log(mode);
//   }

//   draw() {
//     clear();
//     if (mode === 0) {
//       console.log(mode);
//       text("Press Enter to Start", 400, 100);
//     }
//     if (mode === 1) {
//       //   clear();
//       image(kitchenBg, 0, 0, width, height);
//       goods.forEach(award => {
//         award.setup();
//         award.draw();
//       });
//       // image(crystal, 0, 0, 32, 32);
//       this.paw.showUp();
//       this.player.draw();

//       if ((frameCount > 30) & (frameCount % 80 === 0)) {
//         console.log("food");

//         let typeOfFood = [
//           { type: pudding, healthy: false },
//           { type: shrimp, healthy: true },
//           { type: strawberry, healthy: true },
//           { type: sushi, healthy: true },
//           { type: waffle, healthy: false },
//           { type: watermelon, healthy: true },
//           { type: apple, healthy: true },
//           { type: asparagus, healthy: true },
//           { type: avocado, healthy: true },
//           { type: bacon, healthy: false },
//           { type: blueberries, healthy: true },
//           { type: boiledEgg, healthy: true },
//           { type: brocoli, healthy: true },
//           { type: burger, healthy: false },
//           { type: cake, healthy: false },
//           { type: can, healthy: false },
//           { type: carrot, healthy: true },
//           { type: cheese, healthy: false },
//           { type: chickenLeg, healthy: true },
//           { type: chocolate, healthy: false },
//           { type: cola, healthy: false },
//           { type: cupcake, healthy: false },
//           { type: donut, healthy: false },
//           { type: eggplant, healthy: true },
//           { type: grapes, healthy: true },
//           { type: ham, healthy: false },
//           { type: icecream, healthy: false },
//           { type: tuna, healthy: true },
//           { type: artichoke, healthy: true },
//           { type: burrito, healthy: false },
//           { type: cherry, healthy: true },
//           { type: mushroom, healthy: true },
//           { type: pancake, healthy: false },
//           { type: pizza, healthy: false },
//           { type: plum, healthy: true },
//           { type: radish, healthy: true }
//         ];
//         let randomFood =
//           typeOfFood[Math.floor(Math.random() * typeOfFood.length)];

//         this.foods.push(new Food(randomFood));
//       }

//       this.foods.forEach((food, index) => {
//         food.draw();

//         if (food.x + food.width <= 0 || food.x + food.width >= CANVAS_WIDTH) {
//           //remove food
//           this.foods.splice(index, 1);
//         }

//         if (this.isCollision(food, this.player.rect)) {
//           if (food.eaten === true) {
//             return;
//           }

//           if (food.healthy === true) {
//             score += 1;
//             this.foods.splice(index, 1);
//             goods.push(new Award(this.player));
//           } else {
//             score -= 1;
//             this.foods.splice(index, 1);
//           }

//           food.eaten = true;
//         }
//       });
//       // this.player.score.innerText = this.player.score;

//       scoreSpan.innerText = score;
//       console.log(score);
//     }
//   }

//   keyPressed() {
//     if (keyCode === 32) {
//       mode = 1;
//     }
//   }
// }

// let s = new StartPage();
// s.setup();
// s.draw();
