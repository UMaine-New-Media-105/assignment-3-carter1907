//Carter Lambo
// A3Q4


  var gloveX = -50
  var gloveY = -300
 var button;
var paused = true;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER)
  textSize(25)
   button = createButton("Play / Pause")
  noLoop();
  
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
  background(120, 220, 120);
 
 
  
 levelOne();
  
 moveGloves(mouseX,350,1)
  
  
  button.mousePressed(togglePlaying);

// making the ball fall
  ellipse2.y = ellipse2.y + random(1,5)
  if (ellipse2.y > 400) {
  ellipse2.y = 0
  ellipse2.x = random(10,390);
  }

  
  {
  myEllipse( ellipse2 );
    
  }
 
  
  //Draw a row
  
  for ( let columnsDrawn = 0 ; columnsDrawn < groupsPerRow ;               columnsDrawn++){
  let offsetRight = columnsDrawn * groupWidth;
    
    
  ellipse2.xCurrent = ellipse2.x + offsetRight;
   
    

  myEllipse(ellipse2);
   
  }
  
}

function togglePlaying(){
  if (paused) {
    loop()
    paused = false;
  } else {
    noLoop()
    paused = true;
  }
}

//baseball
function myEllipse( jsonObjectIn_ ){
  push();
  translate( jsonObjectIn_.xCurrent , jsonObjectIn_.y);
  noStroke();
  fill( jsonObjectIn_.c );
  ellipse(0, 0, jsonObjectIn_.w, jsonObjectIn_.h);
  pop();
  
  
   
}
//Baseball Glove
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
//movement of the glove / controler
function moveGloves(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  glove();
  pop();
}
  


function levelOne(){
  
  text("level 1", width/2, height - 375)
 
  
  
  //var distToBall = dist(, gloveX, gloveY)
  //var distToBall = dist(ellipse.x,ellipse.y, gloveX, gloveY)
 // if(distToBall < glove){
    // ellipse2.y = ellipse2.y + random(1,5)
  //if (ellipse2.y > 400) {
 // ellipse2.y = 0
 // ellipse2.x = random(10,390);
  
  


}
