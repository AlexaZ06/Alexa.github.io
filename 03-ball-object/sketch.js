// Ball Object Notation Demo
// October 5

let theBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theBall = spawnBall();
}

function draw() {
  background(220);
  moveBall();
  displayBall();
}

function keyTyped() {
  if (key === " "){
    theBall = spawnBall();
  }
}

function spawnBall(){
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(15,30),
    r:random(255),
    g:random(255),
    b:random(255),
    dx:random(-5,5),
    dy:random(-5,5),
  };
  return theBall;
}

function displayBall() {
  fill(theBall.r, theBall.g, theBall.b);
  circle(theBall.x, theBall.y, theBall.radius*2);
}

function moveBall() {
  // off right
  if (theBall.x - theBall.radius > width){
    theBall.x = 0 - theBall.radius;
  }

  // off left
  else if (theBall.x < 0 - theBall.radius){
    theBall.x = width + theBall.radius;
  }

  // off bottom
  if (theBall.y - theBall.radius > height){
    theBall.y = 0 - theBall.radius;
  }

  // off top
  else if (theBall.y < 0 - theBall.radius){
    theBall.y = height + theBall.radius;
  }
  theBall.x += theBall.dx;
  theBall.y += theBall.dy;

  console.log(theBall.x, theBall.y);
}