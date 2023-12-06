const fs = require("fs");
const path = require("path");

const isOutOfBounds = (grid, x, y) => {
  return y < 0 || y >= grid.length || x < 0 || x >= grid[y].length;
};

function checkForSymbols(grid, x, y) {
  for (let j = -1; j <= 1; j++) {
    for (let i = -1; i <= 1; i++) {
      if (i == 0 && j == 0) continue;
      if (isOutOfBounds(grid, x + i, y + j)) continue;

      if (!grid[y + j][x + i].match(/[\d.]/)) return true;
    }
  }
  return false;
}

function getSum(grid) {
  let sum = 0;

  grid.forEach((row, y) => {
    let currentNumber = "",
      checkNumber = false,
      nearSymbol = false;

    row.forEach((cell, x) => {
      const matchNumber = cell.match(/\d/);
      if (matchNumber && !checkNumber) {
        checkNumber = true;
        currentNumber = "";
        nearSymbol = false;
      }

      if ((x == row.length - 1 || !matchNumber) && checkNumber) {
        if (nearSymbol)
          sum += parseInt(currentNumber + (matchNumber ? cell : ""));
        checkNumber = false;
      }

      if (checkNumber) {
        currentNumber += cell;
        if (!nearSymbol) {
          nearSymbol = checkForSymbols(grid, x, y);
        }
      }
    });
  });

  return sum;
}

function solve(inputFile = "input.txt") {
  const input = fs.readFileSync(path.join(__dirname, inputFile), "utf-8");
  const grid = input.split(/\n/g).map((line) => line.split(""));

  return getSum(grid);
}

module.exports = solve;
