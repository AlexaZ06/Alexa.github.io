// Nusical Bubbles
// Alexandra Zhu
// Date
//
// Extra for Experts:
// - https://p5js.org/reference/#/p5/WEBGL
// - https://p5js.org/examples/3d-geometries.html

let bubbleArray = [];
let randx;
let randy;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  randx = random(-width/2, width/2)
  randy = random(-height/2, height/2)
  makeBubble();
}

function draw() {
  displayBubble();
  move();
}

// // spawn multiple
// function keyTyped() {
//   if (key === " "){
//     let someBubble = makeBubble();
//     bubbleArray.push(someBubble);
//   }
// }

// bubble moves around
function move() {
  for (let theBubble of bubbleArray){
    fill(theBubble.color);
    // move
    theBubble.x = noise(theBubble.time)*randx;
    theBubble.y = noise(theBubble.time - 100)*randy;
    theBubble.time += 0.001;
  }
}

//display bubbles on screen
function displayBubble() {
  background("white");
  for (let i = 0; i < bubbleArray.length; i++){
    let theBubble = bubbleArray[i];
    // the bubble
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
    z: random(-1000),
    radius: random(25,75),
    time: random(500),
    color: color(random(255), random(255), random(255), random(255)),
  };
  bubbleArray.push(bubble);
}

// // off the right
// if (theBubble.x - theBubble.radius > width/2){
//   theBall.x = 0 - theBall.radius;
// }

// // off left
// else if (theBubble.x < -width/2 - theBubble.radius){
//   theBubble.x = width/2 + theBubble.radius;
// }

// // off bottom
// if (theBubble.y - theBubble.radius > height/2){
//   theBubble.y = -height/2 - theBubble.radius;
// }

// // off top
// else if (theBubble.y < -height/2 - theBubble.radius){
//   theBubble.y = height/2 + theBubble.radius;
// }