import { Player } from "./player/player.js";
import { InputHandler } from "./input/input.js";
import { Background } from "./background/background.js";
import { Bush1, Bush2, Trap } from "./enemies/enemies.js";
import { UI } from "./ui/ui.js";
import { Broccoli, Strawberry, Pumpkin } from "./food/food.js";
import { GAME_HEIGHT, GAME_WIDTH } from "./variables.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  //canvas.width = window.innerWidth;
  //canvas.height = window.innerHeight;
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.groundMargin = 42;
      this.speed = 0;
      this.maxSpeed = 5;
      this.background = new Background(this);
      this.player = new Player(this);
      this.input = new InputHandler(this);
      this.enemies = [];
      this.foods = [];
      this.collisions = [];
      this.enemyTimer = 0;
      this.foodTimer = 0;
      this.foodInterval = 3000;
      this.enemyInterval = 2000;
      //this.debug = true;
      this.maxScore = 100;
      this.score = this.maxScore;
      this.fruitScore = 0;
      this.collisionScore = 0;
      this.scoreDecrementInterval = 2750; // decrement score every 1 second
      this.lastScoreDecrementTime = 0;
      this.fontColor = "white";
      this.gameOver = false;
      /* this.backgroundMusic = new Audio("../assets/Music/Title.wav");
      this.backgroundMusic.loop = true;
      this.backgroundMusic.volume = 0.1;
      this.backgroundMusic.play();*/
      this.UI = new UI(this);
      this.player.currentState = this.player.states[0];
      this.player.currentState.enter();
      this.lastBackgroundSwitch = 0;
      this.startInterval = 0;
      this.backgroundSwitchInterval = 5000;
    }
    update(deltaTime) {
      this.background.update();
      this.timeTick();
      //this.enemy.timeTick();
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
      // handle score
      if (
        this.score > 0 &&
        this.lastScoreDecrementTime > this.scoreDecrementInterval
      ) {
        this.decreaseScore();
        this.lastScoreDecrementTime = 0;
      } else {
        this.lastScoreDecrementTime += deltaTime;
      }
      //handle game over

      if (this.score <= 0) {
        this.gameOver = true;
      }
      //handle collision sprites

      this.collisions.forEach((collision, index) => {
        collision.update(deltaTime);
        if (collision.markedForDeletion) this.collisions.splice(index, 1);
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
      this.collisions.forEach((collision) => {
        collision.draw(context);
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
    decreaseScore() {
      if (this.speed > 0) {
        // start timer only if speed is greater than 0
        if (this.score > 0) {
          this.score--;
        }
      }
    }
    timeTick() {
      this.startInterval++;
      if (this.startInterval > this.backgroundSwitchInterval) {
        this.startInterval = 0;
        this.lastBackgroundSwitch++;
      }
      //console.log(this.startInterval);
    }
    reset() {
      // reset all game state to its initial values
      this.score = this.maxScore;
      this.fruitScore = 0;
      this.collisionScore = 0;
      this.speed = 0;
      this.enemies = [];
      this.foods = [];
      this.collisions = [];
      this.enemyTimer = 0;
      this.foodTimer = 0;
      this.gameOver = false;
      this.player.currentState = this.player.states[0];
      this.player.currentState.enter();
      this.player.x = 0;
      this.player.speed = 0;
      this.lastBackgroundSwitch = 0;
      this.startInterval = 0;

      animate(0);
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

    //player speed changes with time
    game.player.elapsedTime += deltaTime;
    if (game.player.speed < game.player.maxSpeed)
      game.player.speed += game.player.speedIncrease * deltaTime;
    else game.player.speed = game.player.maxSpeed;
    //console.log("speed" + game.player.speed);
    //if not game over then animate
    if (!game.gameOver) requestAnimationFrame(animate);
  };

  animate(0);
});
