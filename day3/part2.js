const fs = require("fs");
const path = require("path");

const isOutOfBounds = (grid, x, y) => {
  return y < 0 || y >= grid.length || x < 0 || x >= grid[y].length;
};

const isGear = (grid, x, y) => grid[y][x] == "*";

function solve(inputFile = "input.txt") {
  const input = fs.readFileSync(path.join(__dirname, inputFile), "utf-8");
  const grid = input.split(/\n/g).map((line) => line.split(""));

  let gearNumbers = {};

  for (let y = 0; y < grid.length; y++) {
    let currentNumber = "",
      checkNumber = false,
      gearLocation = null;

    for (let x = 0; x < grid[y].length; x++) {
      const matchNumber = grid[y][x].match(/\d/);

      if (matchNumber && !checkNumber) {
        checkNumber = true;
        currentNumber = "";
        gearLocation = null;
      }

      if ((x == grid[y].length - 1 || !matchNumber) && checkNumber) {
        if (gearLocation)
          gearNumbers[gearLocation].push(
            parseInt(currentNumber + (matchNumber ? grid[y][x] : ""))
          );
        checkNumber = false;
      }

      if (checkNumber) {
        currentNumber += grid[y][x];

        for (let j = -1; j <= 1; j++) {
          for (let i = -1; i <= 1; i++) {
            if (i == 0 && j == 0) continue;
            if (isOutOfBounds(grid, x + i, y + j)) continue;
            if (isGear(grid, x + i, y + j)) {
              gearLocation = `${x + i},${y + j}`;
              if (gearNumbers[gearLocation] == null)
                gearNumbers[gearLocation] = [];
            }
          }
        }
      }
    }
  }

  return Object.values(gearNumbers).reduce((sum, array) => {
    if (array.length == 2) sum += array[0] * array[1];
    return sum;
  }, 0);
}

module.exports = solve;
