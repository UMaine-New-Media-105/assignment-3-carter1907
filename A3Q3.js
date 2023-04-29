function setup() {
  createCanvas(400, 400);
  
  //Variable
  groupsPerRow = 1;
  groupWidth = width / groupsPerRow
  
  
  
  //JSON Objects

  ellipse2 = {
    x : random(390) ,
    y : mouseY ,
    sc : 1,
    c : "white" ,
    w : 20,
    h : 20
  }
 
  
  
}

function draw() {
  background(120, 200, 100);

  moveGloves(mouseX,350,1)

  
  ellipse2.y = ellipse2.y + .75
  if (ellipse2.y > 400) {
    ellipse2.y = 0

   ellipse2.x = random(10,390);
  
  }
  myEllipse( ellipse2 );
  
 
  
  //Draw a row
  
  for ( let columnsDrawn = 0 ; columnsDrawn < groupsPerRow ; columnsDrawn++){
    let offsetRight = columnsDrawn * groupWidth;
    
    
    ellipse2.xCurrent = ellipse2.x + offsetRight;
   
    

    myEllipse(ellipse2);
   
  }
  
}

function myEllipse( jsonObjectIn_ ){
  push();
  translate( jsonObjectIn_.xCurrent , jsonObjectIn_.y);
  noStroke();
  fill( jsonObjectIn_.c );
  ellipse(0, 0, jsonObjectIn_.w, jsonObjectIn_.h);
  pop();
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
  translate(x, y);
  scale(s);
  glove();
  pop();
}
