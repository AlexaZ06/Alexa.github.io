// Paint by Number
// Alexandra Zhu
// November XX 2023
//
// Extra for Experts:
//
// - Help from Mr Schellenberg to get colours from cat image
// - https://p5js.org/reference/#/p5/text

let grid;
const GRID_SIZE = 40;
let cellSize;
let cat;
let catcolour;
let blocknumber;

function preload(){
  cat = loadImage("cat.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);

  if (height > width) {
    cellSize = width/GRID_SIZE;
  }
  else {
    cellSize = height/GRID_SIZE;
  }
  
  if (GRID_SIZE >= 40){
    cat.resize(GRID_SIZE, GRID_SIZE);
    catcolour =   getCatColors(GRID_SIZE, GRID_SIZE);
    blocknumber = number(GRID_SIZE,GRID_SIZE);
  }
  else {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
}

function draw() {
  displayGrid();
}

//fill in cell with colour when 
function mousePressed() {
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);

  toggleCell(x, y);   //current cell
}

function toggleCell(x, y) {
  //check that we are within the grid, then toggle
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
    // check for right colour then toggle to colour
  }
}

//show image
function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (GRID_SIZE >= 40){
        fill("green");
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(catcolour[y][x]);
        textAlign(LEFT,BOTTOM);
        text(blocknumber[y][x], x*cellSize, y*cellSize);
      }
      else{
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
    }
  }
}

//create grid
function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

//gather colours of cat
function getCatColors(cols, rows) {
  let colours = [];
  for (let y = 0; y < rows; y++) {
    colours.push([]);
    for (let x = 0; x < cols; x++) {
      colours[y].push(cat.get(x, y));
    }
  }
  return colours;
}

//assign numbers to colours
// opacity messes with the colour
function number(cols, rows) {   
  let blocknum = [];
  for (let y = 0; y < rows; y++) {
    blocknum.push([]);
    for (let x = 0; x < cols; x++) {

      // white
      if(catcolour[y][x][0] >= 200 && catcolour[y][x][1] >= 200 && catcolour[y][x][2] >= 200
         || catcolour[y][x][0] <= 40 && catcolour[y][x][1] <= 40 && catcolour[y][x][2] <= 40 && catcolour[y][x][3] <= 40){
        blocknum[y].push(0);
      }

      // light grey
      else if(catcolour[y][x][0] < 200 && catcolour[y][x][0] >= 140 &&
              catcolour[y][x][1] < 200 && catcolour[y][x][1] >= 140 &&
              catcolour[y][x][2] < 200 && catcolour[y][x][2] >= 140){
        blocknum[y].push(1);
      }

      // dark grey
      else if(catcolour[y][x][0] < 140 && catcolour[y][x][0] > 40 &&
              catcolour[y][x][1] < 140 && catcolour[y][x][1] > 40 &&
              catcolour[y][x][2] < 140 && catcolour[y][x][2] > 40){
        blocknum[y].push(2);
      }

      // pink 
      else if(catcolour[y][x][0] > catcolour[y][x][1] && catcolour[y][x][0] > catcolour[y][x][2]){
        blocknum[y].push(3);
      }

      // black
      else if(catcolour[y][x][0] <= 40 && catcolour[y][x][1] <= 40 && catcolour[y][x][2] <= 40
              || catcolour[y][x][3] >= 200){
        blocknum[y].push(4);
      }
        
    }
  }
  return blocknum;
}