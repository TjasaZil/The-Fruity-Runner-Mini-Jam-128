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
    context.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
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
    this.layerNightForest1 = document.getElementById("night-layer1");
    this.layerNightForest2 = document.getElementById("night-layer2");
    this.layerNightForest3 = document.getElementById("night-layer3");
    this.layerNightForest4 = document.getElementById("night-layer4");
    this.layerNightForest5 = document.getElementById("night-layer5");
    //this.lastBackgroundSwitch = 0;
    //this.startInterval = 0;
    //this.backgroundSwitchInterval = 60; //bg switches every 2 seconds
    //day layers
    this.layer1 = new Layer(
      this.game,
      this.width,
      this.height,
      0.1,
      this.layerForest1
    );
    this.layer2 = new Layer(
      this.game,
      this.width,
      this.height,
      0.3,
      this.layerForest2
    );
    this.layer3 = new Layer(
      this.game,
      this.width,
      this.height,
      0.5,
      this.layerForest3
    );
    this.layer4 = new Layer(
      this.game,
      this.width,
      this.height,
      0.7,
      this.layerForest4
    );
    this.layer5 = new Layer(
      this.game,
      this.width,
      this.height,
      1,
      this.layerForest5
    );
    //night layer
    this.nightLayer1 = new Layer(
      this.game,
      this.width,
      this.height,
      0.1,
      this.layerNightForest1
    );
    this.nightLayer2 = new Layer(
      this.game,
      this.width,
      this.height,
      0.3,
      this.layerNightForest2
    );
    this.nightLayer3 = new Layer(
      this.game,
      this.width,
      this.height,
      0.5,
      this.layerNightForest3
    );
    this.nightLayer4 = new Layer(
      this.game,
      this.width,
      this.height,
      0.7,
      this.layerNightForest4
    );
    this.nightLayer5 = new Layer(
      this.game,
      this.width,
      this.height,
      1,
      this.layerNightForest5
    );

    //layers array
    this.backgroundLayers = [
      this.layer1,
      this.layer2,
      this.layer3,
      this.layer4,
      this.layer5,
    ];
    this.backgroundNightLayers = [
      this.nightLayer1,
      this.nightLayer2,
      this.nightLayer3,
      this.nightLayer4,
      this.nightLayer5,
    ];
  }
  update() {
    if (this.game.lastBackgroundSwitch % 2 === 0) {
      this.backgroundLayers.forEach((layer) => {
        layer.update();
      });
    } else {
      this.backgroundNightLayers.forEach((layer) => {
        layer.update();
      });
    }
  }
  draw(context) {
    if (this.game.lastBackgroundSwitch % 2 === 0) {
      this.backgroundLayers.forEach((layer) => {
        layer.draw(context);
      });
    } else {
      this.backgroundNightLayers.forEach((layer) => {
        layer.draw(context);
      });
    }
  } /*
  timeTick() {
    this.startInterval++;
    if (this.startInterval > this.backgroundSwitchInterval) {
      this.startInterval = 0;
      this.lastBackgroundSwitch++;
    }
    //console.log(this.startInterval);
  }*/
}
export { Background };
