const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1080);
const CANVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 7;

const forrestLayer1 = new Image();
forrestLayer1.src = "../assets/PNG/Day/Forest/Forest Layer 01.png";
const forrestLayer2 = new Image();
forrestLayer2.src = "../assets/PNG/Day/Forest/Forest Layer 02.png";
const forrestLayer3 = new Image();
forrestLayer3.src = "../assets/PNG/Day/Forest/Forest Layer 03.png";
const forrestLayer4 = new Image();
forrestLayer4.src = "../assets/PNG/Day/Forest/Forest Layer 04.png";
const forrestLayer5 = new Image();
forrestLayer5.src = "../assets/PNG/Day/Forest/Forest Layer 05.png";

class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
    this.x2 = this.width;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }
  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}

const layer1 = new Layer(forrestLayer1, 0.5);
const layer2 = new Layer(forrestLayer2, 0.6);
const layer3 = new Layer(forrestLayer3, 0.75);
const layer4 = new Layer(forrestLayer4, 0.8);
const layer5 = new Layer(forrestLayer5, 1);

const drawAndUpdate = () => {
  layer1.update();
  layer1.draw();
  layer2.update();
  layer2.draw();
  layer3.update();
  layer3.draw();
  layer4.update();
  layer4.draw();
  layer5.update();
  layer5.draw();
};

const backgroundAnimate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  drawAndUpdate();
  requestAnimationFrame(backgroundAnimate);
};
backgroundAnimate();
