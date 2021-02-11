
// var gDebugMode = true;

// let futuraBook;

var img;

function preload(){
  // futuraBook = loadFont("assets/futuraBook.ttf")
  img = loadImage("assets/blueLogo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  
  // textAlign(CENTER);

 }


// Draw code goes here
function draw() {
   background(100,100,100);

   image(img, width/2, height/2);




   // textSize(100);
   // fill(0,0,255);
   // textFont(futuraBook);
   // text("JOSHUA", width/2, height/2-100);
   // text("WILDER", width/2, height/2);
   // text("OAKLEY", width/2, height/2+100);


 // if( gDebugMode == true){
 //    drawDebugInfo();
 // }
}



// function drawDebugInfo(){
//   fill(255);
//   textSize(12);
//   text("x: " + mouseX + " y:" + mouseY, 20, height - 20);

// } 
// function keyTyped() {
//   if (key === ' ') {
//     gDebugMode = !gDebugMode;
//   }
// }



