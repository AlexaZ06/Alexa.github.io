// Paint by Number
// Alexandra Zhu
// November XX 2023
//
// Extra for Experts:
// - pixalate image https://editor.p5js.org/aferriss/sketches/DmcJX_3pg 
// - https://stackoverflow.com/questions/54707586/getting-pixel-values-of-images-in-p5js#:~:text=Lastly%2C%20to%20get%20the%20color,which%20are%20not%20strictly%20black.


let grid;
const GRID_SIZE = 40;
let cellSize;
let cat;
let catcolour = [];

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
  
  cat.resize(GRID_SIZE, GRID_SIZE);
}

function draw() {
  displayGrid();
}

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

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      fill(cat.get(x, y));
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

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