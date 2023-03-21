import {
  layerForest1,
  layerForest2,
  layerForest3,
  layerForest4,
  layerForest5,
  layerNightForest1,
  layerNightForest2,
  layerNightForest3,
  layerNightForest4,
  layerNightForest5,
} from "./background-variables.js";

import { GAME_HEIGHT, GAME_WIDTH } from "../variables.js";
import { Layer } from "./layer.js";

class Background {
  constructor(game) {
    this.game = game;
    this.width = GAME_WIDTH * 2;
    this.height = GAME_HEIGHT;
    this.layerForest1 = layerForest1;
    this.layerForest2 = layerForest2;
    this.layerForest3 = layerForest3;
    this.layerForest4 = layerForest4;
    this.layerForest5 = layerForest5;
    this.layerNightForest1 = layerNightForest1;
    this.layerNightForest2 = layerNightForest2;
    this.layerNightForest3 = layerNightForest3;
    this.layerNightForest4 = layerNightForest4;
    this.layerNightForest5 = layerNightForest5;

    const layers = {
      layer1: new Layer(
        this.game,
        this.width,
        this.height,
        0.1,
        this.layerForest1
      ),
      layer2: new Layer(
        this.game,
        this.width,
        this.height,
        0.3,
        this.layerForest2
      ),
      layer3: new Layer(
        this.game,
        this.width,
        this.height,
        0.5,
        this.layerForest3
      ),
      layer4: new Layer(
        this.game,
        this.width,
        this.height,
        0.7,
        this.layerForest4
      ),
      layer5: new Layer(
        this.game,
        this.width,
        this.height,
        1,
        this.layerForest5
      ),
      nightLayer1: new Layer(
        this.game,
        this.width,
        this.height,
        0.1,
        this.layerNightForest1
      ),
      nightLayer2: new Layer(
        this.game,
        this.width,
        this.height,
        0.3,
        this.layerNightForest2
      ),
      nightLayer3: new Layer(
        this.game,
        this.width,
        this.height,
        0.5,
        this.layerNightForest3
      ),
      nightLayer4: new Layer(
        this.game,
        this.width,
        this.height,
        0.7,
        this.layerNightForest4
      ),
      nightLayer5: new Layer(
        this.game,
        this.width,
        this.height,
        1,
        this.layerNightForest5
      ),
    };

    this.backgroundLayers = [
      layers.layer1,
      layers.layer2,
      layers.layer3,
      layers.layer4,
      layers.layer5,
    ];
    this.backgroundNightLayers = [
      layers.nightLayer1,
      layers.nightLayer2,
      layers.nightLayer3,
      layers.nightLayer4,
      layers.nightLayer5,
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
  }
}
export { Background, Layer };
