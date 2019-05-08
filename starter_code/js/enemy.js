class Enemy {
  constructor(width, height, ctx, game) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.ctx = ctx;
    this.x = this.canvasWidth * 1;
    this.y0 = this.canvasHeight * 0.5;
    this.player = game.player;

    this.y = this.y0;
    this.velX = -1;

    this.img = new Image();
    this.img.src = "img/zombieWalk.png";

    //Número de imagenes para la animación
    this.img.frames = 9;
    this.img.frameIndex = 0;

    // Medidas de la imagen en window
    this.width = 150;
    this.height = 200;
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      0,
      Math.floor(this.img.width / this.img.frames),
      this.img.height,
      this.x,
      this.y,
      this.width,
      this.height
    );

    this.animateImg(framesCounter);
  }

  animateImg(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 6 === 0) {
      this.img.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 8) this.img.frameIndex = 0;
    }
  }
}
