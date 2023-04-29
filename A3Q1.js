/*
Carter lambo
nmd 105
creating a sprite
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Creating sprite (Baseball glove)

  moveGloves(200, 200, 1);
}
function glove() {
  push();
  translate(-50, -350);
  fill("tan");
  stroke("brown");
  ellipse(50, 350, 100);
  arc(50, 350, 80, 80, 0, PI + QUARTER_PI, CHORD);
  line(50, 390, 78, 345);
  line(30, 385, 66, 340);
  line(20, 375, 54, 335);
  line(11, 360, 40, 330);
  pop();
}
function moveGloves(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  glove();
  pop();
}
