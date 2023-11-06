class Particula {
  constructor() {
    this.estaMuerta = false;
    this.tiempoDeVida = Math.ceil(random(10, 100));

    this.pos = createVector(mouseX, mouseY);

    this.vel = createVector(0, random(0, 10));
    this.vel.rotate(random(360));

    this.g = createVector(1, -0.5);
    this.color = color(255, random(100, 200), 0, 100);
  }

  actualizar() {
    this.vel.add(this.g);
    this.pos.add(this.vel);
    this.tiempoDeVida -= 1;
    print(this.tiempoDeVida);

    if (this.tiempoDeVida <= 0) {
      this.estaMuerta = true;
      print("¡ups,meMori!");
    }
  }

  mostrar() {
    fill(this.color);
    circle(this.pos.x, this.pos.y, 20);
  }
}
