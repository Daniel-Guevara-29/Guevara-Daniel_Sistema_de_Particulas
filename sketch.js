let sistema = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  p = new Particula();
}

function draw() {
  background(0, 255);

  let p = new Particula();
  sistema.push(p);

  for (let i = 0; i < sistema.length; i++) {
    if (sistema[i].estaMuerta) {
      sistema.splice(i, 1);
    }
  }

  for (let i = 0; i < sistema.length; i++) {
    sistema[i].actualizar();
    sistema[i].mostrar();
  }
}
