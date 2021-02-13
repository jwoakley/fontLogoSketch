let logo;

// var numColumns = 20;
// var numRows = 14;


//make a global variable for width and height as x and y so that
//we can change it once and not have to hunt through the code for all instances

// Rotation
var r = 0;
var rotIncrement = 1;


// Scaling of image
var div = 1;
var divIncrement = .15;
var maxDiv = 20;
var minDiv = 1.0;
var logoSize = 300;

function preload(){
  logo = loadImage("assets/blueLogo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    frameRate(10);

 }

// Draw code goes here
function draw() {
  background(255);

  doRotation();
  drawLogo();
  changeScale();
}



function drawLogo(){

  image(logo, width/3, height/3, logoSize / div, logoSize / div); 
}


function doRotation() {
  // move to origin and perform the translation
  translate(width/3, height/3);
  r = r + rotIncrement;
  rotate(r)

  // move to original spot
  translate(-width/3, -height/3);
}

function changeScale() {
  div += divIncrement;

  // check for min/max then flip directions
  if( div > maxDiv ) {
    div = maxDiv;
    divIncrement = -divIncrement;
  }
  else if( div < minDiv ){
    div = minDiv;
    divIncrement = -divIncrement;
  }
}








