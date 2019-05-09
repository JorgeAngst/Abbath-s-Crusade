class Scoreboard {
  constructor(width, height, ctx, game) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.ctx = ctx;
    this.game = game
    this.x = this.canvasWidth * 0.08
    this.y = this.canvasHeight * 0.95
    this.width = 100
    this.height = 15
  }

  draw() {
    this.ctx.font = "18px serif"
    this.ctx.fillStyle = "black"
    this.ctx.fillText("SCORE", this.x * 0.39 + 300, this.y + 13.5, 100)
    this.ctx.fillText(this.game.score, this.x * 0.39 + 400, this.y + 13.5, 100)
  }
}

