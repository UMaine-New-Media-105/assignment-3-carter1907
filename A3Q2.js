/*
Carter Lambo
NMD 105
Creating a game
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  moveGloves(50, 350, 1)
  // end of draw
}
function glove() {
  push();
  translate(-50, -350);
  if(mouseIsPressed){
    fill('tan')
  } else{
  fill("brown");}
  stroke("black");
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
  translate(mouseX, mouseY); // create movement of glove() but we need to get it to stay at propper height.
  scale(s);
  glove();
  pop();
}
