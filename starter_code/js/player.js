class Player {
  constructor(width, height, ctx, keys, game) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.ctx = ctx;
    this.keys = keys;
    this.x = this.canvasWidth * 0.08;
    this.y0 = this.canvasHeight * 0.5;
    this.enemy = game.enemy;

    // Posición original en el suelo
    this.y = this.y0;
    this.velY = 1;

    // Imagen player
    this.img = new Image();
    this.img.src = "img/vikingWalk.png";

    // Imagen attack

    //Número de imagenes para la animación
    this.img.frames = 9;
    this.img.frameIndex = 0;

    // Medidas de la imagen en window
    this.width = 150;
    this.height = 200;

    // this.setListeners();
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
    this.setListeners();
  }

  setListeners() {
    document.onkeydown = event => {
      if (event.keyCode === this.keys.TOP_KEY) {
        this.img.src = "img/vikingJump.png";
        this.height += 100;
        this.width += 100;
        this.y -= 5;
        this.vy -= 10;
      } else if (event.keyCode == this.keys.SPACE) {
        this.attack();
      }
    };
  }

  animateImg(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 6 === 0) {
      this.img.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 8) this.img.frameIndex = 0;
    }
  }

  attack() {
    //this.img.src = "img/vikingAttack.png";
    // this.enemy.life -= 100;
  }

  move() {
    var gravity = 1;

    if (this.y >= this.y0) {
      this.img.src = "img/vikingWalk.png";
      this.width = 150;
      this.height = 200;
      this.velY = -20;
      this.y = this.y0;
    } else {
      this.velY += gravity;
      this.y += this.velY;
    }
  }
}
