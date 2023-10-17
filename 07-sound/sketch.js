// Images and Sound Demo
// October 17 

let wolfchan;
let sound;
let bgsound;
let imsize = 0.5;

function preload(){
  wolfchan = loadImage("wolfchan.png");
  sound = loadSound("laser1.mp3");
  bgsound = loadSound("crystalcaves.mp3");

  bgsound.setVolume(0.5);
  sound.setVolume(1.0);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);

  // image(wolfchan, mouseX, mouseY, 50, 50);
  image(wolfchan, mouseX, mouseY, wolfchan.width * imsize, wolfchan.height * imsize);
}

function mousePressed(){
  sound.play();
  
  if (!bgsound.isPlaying()){
    bgsound.loop();
  }
}