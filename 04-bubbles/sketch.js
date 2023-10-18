// Musical Bubbles
// Alexandra Zhu
// Date
//
// Extra for Experts:
// - https://p5js.org/reference/#/p5/WEBGL
// - https://p5js.org/examples/3d-geometries.html

// song list
// - Merry-go-round of Life
// - Always With Me
// - The Path of the wind

// create array
let bubbleArray = [];
let z = 10;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  makeBubble();
  // debugMode();
  camera(width/4, height/2, height/2);
}

function draw() {
  displayBubble();
  bubbleMovement();
}

// spawn multiple
function keyTyped() {
  if (key === " "){
    let someBubble = makeBubble();
  }
}

function bubbleMovement(){
  for (let theBubble of bubbleArray){
    // move

    theBubble.x = noise(theBubble.time)*width - width/2;
    theBubble.y = noise(theBubble.time - 300)*height - height/2;
    theBubble.time += 0.001;
    console.log("x: " + theBubble.x + " \ty: " + theBubble.y);
  }
}

//display bubbles on screen
function displayBubble() {
  background("white");

  for (let theBubble of bubbleArray){
    // the bubble
    fill(theBubble.colour);
    translate(theBubble.x, theBubble.y, theBubble.z);
    rotateZ(frameCount* 0.001);
    rotateX(frameCount* 0.001);
    rotateY(frameCount* 0.001);
    sphere(theBubble.radius);
  }
}

// set up information to create a bubble
function makeBubble() {
  let bubble = {
    x: random(-width/2, width/2),
    y: random(-height/2, height/2),
    z: random(-10, 10),
    radius: random(25,75),
    time: random(1000),
    colour: color(random(255), random(255), random(255), random(255)),
  };
  bubbleArray.push(bubble);
}

