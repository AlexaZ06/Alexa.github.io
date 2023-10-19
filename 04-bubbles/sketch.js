// Musical Bubbles
// Alexandra Zhu
// October 19 2023
//
// Use the space bar to spawn spheres that move oaround the screen. 
// There is a spotlight that follows the mouse. 
//If you click the mouse a song will play according to the dominant colour of the sphere
//
// Extra for Experts:
// - https://p5js.org/reference/#/p5/WEBGL
// - https://p5js.org/examples/3d-geometries.html
// - please consider the WEBGL in 3d and the material of the spheres as my extra for experts
// - had help from Robert, Natalie, Mr. Schellenberg, and Alex

// song list
// the songs were downloaded from YouTube
// - Merry-go-round of Life
// - Always With Me
// - The Path of the wind

// create array and variables
let bubbleArray = [];
let camx = 0;
let camy = 0;
let camz;
let limit = 9000;
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

  // spawn first bubble
  makeBubble();

  // debugMode();
  // set camera
  camz = width;
  camera(camx, camy, camz);
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
  for (let theBubble of bubbleArray){
    if (mousex < theBubble.radius
    && mouseY < theBubble.radius){
      //if red is dominant
      if (!alwayswithme.isPlaying()
      && theBubble.r >= theBubble.g
      && theBubble.r >= theBubble.b ){
        merrygoround.stop();
        pathofthewind.stop();
        alwayswithme.play();
      }
      // if green is dominant
      else if (!pathofthewind.isPlaying()
      && theBubble.g >= theBubble.r
      && theBubble.g >= theBubble.b){
        alwayswithme.stop();
        merrygoround.stop();
        pathofthewind.play();
      }
      // if blue is dominant
      else if (!merrygoround.isPlaying() 
      && theBubble.b >= theBubble.g 
      && theBubble.b >= theBubble.r){
        alwayswithme.stop();
        pathofthewind.stop();
        merrygoround.play();
      }
    }
  }
}

//bubble moving on the screen
function bubbleMovement(){
  for (let theBubble of bubbleArray){
    // move
    theBubble.x = noise(theBubble.time)*width - width/2;
    theBubble.y = noise(theBubble.time - 300)*height - height/2;
    theBubble.time += 0.001;
  }
}

//display bubbles on screen
function displayBubble() {
  background("dimgray");
  let amblit = 100;
  let pntlit = 50;

  for (let theBubble of bubbleArray){
    // the bubble
    // fill(theBubble.r, theBubble.g, theBubble.b);
    normalMaterial();
    ambientLight(amblit, amblit, amblit);
    ambientMaterial(theBubble.r, theBubble.g, theBubble.b);
    pointLight(pntlit, pntlit, pntlit, (mouseX - width/2) * 1, (mouseY - height/2) * 1, 95);
    specularMaterial(theBubble.r / 5, theBubble.g / 5, theBubble.b / 5);
    translate(theBubble.x, theBubble.y, theBubble.z);
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

