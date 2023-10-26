// Game of life
// October 26 2023


let grid;
let cellSize;
const GRID_SIZE = 15;
let autoplay = true;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (height < width){
    cellSize = height/GRID_SIZE;
  }
  else if (height > width){
    cellSize = width/GRID_SIZE; 
  }

  grid = createGrid(cellSize,cellSize);
}

function draw() {
  background(220);
  if (autoplay && frameCount%10 === 0){
    grid = nextTurn();
  }
  displayGrid();
}

function mousePressed() {
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);

  toggleCell(x,y); //current cell

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
  else if (key === " "){
    grid = nextTurn();
  }
  else if (key === "a"){
    autoplay = !autoplay;
  }
}

function nextTurn() {
  let nextturnGrid = createEmptyGrid(GRID_SIZE,GRID_SIZE);

  //look at every cell 
  for (let y = 0; y < GRID_SIZE; y++){
    for (let x = 0; x < GRID_SIZE; x++){
      // count neighbours
      let neighbours = 0;

      //look at cells in 3x3 grid
      for (let i = -1; i <= 1; i++){
        for (let j = -1; j <= 1; j ++){
          // edge case check
          if (y+i >= 0 && y+i <= GRID_SIZE && x+j >=0 && x+j <= GRID_SIZE){
            neighbours += grid[y+i][x+j];
          }
        }
      }

      // don't count self
      neighbours -= grid [y][x];

      // apply rules 
      if (grid[y][x] === 1){ //alive
        if (neighbours === 2 || neighbours === 3){
          //stay alive
          nextturnGrid[y][x] = 1;
        }
        else {
          //died - lonely/overpopulation
          nextturnGrid[y][x] = 0;
        }
      }

      if (grid[y][x] === 0){ // dead
        if (neighbours === 3){
          // new birth
          nextturnGrid[y][x] = 1;
        }
        else {
          //stay dead
          nextturnGrid[y][x] = 0;
        }
      }
    }
  }
  return nextturnGrid;
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