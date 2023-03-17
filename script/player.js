class Player {
  constructor(game) {
    this.game = game;
    this.width = 32;
    this.height = 32;
    this.x = 0;
    this.y = this.game.height - this.height;
    this.vy = 0;
    this.weight = 1;
    this.image = document.getElementById("player");
    this.speed = 0;
    this.maxSpeed = 5;
  }
  update(input) {
    //horizontal movement
    this.x += this.speed;
    if (input.includes("ArrowRight")) this.speed = this.maxSpeed;
    else if (input.includes("ArrowLeft")) this.speed = -this.maxSpeed;
    else this.speed = 0;
    if (this.x < 0) this.x = 0;
    if (this.x > this.game.width - this.width)
      this.x = this.game.width - this.width;

    //vertical movement
    if (input.includes("ArrowUp") && this.onGround()) this.vy -= 11;
    this.y += this.vy;

    if (!this.onGround()) this.vy += this.weight;
    else this.vy = 0;
    //console.log(this.vy);
  }
  draw(context) {
    context.fillStyle = "red";
    context.drawImage(
      this.image,
      6,
      -6,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  onGround() {
    return this.y >= this.game.height - this.height;
  }
}
export { Player };
