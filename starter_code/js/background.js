class Background {
  constructor(width, height, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "starter_code/img/cga_background_winter.png";
    this.width = width;
    this.height = height;

    this.x = 0;
    this.y = 0;

    this.dx = 1;
  }

  draw() {
    // this.img.onload = () => {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    this.ctx.drawImage(
      this.img,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
    //};
  }

  move() {
    this.x -= this.dx;

    if (this.x < -this.width) this.x = 0;
  }
}
