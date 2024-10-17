class Particula {
  constructor(_x, _y) {
    this.posx = _x; // Posición inicial en X.
    this.posy = _y; // Posición inicial en Y.
    this.estaViva = true; // La partícula comienza "viva".
    this.tVida = round(random(20, 100)); // Tiempo de vida aleatorio entre 20 y 100 fotogramas.
    this.tamano = 20; // Tamaño inicial de la partícula.

    // Definir colores aleatorios dentro de un rango para simular fuego.
    this.color = color(
      random(200, 255), // Rojo intenso.
      random(100, 200), // Naranja medio.
      random(0, 100) // Amarillo bajo.
    );
  }

  update() {
    this.tVida -= 1; // Reducir el tiempo de vida en cada fotograma.
    if (this.tVida <= 0) {
      this.estaViva = false; // Marcar la partícula como "muerta" si su tiempo de vida se acaba.
      return;
    }

    // Movimiento hacia arriba para simular que el fuego sube.
    this.posy -= 2;
    this.posx += random(-1, 1); // Movimiento horizontal errático pero reducido.

    // Reducir ligeramente el tamaño para que parezca que la partícula se desvanece.
    this.tamano *= 0.96; // Disminuye de manera proporcional.
  }

  display() {
    // Establecer el color de la partícula con opacidad basada en su tiempo de vida restante.
    let alpha = map(this.tVida, 0, 100, 0, 255); // Transparencia entre 0 y 255.
    fill(red(this.color), green(this.color), blue(this.color), alpha);

    noStroke(); // Sin borde para darle una apariencia suave.

    // Dibujar la partícula en su posición actual con el tamaño y opacidad asignados.
    ellipse(this.posx, this.posy, this.tamano, this.tamano);
  }
}
