class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 40;
    this.fontFamily = "Helvetica";
    this.image = document.getElementById("heart");
  }
  draw(context) {
    context.font = this.fontSize + "px" + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;

    // Heart image
    context.drawImage(this.image, 10, 10, 20, 20);

    // Score
    context.fillText(this.game.score, 35, 22);
  }
  showGameOverScreen() {
    console.log("Gem over");
  }
}

export { UI };
