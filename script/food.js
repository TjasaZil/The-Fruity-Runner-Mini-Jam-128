class Fruit {
  constructor() {
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 5;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.markedForDeletionFood = false;
  }
  update(deltaTime) {
    // movement of the trap
    this.x -= this.speedX + this.game.speed;
    this.y += this.speedY;
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else {
      this.frameTimer += deltaTime;
    }
    //check if off screen

    if (this.x + this.width < 0) this.markedForDeletionFood = true;
  }
  draw(context) {
    if (this.game.debug)
      context.strokeRect(this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

class Pumpkin extends Fruit {
  constructor(game) {
    super();
    this.game = game;
    this.width = 28;
    this.height = 28;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y =
      this.game.height -
      this.height -
      this.game.groundMargin -
      this.game.height * Math.random() * 0.3;
    this.speedX = 0;
    this.speedY = 0;
    this.maxFrame = 0;
    this.image = document.getElementById("pumpkin");
  }
}
class Broccoli extends Fruit {
  constructor(game) {
    super();
    this.game = game;
    this.width = 28;
    this.height = 28;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y =
      this.game.height -
      this.height -
      this.game.groundMargin -
      this.game.height * Math.random() * 0.3;
    this.speedX = 0;
    this.speedY = 0;
    this.maxFrame = 0;
    this.image = document.getElementById("broccoli");
  }
}
class Strawberry extends Fruit {
  constructor(game) {
    super();
    this.game = game;
    this.width = 28;
    this.height = 28;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y =
      this.game.height -
      this.height -
      this.game.groundMargin -
      this.game.height * Math.random() * 0.3;
    this.speedX = 0;
    this.speedY = 0;
    this.maxFrame = 0;
    this.image = document.getElementById("strawberry");
  }
}

export { Pumpkin, Broccoli, Strawberry };
