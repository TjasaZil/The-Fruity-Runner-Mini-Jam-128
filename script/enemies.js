class Enemy {
  constructor() {
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 5;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.markedForDeletion = false;
    this.lastBackgroundSwitch = 0;
    this.startInterval = 0;
    this.backgroundSwitchInterval = 60;
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

    if (this.x + this.width < 0) this.markedForDeletion = true;
  }
  draw(context) {
    /*if (this.game.debug)
      context.strokeRect(this.x, this.y, this.width, this.height);*/
    if (this.lastBackgroundSwitch % 2 === 0) {
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
    } else {
      context.drawImage(
        this.imageNight,
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
  timeTick() {
    this.startInterval++;
    if (this.startInterval > this.backgroundSwitchInterval) {
      this.startInterval = 0;
      this.lastBackgroundSwitch++;
      console.log(this.lastBackgroundSwitch);
    }
  }
}
class Bush1 extends Enemy {
  constructor(game) {
    super();
    this.game = game;
    this.width = 56;
    this.height = 35;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y = this.game.height - this.height - this.game.groundMargin;
    this.speedX = 0;
    this.speedY = 0;
    this.maxFrame = 0;
    this.image = document.getElementById("objects-update");
    this.imageNight = document.getElementById("objects-update-night");
  }
  update(deltaTime) {
    super.update(deltaTime);
  }
  draw(context) {
    this.timeTick();
    super.draw(context);
  }
}
class Bush2 extends Enemy {
  constructor(game) {
    super();
    this.game = game;
    this.width = 50;
    this.height = 34;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y = this.game.height - this.height - this.game.groundMargin;
    this.speedX = 0;
    this.speedY = 0;
    this.maxFrame = 0;
    this.image = document.getElementById("objects");
    this.imageNight = document.getElementById("objects-night");
  }
  draw(context) {
    this.timeTick();
    super.draw(context);
  }
}
class Trap extends Enemy {
  constructor(game) {
    super();
    this.game = game;
    this.width = 50;
    this.height = 12;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y = this.game.height - this.height - this.game.groundMargin;
    this.speedX = 0;
    this.speedY = 0;
    this.maxFrame = 2;
    this.image = document.getElementById("field-object");
  }
  update(deltaTime) {
    super.update(deltaTime);
  }
}

export { Bush1, Bush2, Trap };
