// Project Title
// Alexandra Zhu
// Date
//
// Extra for Experts:
// - https://stackoverflow.com/questions/1584854/how-to-draw-a-3d-sphere
// - https://www.geeksforgeeks.org/p5-js-sphere-function/
// - https://p5js.org/reference/#/p5/sphere 

let bubble = {
  x: random(width),
  y: random(height),
  size: random(10,75),
  time: random(2000),
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
