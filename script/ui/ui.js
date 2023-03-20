class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 20;
    this.fontFamily = "Helvetica";
    this.image = document.getElementById("heart");
  }
  draw(context) {
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;

    // Heart image
    context.drawImage(this.image, 10, 10, 20, 20);

    // Score
    context.fillText(this.game.score, 35, 25);

    //Game over message

    if (this.game.gameOver) {
      context.textAlign = "center";
      context.fillStyle = this.game.fontColor;
      context.font = this.fontSize * 4 + "px " + this.fontFamily;
      context.fillText(
        "Game Over!",
        this.game.width * 0.5,
        this.game.height * 0.5 - 20
      );
      context.font = this.fontSize * 1 + "px " + this.fontFamily;
      context.fillText(
        `You managed to pick up ${this.game.fruitScore} fruits and veggies`,
        this.game.width * 0.5,
        this.game.height * 0.5 + 20
      );
      context.font = this.fontSize * 1 + "px " + this.fontFamily;
      context.fillText(
        "Hold ENTER to play again",
        this.game.width * 0.5,
        this.game.height * 0.5 + 45
      );
    }
  }

  /* showGameOverScreen() {
    console.log("Gem over");
  }*/
}

export { UI };
