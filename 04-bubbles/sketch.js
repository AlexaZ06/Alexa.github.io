// Musical Bubbles
// Alexandra Zhu
// Date
//
// Extra for Experts:
// - https://p5js.org/reference/#/p5/WEBGL
// - https://p5js.org/examples/3d-geometries.html

// song list
// the songs were downloaded from YouTube
// - Merry-go-round of Life
// - Always With Me
// - The Path of the wind

// create array and variables
let bubbleArray = [];
let merrygoround;
let alwayswithme;
let pathofthewind;

function preload(){
  merrygoround = loadSound("music-merry-go-round-of-life.mp3");
  alwayswithme = loadSound("music-always-with-me.mp3");
  pathofthewind = loadSound("music-path-of-the-wind.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  makeBubble();
  camera(width, height/2, height);
  currenttime = millis();
  timelimit = 600000
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


// play sound
function mousePressed(){
  for (let i = 0; i <= bubbleArray.length; i++){
    let theBubble = bubbleArray[i];

    // song that plays based on spheres predominant colour
    if (!alwayswithme.isPlaying()
    && theBubble.r >= theBubble.g
    && theBubble.r >= theBubble.b ){
      merrygoround.stop();
      pathofthewind.stop();
      alwayswithme.play();
    }
    else if (!pathofthewind.isPlaying()
    && theBubble.g >= theBubble.r
    && theBubble.g >= theBubble.b){
    alwayswithme.stop();
    merrygoround.stop();
    pathofthewind.play();
    }
    else if (!merrygoround.isPlaying() 
    && theBubble.b >= theBubble.g 
    && theBubble.b >= theBubble.r){
      alwayswithme.stop();
      pathofthewind.stop();
      merrygoround.play();
    }
  }
  // reset value of i
}
  
function bubbleMovement(){
  for (let theBubble of bubbleArray){
    // move
    theBubble.x = noise(theBubble.time)*width - width/2;
    theBubble.y = noise(theBubble.time - 300)*height - height/2;
    theBubble.time += 0.0001;
  }
}

//display bubbles on screen
function displayBubble() {
  background("white");

  for (let theBubble of bubbleArray){
    // the bubble
    fill(theBubble.r, theBubble.g, theBubble.b);
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
    r: random(255),
    g: random(255),
    b: random(255),
  };
  bubbleArray.push(bubble);
}

