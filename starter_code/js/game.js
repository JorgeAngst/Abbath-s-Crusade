const Game = {
  name: "Abbath's Crusade",
  version: "1.0",
  author: "Jorge",
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  keys: {
    TOP_KEY: 38,
    SPACE: 32,
    RIGHT_KEY: 39
  },
  enemies: [],
  score: 0,

  init: function (id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.start();
  },

  start: function () {

    this.reset();

    this.interval = setInterval(() => {
      this.clear();

      this.framesCounter++;

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

      this.moveAll();
      this.drawAll();
      this.win()
      this.gameOver()

      if (this.framesCounter % 500 === 0) {
        this.generateEnemy();
      }

      this.checkCollision();

      this.updateScore();
      this.clearEnemies();
      this.dead();

    }, 1000 / this.fps);
  },

  reset: function () {

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
    this.deadEnemy = new deadEnemy(
      this.canvas.width,
      this.canvas.height,
      this.ctx
    );
    this.life = new Life(
      this.canvas.width,
      this.canvas.height,
      this.ctx,
      this
    );

    this.scoreBoard = new Scoreboard(
      this.canvas.width,
      this.canvas.height,
      this.ctx,
      this
    )

    this.enemies = [];

    this.win

    this.framesCounter = 0;
  },

  stop: function () {
    clearInterval(this.interval)
  },

  gameOver: function () {
    if (this.player.life <= 0) {
      this.stop()
      confirm("GAME OVER. Play again?")
      this.reset();
      this.start();
    }
  },
  win: function () {
    if (this.score >= 100) {
      this.stop()
      confirm("You win motherfucker! Wanna try again bitch?")
      this.reset();
      this.start();
    }
  },

  dead() {
    if (this.enemies.length <= 0) {
      this.background.dx = 1;
    }
  },

  updateScore() {
    this.enemies.forEach(enemy => {
      if (enemy.life <= 0) {
        this.score += 50
      }
    })
  },

  checkCollision: function () {
    return this.enemies.some(enemy => {
      if (this.player.x + this.player.width >= enemy.x && enemy.x + enemy.width > this.player.x + 100 && this.player.y === this.player.y0) {
        this.background.dx = 0;
        enemy.dx = 0;
        enemy.attack();
      }
    });
  },
  clearEnemies: function () {
    this.enemies = this.enemies.filter(function (enemy) {
      return enemy.life > 0;
    });
  },
  generateEnemy: function () {
    this.enemies.push(
      (this.enemy = new Enemy(
        this.canvas.width,
        this.canvas.height,
        this.ctx,
        this
      ))
    );
  },

  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  drawAll: function () {
    this.background.draw();
    this.player.draw(this.framesCounter);
    this.enemies.forEach(enemy => {
      enemy.draw(this.framesCounter);
    });
    this.life.draw()
    this.scoreBoard.draw()
    //this.deadEnemy.draw();
  },

  moveAll: function () {
    this.background.move();
    this.player.move();
    this.enemies.forEach(enemy => {
      enemy.move();
    });
    //this.deadEnemy.move();
  }


};
