import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Background } from "./background.js";
import { Bush1, Bush2, Trap } from "./enemies.js";
import { UI } from "./ui.js";
import { Broccoli, Strawberry, Pumpkin } from "./food.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 480;
  canvas.height = 320;
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.groundMargin = 20;
      this.speed = 0;
      this.maxSpeed = 3;
      this.background = new Background(this);
      this.player = new Player(this);
      this.input = new InputHandler(this);
      this.enemies = [];
      this.foods = [];
      this.enemyTimer = 0;
      this.foodTimer = 0;
      this.foodInterval = 3000;
      this.enemyInterval = 2000;
      this.debug = true;
      this.maxScore = 100;
      this.score = this.maxScore;
      this.fontColor = "white";
      this.UI = new UI(this);
    }
    update(deltaTime) {
      this.background.update();
      this.player.update(this.input.keys, deltaTime);

      //handle enemies
      if (this.enemyTimer > this.enemyInterval) {
        this.addEnemy();
        this.enemyTimer = 0;
      } else this.enemyTimer += deltaTime;

      this.enemies.forEach((enemy) => {
        enemy.update(deltaTime);
        if (enemy.markedForDeletion)
          this.enemies.splice(this.enemies.indexOf(enemy), 1);
      });
      if (this.foodTimer > this.foodInterval) {
        this.addFood();
        this.foodTimer = 0;
      } else this.foodTimer += deltaTime;

      this.foods.forEach((food) => {
        food.update(deltaTime);
        if (food.markedForDeletionFood)
          this.foods.splice(this.foods.indexOf(food), 1);
      });
    }
    draw(context) {
      this.background.draw(context);
      this.player.draw(context);
      this.enemies.forEach((enemy) => {
        enemy.draw(context);
      });
      this.foods.forEach((food) => {
        food.draw(context);
      });
      this.UI.draw(context);
    }
    addEnemy() {
      if (this.speed > 0) {
        if (Math.random() < 0.33) this.enemies.push(new Trap(this));
        else if (Math.random() > 0.66) this.enemies.push(new Bush2(this));
        else this.enemies.push(new Bush1(this));
      }

      //console.log(this.enemies);
    }
    addFood() {
      if (this.speed > 0) {
        if (Math.random() < 0.33) this.foods.push(new Pumpkin(this));
        else if (Math.random() > 0.66) this.foods.push(new Strawberry(this));
        else this.foods.push(new Broccoli(this));
      }

      console.log(this.foods);
    }
  }
  const game = new Game(canvas.width, canvas.height);
  console.log(game);
  let lastTime = 0;

  const animate = (timeStamp) => {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(animate);
  };

  animate(0);
});
