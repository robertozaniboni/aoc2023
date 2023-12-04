const fs = require("fs");
const path = require("path");

function getPoints(line) {
  const [card, cardNumbers] = line.split(":");
  const [winners, played] = cardNumbers.split("|");
  const winNumers = winners
    .split(" ")
    .map((n) => parseInt(n))
    .filter((n) => !isNaN(n));
  const playedNumbers = played
    .split(" ")
    .map((n) => parseInt(n))
    .filter((n) => !isNaN(n));

  const tot = playedNumbers.reduce((acc, curr) => {
    if (winNumers.includes(curr)) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return tot;
}

function solve(inputFile = "input.txt") {
  const input = fs.readFileSync(path.join(__dirname, inputFile), "utf-8");
  const lines = input.split("\n");

  const copies = new Array(lines.length).fill(1);

  lines.forEach((line, i) => {
    const points = getPoints(line);
    for (let j = 0; j < points; j++) {
      if (i + j <= copies.length) {
        copies[i + j + 1] += copies[i] ;
      }
    }
  });

  const result = copies.reduce((acc, curr) => acc + curr, 0);
  return result;
}

module.exports = solve;
