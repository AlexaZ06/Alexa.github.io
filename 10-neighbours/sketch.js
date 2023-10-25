// 2d Grid Neightbours
// October 25 2023


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
  displayGrid();
}

function mousePressed() {
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);

  toggleCell(x,y); //current cell
  toggleCell(x,y-1); //north neighbour
  toggleCell(x,y+1); //south neighbour
  toggleCell(x+1,y); //east neighbour
  toggleCell(x-1,y); //west neighbour
}

function toggleCell(x,y){
  // check that we are in frame, then toggle
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE){
    if (grid[y][x] === 0){
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1){
      grid[y][x] = 0;
    }
  }
}

function keyTyped() {
  if (key === "r"){
    grid = createGrid(cellSize,cellSize);
  }
  else if (key === "e"){
    grid = createEmptyGrid(cellSize,cellSize);
  }
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++){
    for (let x = 0; x < GRID_SIZE; x++){
      if (grid[y][x] === 1){
        fill("black");
      }
      else if (grid[y][x] === 0){
        fill("white");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createGrid(cols,rows){
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < cols; x++){
      if (random(100) < 50){
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}

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