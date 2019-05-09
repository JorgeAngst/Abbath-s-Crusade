class Player {
  constructor(width, height, ctx, keys, game) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.ctx = ctx;
    this.keys = keys;
    this.x = this.canvasWidth * 0.08;
    this.y0 = this.canvasHeight * 0.5;
    this.life = 1000;
    this.game = game;
    this.attacking = false;

    // Posición original en el suelo
    this.y = this.y0;
    this.velY = 1;

    // Imagen player
    this.img = new Image();
    this.img.src = "starter_code/img/vikingWalk.png";

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
    this.setListeners();
  }

  setListeners() {
    document.onkeydown = event => {
      if (event.keyCode === this.keys.TOP_KEY) {
        this.img.src = "starter_code/img/vikingJump.png";
        this.height += 100;
        this.width += 100;
        this.y -= 5;
        this.vy -= 10;
      }

      if (event.keyCode == this.keys.SPACE) {
        this.img.src = "starter_code/img/vikingAttack.png";
        this.attacking = true;
        setTimeout(() => (this.attacking = false), 1000);
        this.attack();
      }

      // if (event.keyCode == this.keys.RIGHT_KEY) {
      //   this.img.src = "starter_code/img/vikingRun.png";
      //   console.log("run");
      // }
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
    if (
      this.game.enemies[0] &&
      (this.game.enemies[0].x - (this.x + this.width) < 200)
    ) {
      this.game.enemies[0].life -= 100;
      console.log(this.game.enemy.life);
    }
  }

  move() {
    var gravity = 0.4;

    if (this.y >= this.y0) {
      if (!this.attacking) this.img.src = "starter_code/img/vikingWalk.png";
      this.width = 150;
      this.height = 200;
      this.velY = -17;
      this.y = this.y0;
    } else {
      this.velY += gravity;
      this.y += this.velY;
    }
  }
}
