// let logo;

// function preload(){
//   logo = loadImage("assets/blueLogo.png");
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//     imageMode(CENTER);
//     frameRate(1);
//     textSize(24);
//     textAlign(CENTER);  
//  }

// // Draw code goes here
// function draw() {
//   background(255);
//    text(frameCount, 90, 90);  //printing framerate to screen

//    drawLogo();
// }

// function drawLogo(){
   
// 	let y = 900;

// 	translate(width/2, height/2);
    
//     for( let i = 0; i < y; i ++) {
//       image(logo, 0, 0, logo.width / i, logo.height / i);

//   }   
//  }

let logo;


// Rotation
var r = 0;
var rotIncrement = 1;

// Scaling of image
var div = .95;
var divIncrement = .15;
var maxDiv = 20;
var minDiv = 1.0;
var logoSize = 500;


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
  // text(frameCount, 90, 90);  //printing framerate to screen

  doRotation();
  drawLogo();
  changeScale();
}

function drawLogo(){
  image(logo, width/2, height/2, logoSize / div, logoSize / div); 
 }


function doRotation() {
  // move to origin and perform the translation
  translate(width/2, height/2);
  r = r + rotIncrement;
  rotate(r)

  // move to original spot
  translate(-width/2, -height/2);
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








