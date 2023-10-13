// Nusical Bubbles
// Alexandra Zhu
// Date
//
// Extra for Experts:
// - https://stackoverflow.com/questions/1584854/how-to-draw-a-3d-sphere
// - https://www.geeksforgeeks.org/p5-js-sphere-function/
// - https://p5js.org/reference/#/p5/sphere 
// - https://p5js.org/reference/#/p5/WEBGL

let bubbleArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  makeBubble();
}

function draw() {
  background("white");
  
}

function makeBubble() {
  let bubble = {
    x: random(width),
    y: random(height),
    z: 0.5,
    xdetail: random(14,24),
    radius: random(10,50),
    time: random(2000),
    color: color(random(255), random(255), random(255), random(255)),
  };
  bubbleArray.push(bubble);
}