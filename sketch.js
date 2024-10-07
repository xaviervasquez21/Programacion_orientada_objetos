let posX, posY;
let velX, velY;
let diam;
let rad;
let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);

  rad = ceil(random(80, 25));
  diam = rad * 2;

  posX = random(rad, width - rad);
  posY = random(rad, height - rad);

  velX = random(20);
  velY = random(20);
  bgColor = color(100, 100, 255); // Color inicial de fondo (azul)
}

function draw() {
  background(bgColor);
  fill(255);
  noStroke();

  posX += velX;
  posY += velY;

  // Verifica si el círculo toca el borde derecho o izquierdo
  if (posX > width - rad || posX < rad) {
    velX *= -1; // Invierte la dirección en X
    cambiarColorFondo(); // Cambia el fondo a un color frío
  }

  // Verifica si el círculo toca el borde inferior o superior
  if (posY > height - rad || posY < rad) {
    velY *= -1; // Invierte la dirección en Y
    cambiarColorFondo(); // Cambia el fondo a un color frío
  }

  circle(posX, posY, diam);
}

function cambiarColorFondo() {
  // Define una lista de colores fríos
  const coloresFrios = [
    color(0, 0, 255), // Azul
    color(0, 128, 255), // Azul claro
    color(0, 255, 255), // Cian
    color(0, 255, 128), // Verde agua
    color(128, 0, 255), // Púrpura
    color(64, 224, 208), // Turquesa
    color(0, 102, 204), // Azul oscuro
  ];

  // Cambia el color de fondo a uno aleatorio de la lista
  bgColor = random(coloresFrios);
}
