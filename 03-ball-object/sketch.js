// Ball Object Notation Demo
// October 5


let theBall = {
  x: 100,
  y: 100,
  radius: 25,
  r:255,
  g:0,
  b:0,
  dx:-4,
  dy:3,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  moveBall();
  displayBall();
}

function displayBall() {
  fill(theBall.r, theBall.g, theBall.b);
  circle(theBall.x, theBall.y, theBall.radius*2);
}

function moveBall() {
  // off right
  if (theBall.x > windowWidth){
    theBall.x = 0;
  }

  // off bottom
  if (theBall.y > windowHeight){
    theBall.y = 0;
  }

  // off left
  if (theBall.x < 0){
    theBall.x = windowWidth;
  }

  // off top
  if (theBall.y < 0){
    theBall.y = windowHeight;
  }
  theBall.x += theBall.dx;
  theBall.y += theBall.dy;
}