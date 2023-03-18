class Layer {
  constructor(game, width, height, speedModifier, image) {
    this.game = game;
    this.width = width;
    this.height = height;
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
  }
}

class Background {
  constructor(game) {
    this.game = game;
    this.width = 1667;
    this.height = 320;
    this.layerForest1 = document.getElementById("layer1");
    this.layerForest2 = document.getElementById("layer2");
    this.layerForest3 = document.getElementById("layer3");
    this.layerForest4 = document.getElementById("layer4");
    this.layerForest5 = document.getElementById("layer5");
    this.layer1 = new Layer(
      this.game,
      this.width,
      this.height,
      1,
      this.layerForest1
    );
    console.log(this.layer1);
    this.backgroundLayers = [this.layer1];
  }
  update() {
    this.backgroundLayers.forEach((layer) => {
      layer.update();
    });
  }
  draw(context) {
    this.backgroundLayers.forEach((layer) => {
      layer.draw(context);
    });
  }
}
export { Background };
