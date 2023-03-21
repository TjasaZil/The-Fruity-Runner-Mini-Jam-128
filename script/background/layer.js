//import { GAME_HEIGHT, GAME_WIDTH } from "../variables.js";

class Layer {
  constructor(game, GAME_WIDTH, GAME_HEIGHT, speedModifier, image) {
    this.game = game;
    this.width = GAME_WIDTH;
    this.height = GAME_HEIGHT;
    this.speedModifier = speedModifier;
    this.image = image;
    this.x = 0;
    this.y = 0;
  }
  update() {
    if (this.x < -this.width) this.x = 0;
    else this.x -= this.game.speed * this.speedModifier;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}

export { Layer };
