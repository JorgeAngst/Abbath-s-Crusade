const Game = {
  name: "Abbath's Crusade",
  version: "1.0",
  author: "Jorge",
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  keys: {
    TOP_KEY: 38,
    SPACE: 32
  },

  init: function(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");

    this.start();
  },

  start: function() {
    this.fps = 60;

    this.reset();

    // PONEMOS EL SETINTERVAL Y DENTRO EL CLEAR Y LAS FUNCIONES DE DIBUJAR Y MOVER
    this.interval = setInterval(() => {
      this.clear();

      this.framesCounter++;

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }
      this.moveAll();
      this.drawAll();
    }, 1000 / this.fps);
  },

  reset: function() {
    this.background = new Background(
      this.canvas.width,
      this.canvas.height,
      this.ctx
    );
    this.player = new Player(
      this.canvas.width,
      this.canvas.height,
      this.ctx,
      this.keys,
      this
    );
    this.framesCounter = 0;
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  drawAll: function() {
    this.background.draw();
    this.player.draw(this.framesCounter);
  },

  moveAll: function() {
    this.background.move();
    this.player.move();
  }
};
