class Life {
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
    this.ctx.fillText("BLOOD", this.x * 0.39, this.y + 13.5, 100)
    this.ctx.fillStyle = "red"
    this.ctx.fillRect(this.x, this.y, this.game.player.life / 10, this.height)
    this.ctx.strokeRect(this.x, this.y, this.width, this.height)

  }
}

