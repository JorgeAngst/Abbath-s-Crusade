class deadEnemy {
  constructor(width, height, ctx, game) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.ctx = ctx;
    this.x = this.canvasWidth * 0.8;
    this.dx = 1;
    this.y0 = this.canvasHeight * 0.55;
    //this.player = game.player;

    this.y = this.y0;
    this.velY = -1;

    this.img = new Image();
    this.img.src = "starter_code/img/deadZombie1.png";

    this.width = 200;
    this.height = 190;
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  move() {
    this.x -= this.dx;

    if (this.x < -this.width) this.x = 0;
  }
}
