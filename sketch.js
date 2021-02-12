let logo;

function preload(){
  logo = loadImage("assets/blueLogo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    frameRate(1);
    textSize(24);
    textAlign(CENTER);  
 }

// Draw code goes here
function draw() {
  background(255);
   text(frameCount, 90, 90);  //printing framerate to screen

   drawLogo();
}

function drawLogo(){
   
	let y = 500;

	translate(width/2, height/2);
    
    for( let i = 0; i < y; i ++) {
      image(logo, 0, 0, logo.width / i, logo.height / i);
  }   
 }











