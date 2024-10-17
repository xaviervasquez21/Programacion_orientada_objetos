class Particula {
  // Este método constructor se ejecuta automáticamente al crear una nueva instancia de Particula.
  constructor(_x, _y) {
    // Se establecen las posiciones iniciales en el eje X y Y según los parámetros recibidos.
    this.posx = _x;
    this.posy = _y;

    // Se inicializa una variable booleana para indicar si la partícula está "viva".
    this.estaViva = true;

    // Se define el tiempo de vida de la partícula, un número aleatorio entre 10 y 200.
    this.tVida = round(random(10, 200));

    // Se establece el tamaño inicial de la partícula.
    this.tamano = 50;
  }

  // Este método se llama para actualizar el estado de la partícula en cada fotograma.
  update() {
    // Disminuye el tiempo de vida de la partícula en 1.
    this.tVida -= 1;

    // Verifica si el tiempo de vida ha llegado a cero o menos.
    if (this.tVida <= 0) {
      // Si el tiempo de vida se acaba, la partícula ya no está "viva".
      this.estaViva = false;

      // Termina el método para que no se ejecuten más cambios en la partícula.
      return;
    }

    // Incrementa la posición en el eje Y en 2, simulando un movimiento hacia abajo (como caída).
    this.posy += 2;

    // Modifica la posición en el eje X aleatoriamente entre -10 y 10, para un movimiento errático horizontal.
    this.posx += random(-10, 10);

    // Reduce el tamaño de la partícula en 0.5, simulando que se va desintegrando.
    this.tamano -= 0.5;
  }

  // Este método se llama para dibujar la partícula en pantalla con sus propiedades actuales.
  display() {
    // Establece el color de relleno de la partícula a blanco.
    fill(255);

    // Elimina el contorno para que la partícula se vea suave.
    noStroke();

    // Dibuja la partícula en forma de círculo en su posición actual (posx, posy).
    // Utiliza el tiempo de vida (tVida) como el tamaño del círculo, por lo que el tamaño depende de la vida restante.
    circle(this.posx, this.posy, this.tVida);
  }
}
