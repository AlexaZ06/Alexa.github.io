// Alexandra Zhu
// CS30 Interactive Scene Assignment
// October 1 2023
//
//I decided to use the mouse scroll function as my extra for experts

// variable list
let x;
let y;
let x1;
let y1;
let dx;
let dy;
let blockdx;
let blockdy;
let d;
let w = 20;
let r, g, b;
let c = false;
let n = 1;

function setup() {
  createCanvas(400, 400);
  // set some values
  x1 = random(width - w);
  y1 = random(height - w);
  dx = random(-5, 10);
  dy = random(-5, 10);
  blockdx = random(1, 5);
  blockdy = random(3, 7);
}

function draw() {
  checkerboardbg();
  sparkler();
  obstacle();
}

function mouseWheel() {
  // determined number of squares on checkerboard
  if (event.delta) {
    n += 1;
    return n;
  }
}

// makes circles to track mouse
function sparkler() {
  checkerboardbg();
  //set values for circles
  r = random(255);
  g = random(255);
  b = random(255);
  d = random(25, 60);
  dx = random(-5, 10);
  dy = random(-5, 10);

  if (key === "c") {
    noStroke();
    fill(r, g, b);
    circle(mouseX - dx, mouseY + dy, d);
  }
}

// more difficult background
function checkerboardbg() {
  for (x = 0; x <= width; x += width / n) {
    for (y = 0; y <= height; y += height / n) {
      if (!c) {
        fill(255);
      } 
      else {
        fill(0);
      }
      rect(x, y, width / n, height / n);
      c = !c;
    }
  }
}

// block you need to dodge
function obstacle() {
  // turns screen white if block is touched
  if (
    mouseX <= x1 + w &&
    mouseX + d >= x1 &&
    mouseY <= y1 + w &&
    mouseY + d > y1
  ) {
    background(255);
  } 
  else {
  // bouncing block
    obstacleBounce();
    displayBlock();
    blockMove();
  }
}

// show block
function displayBlock() {
  noStroke();
  fill(0);
  square(x1, y1, w);
}

// block's speed as it moves
function blockMove() {
  x1 += blockdx;
  y1 += blockdy;
}

// bouncing off the edge of the screen
function obstacleBounce() {
  // bounces left and right
  if (x1 + w >= width || x1 <= 0) {
    blockdx = blockdx * -1;
  }

  // bounces up and down
  if (y1 + w >= height || y1 <= 0) {
    blockdy = blockdy * -1;
  }
}
