import {
  Sitting,
  Running,
  Jumping,
  Falling,
  Dead,
  Hit,
} from "../player-states/playerStates.js";
import { CollisionAnimation } from "../collision/collisionAnimation.js";

class Player {
  constructor(game) {
    this.game = game;
    this.width = 32;
    this.height = 32;
    this.x = 0;
    this.y = this.game.height - this.height - this.game.groundMargin;
    this.vy = 0;
    this.weight = 1;
    this.image = document.getElementById("player");
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame;
    this.fps = 5;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.speed = 0;
    this.maxSpeed = 3;
    this.speedIncrease = 0.0001;
    this.elapsedTime = 0;
    this.states = [
      new Sitting(this.game),
      new Running(this.game),
      new Jumping(this.game),
      new Falling(this.game),
      new Dead(this.game),
      new Hit(this.game),
    ];

    this.foodAudio = new Audio("../assets/Music/Fruit-collect.wav");
    this.enemyAudio = new Audio("../assets/Music/Hit-damage.wav");
  }
  update(input, deltaTime) {
    this.checkCollision();
    this.currentState.handleInput(input);
    //horizontal movement
    this.x += this.speed;
    if (input.includes("ArrowRight") && this.currentState !== this.states[5])
      this.speed = this.maxSpeed;
    else if (input.includes("ArrowLeft")) this.speed = -this.maxSpeed;
    else this.speed = 0;
    if (this.x < 0) this.x = 0;
    if (this.x > this.game.width - this.width)
      this.x = this.game.width - this.width;

    //vertical movement

    this.y += this.vy;

    if (!this.onGround()) this.vy += this.weight;
    else this.vy = 0;

    //sprite animation
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }
  draw(context) {
    /*if (this.game.debug)
      context.strokeRect(this.x, this.y, this.width, this.height);*/
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  onGround() {
    return this.y >= this.game.height - this.height - this.game.groundMargin;
  }
  setState(state, speed) {
    this.currentState = this.states[state];
    this.game.speed = this.game.maxSpeed * speed;
    this.currentState.enter();
  }
  checkCollision() {
    this.game.enemies.forEach((enemy) => {
      if (
        enemy.x < this.x + this.width &&
        enemy.x + enemy.width > this.x &&
        enemy.y < this.y + this.height &&
        enemy.y + enemy.height > this.y
      ) {
        this.setState(5, 0);
        enemy.markedForDeletion = true;
        this.game.collisions.push(
          new CollisionAnimation(
            this.game,
            enemy.x + enemy.width * 0.5,
            enemy.y + enemy.height * 0.5
          )
        );
        this.enemyAudio.play();
        this.enemyAudio.volume = 0.05;
        this.game.score -= 5;
        this.game.collisionScore++;
        console.log(this.game.collisionScore);
      }
    });
    this.game.foods.forEach((food) => {
      if (
        food.x < this.x + this.width &&
        food.x + food.width > this.x &&
        food.y < this.y + this.height &&
        food.y + food.height > this.y
      ) {
        food.markedForDeletionFood = true;
        if (this.game.score < this.game.maxScore) {
          this.foodAudio.play();
          this.foodAudio.volume = 0.05;
          this.game.score++;
          this.game.fruitScore++;
          console.log(this.game.fruitScore);
        } else this.game.score = this.game.maxScore;
      } else {
      }
    });
  }
  restart() {
    // reset score and game state
    this.score = 0;
    this.currentState = new Sitting(this);
  }
}
export { Player };
