const states = {
  SITTING: 0,
  RUNNING: 1,
  JUMPING: 2,
  FALLING: 3,
  DEAD: 4,
  HIT: 5,
};
class State {
  constructor(state, game) {
    this.state = state;
    this.game = game;
  }
}

class Sitting extends State {
  constructor(game) {
    super("SITTING", game);
  }
  enter() {
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 5;
    this.game.player.frameY = 4;
  }
  handleInput(input) {
    if (input.includes("ArrowLeft") || input.includes("ArrowRight")) {
      this.game.player.setState(states.RUNNING, 1);
    }
  }
}

class Running extends State {
  constructor(game) {
    super("RUNNING", game);
  }
  enter() {
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 7;
    this.game.player.frameY = 3;
  }
  handleInput(input) {
    if (input.includes("ArrowDown")) {
      this.game.player.setState(states.SITTING, 0);
    } else if (input.includes("ArrowUp")) {
      this.game.player.setState(states.JUMPING, 1);
    }
  }
}

class Jumping extends State {
  constructor(game) {
    super("JUMPING", game);

    this.jumpSound = new Audio("../assets/Music/Jump.wav");
  }
  enter() {
    if (this.game.player.onGround()) {
      this.jumpSound.volume = 0.05;
      this.jumpSound.play();
      this.game.player.vy = -12;
    }
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 3;
    this.game.player.frameY = 1;
  }
  handleInput(input) {
    if (this.game.player.vy > this.game.player.weight) {
      this.game.player.setState(states.FALLING, 1);
    }
  }
}

class Falling extends State {
  constructor(game) {
    super("FALLING", game);
  }
  enter() {
    this.game.player.frameX = 4;
    this.game.player.maxFrame = 7;
    this.game.player.frameY = 5;
  }
  handleInput(input) {
    if (this.game.player.onGround()) {
      this.game.player.setState(states.RUNNING, 1);
    }
  }
}
class Dead extends State {
  constructor(game) {
    super("DEAD", game);
  }
  enter() {
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 7;
    this.game.player.frameY = 7;
  }
}
class Hit extends State {
  constructor(game) {
    super("HIT", game);
  }
  enter() {
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 2;
    this.game.player.frameY = 6;
  }
  handleInput(input) {
    console.log("Hit state handleInput() called");
    if (this.game.player.frameX >= 1 && this.game.player.onGround()) {
      this.game.player.setState(states.RUNNING, 1);
    } else if (this.game.player.frameX >= 1 && !this.game.player.onGround()) {
      this.game.player.setState(states.FALLING, 2);
    }
  }
}

export { Sitting, Running, Jumping, Falling, Dead, Hit };
