// Paint by Number
// Alexandra Zhu
// November XX 2023
//
// Extra for Experts:
// Please consider the text in the box as my extre for experts
// - https://p5js.org/reference/#/p5/text was used for help
//
// - Help from Mr Schellenberg to get colours from cat image

//set variables and constants
let grid;
const GRID_SIZE = 40;
let cellSize;
let cat;
let catcolour;
let blocknumber;
let colour;

//load image to colour
function preload() {
  cat = loadImage("cat.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);

  if (height > width) {
    cellSize = width / GRID_SIZE;
  }
  else {
    cellSize = height / GRID_SIZE;
  }

  if (GRID_SIZE >= 40) {
    cat.resize(GRID_SIZE, GRID_SIZE);
    catcolour = getCatColors(GRID_SIZE, GRID_SIZE);
    blocknumber = number(GRID_SIZE, GRID_SIZE);
  }
  else {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
}

function draw() {
  displayGrid();
}

//change colour of fill
function keyTyped() {
  if (key === "w") {
    colour = 0;
  }
  else if (key === "l") {
    colour = 1;
  }
  else if (key === "g") {
    colour = 2;
  }
  else if (key === "b") {
    colour = 3;
  }
  else if (key === "w") {
    colour = 4;
  }
}

//fill in cell with colour when 
function mousePressed() {
  let y = Math.floor(mouseY / cellSize);
  let x = Math.floor(mouseX / cellSize);

  toggleCell(x, y);   //current cell
}

function toggleCell(x, y) {
  //check that we are within the grid, then toggle
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
    // check for right colour then toggle to colour
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        if (blocknumber[y][x] === 0 && colour === 0) {
          fill("white");
        }
        else if (blocknumber[y][x] === 1 && colour === 1) {
          fill("lightgrey");
        }
        else if (blocknumber[y][x] === 2 && colour === 2) {
          fill("grey");
        }
        else if (blocknumber[y][x] === 3 && colour === 3) {
          fill("pink");
        }
        else if (blocknumber[y][x] === 4 && colour === 4) {
          fill("black");
        }
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
}

// //colour/fill in cells
// function colouredGrid(){
//   for (let y = 0; y < GRID_SIZE; y++) {
//     for (let x = 0; x < GRID_SIZE; x++) {
//       if (blockNumber[y][x] === 0 && colour === 0) {
//         fill("white");
//       }
//       else if (blockNumber[y][x] === 1 && colour === 1) {
//         fill("lightgrey");
//       }
//       else if (blockNumber[y][x] === 2 && colour === 2) {
//         fill("grey");
//       }
//       else if (blockNumber[y][x] === 3 && colour === 3) {
//         fill("pink");
//       }
//       else if (blockNumber[y][x] === 4 && colour === 4) {
//         fill("black");
//       }
//       rect(x * cellSize, y * cellSize, cellSize, cellSize);
//     }
//   }
// }

//show image in numbers
function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (GRID_SIZE >= 40) {
        //block colour
        fill("lightblue");
        rect(x * cellSize, y * cellSize, cellSize, cellSize);

        //fill in grid with numbers
        fill("black");
        textAlign(CENTER, CENTER);
        text(blocknumber[y][x], x * cellSize, y * cellSize, cellSize, cellSize);
      }

      else {
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
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
function number(cols, rows) {
  let blocknum = [];
  for (let y = 0; y < rows; y++) {
    blocknum.push([]);
    for (let x = 0; x < cols; x++) {

      //white
      if (catcolour[y][x][0] >= 210 && catcolour[y][x][1] >= 210 && catcolour[y][x][2] >= 210
        || catcolour[y][x][3] <= 40) {
        blocknum[y].push(0);
      }

      //light grey
      else if (catcolour[y][x][0] < 210 && catcolour[y][x][0] >= 140 &&
        catcolour[y][x][1] < 210 && catcolour[y][x][1] >= 140 &&
        catcolour[y][x][2] < 210 && catcolour[y][x][2] >= 140) {
        blocknum[y].push(1);
      }

      //dark grey
      else if (catcolour[y][x][0] < 140 && catcolour[y][x][0] > 40 &&
        catcolour[y][x][1] < 140 && catcolour[y][x][1] > 40 &&
        catcolour[y][x][2] < 140 && catcolour[y][x][2] > 40) {
        blocknum[y].push(2);
      }

      //pink 
      else if (catcolour[y][x][0] > catcolour[y][x][1] && catcolour[y][x][0] > catcolour[y][x][2]) {
        blocknum[y].push(3);
      }

      //black
      else if (catcolour[y][x][0] <= 40 && catcolour[y][x][1] <= 40 && catcolour[y][x][2] <= 40
        || catcolour[y][x][3] >= 200) {
        blocknum[y].push(4);
      }

    }
  }
  return blocknum;
}