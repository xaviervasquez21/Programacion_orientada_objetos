/*let particulas = []; // Array para almacenar las partículas activas.

function setup() {
  createCanvas(windowWidth, windowHeight); // Crear un lienzo que ocupe toda la ventana.
}

function draw() {
  background(50, 50, 50, 50); // Fondo gris oscuro con un poco de opacidad para simular humo.

  // Crear una nueva partícula en la posición actual del mouse.
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula); // Agregar la nueva partícula al array.

  // Actualizar y dibujar cada partícula.
  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update(); // Actualizar posición y estado de la partícula.
    particulas[i].display(); // Dibujar la partícula.
  }

  // Eliminar las partículas "muertas" del array.
  for (let i = particulas.length - 1; i >= 0; i--) {
    if (!particulas[i].estaViva) {
      particulas.splice(i, 1); // Remover la partícula si ya no está "viva".
    }
  }

  console.log(particulas.length); // Mostrar en la consola la cantidad de partículas activas.
}*/

let particulas = []; // Array para almacenar las partículas activas.

function setup() {
  createCanvas(windowWidth, windowHeight); // Crear un lienzo que ocupe toda la ventana.
}

function draw() {
  background(50, 50, 50, 50); // Fondo gris oscuro con un poco de opacidad para simular humo.

  // Crear una nueva partícula en la posición actual del mouse y agregarla al array.
  particulas.push(new Particula(mouseX, mouseY));

  // Actualizar, dibujar cada partícula y eliminar las partículas "muertas" del array usando filter.
  particulas = particulas.filter((p) => {
    p.update(); // Actualizar posición y estado de la partícula.
    p.display(); // Dibujar la partícula.
    return p.estaViva; // Mantener solo las partículas "vivas" en el array.
  });

  console.log(particulas.length); // Mostrar en la consola la cantidad de partículas activas.
}

for (let i = 0; i < particulas.length; i++) {
  line(
    particulas[i].posx,
    particulas[i].posy,
    particulas[i + 1].posx,
    particulas[i + 1].posy
  );
}
