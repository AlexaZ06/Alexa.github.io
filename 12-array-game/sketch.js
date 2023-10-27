// Paint by Number
// Alexandra Zhu
// October XX 2023
//
// Extra for Experts:
// - pixalate image https://editor.p5js.org/aferriss/sketches/DmcJX_3pg 
// - 


let grid;
let cellSize;
const GRID_SIZE = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (height < width){
    cellSize = height/GRID_SIZE;
  }
  else if (height > width){
    cellSize = width/GRID_SIZE;
  }

  grid = createEmptyGrid(cellSize,cellSize);
}

function draw() {
  background(220);
}

// empty grid to fill in
function createEmptyGrid(cols,rows){
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < cols; x++){
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function toggleCell(x, y) {
  //check that we are within the grid, then toggle
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
  }
}