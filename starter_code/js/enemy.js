class Enemy {
  constructor(width, height, ctx, game) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.ctx = ctx;
    this.x = this.canvasWidth * 0.8;
    this.dx = 4;
    this.y0 = this.canvasHeight * 0.5;
    this.life = 300;
    this.game = game;
    this.y = this.y0;
    this.velY = -1;

    this.img = new Image();
    this.img.src = "starter_code/img/zombieWalk.png";

    //Número de imagenes para la animación
    this.img.frames = 9;
    this.img.frameIndex = 0;

    // Medidas de la imagen en window
    this.width = 130;
    this.height = 190;
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
    if (framesCounter % 6 === 0 && this.life > 0) {
      this.img.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 8) this.img.frameIndex = 0;
    }
  }

  attack() {
    this.img.src = "starter_code/img/zombieAttack.png";
    this.game.player.life -= 1;
    console.log(this.game.player.life);
  }

  move() {
    this.x -= this.dx;
  }
}
