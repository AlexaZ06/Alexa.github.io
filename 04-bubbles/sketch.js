// Musical Bubbles
// Alexandra Zhu
// Date
//
// Extra for Experts:
// - https://p5js.org/reference/#/p5/WEBGL
// - https://p5js.org/examples/3d-geometries.html


// create array
let bubbleArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  makeBubble();
}

function draw() {
  displayBubble();
  bubbleMove();
}

// spawn multiple
function keyTyped() {
  if (key === " "){
    let someBubble = makeBubble();
  }
}

// bubble moves around
function bubbleMove() {
  for (let theBubble of bubbleArray){

    // off right
    if (theBubble.x - theBubble.radius > width/2){
      theBubble.x = width/2*-1 - theBubble.radius;
    }
        
    // // off left
    // else if (theBubble.x < -width/2 - theBubble.radius){
    //   theBubble.x = width + theBubble.radius;
    // }
        
    // // off bottom
    // if (theBubble.y - theBubble.radius > height/2){
    //   theBubble.y = height/2* -1 - theBubble.radius;
    // }
        
    // // off top
    // else if (theBubble.y < -height/2 - theBubble.radius){
    //   theBubble.y = height/2 + theBubble.radius;
    // }
      
    // move
    theBubble.x = noise(theBubble.time)*width - width/2;
    theBubble.y = noise(theBubble.time - 300)*height - height/2;
    theBubble.time += 0.001;
  }
}

//display bubbles on screen
function displayBubble() {
  background("white");

  for (let theBubble of bubbleArray){
    // the bubble
    fill(theBubble.colour);
    translate(theBubble.x, theBubble.y, theBubble.z);
    push();
    rotateZ(frameCount* 0.01);
    rotateX(frameCount* 0.01);
    rotateY(frameCount* 0.01);
    sphere(theBubble.radius);
    pop();
  }
}

// set up information to create a bubble
function makeBubble() {
  let bubble = {
    x: random(-width/2, width/2),
    y: random(-height/2, height/2),
    z: random(-10, 10),
    radius: random(25,75),
    time: random(500),
    colour: color(random(255), random(255), random(255), random(255)),
  };
  bubbleArray.push(bubble);
}

