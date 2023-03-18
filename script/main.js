import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Background } from "./background.js";
import { Bush1, Bush2, Trap } from "./enemies.js";

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
      this.input = new InputHandler();
      this.enemies = [];
      this.enemyTimer = 0;
      this.enemyInterval = 2000;
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
      });
    }
    draw(context) {
      this.background.draw(context);
      this.player.draw(context);
      this.enemies.forEach((enemy) => {
        enemy.draw(context);
      });
    }
    addEnemy() {
      this.enemies.push(new Trap(this));
      this.enemies.push(new Bush2(this));
      this.enemies.push(new Bush1(this));
      console.log(this.enemies);
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
