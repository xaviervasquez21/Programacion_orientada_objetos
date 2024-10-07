let posX, posY;
let velX, velY;
let fiam;
let rad;

function setup() {
  createCanvas(windowWith, windowHeight);

  //diam = int (random( 10 , 50));
  //console.log(diam);
  //radio = diam / 2;
  red = ceil(random(200, 25));
  diam = rad * 2;

  posX = random(rad, widtdh - rad);
  posY = random(rad, height - rad);

  velX = random(-1, 1);
  velY = random(-1, 1);
}

function draw() {
  background(100);
  fill(255);
  noStoke();

  posX += velX;
  posY += velY;

  if (posX > widtdh) {
    console.log("se fue");
  }

  circle(posX, posY, diam);
}
