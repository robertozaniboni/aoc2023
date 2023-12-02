const fs = require("fs");
const path = require("path");

const limit = {
  red: 12,
  green: 13,
  blue: 14,
};

function getValid(group) {
  const pairs = group.split(", ");
  return pairs.every((item) => {
    const [number, color] = item.split(" ");
    return +number <= limit[color];
  });
}

function getGames(line) {
  const row = line.split(":");
  const numberGame = +row[0].split(" ")[1];
  const groups = row[1]
    .split(";")
    .map((color) => color.trim().split(/' '/).reverse());
  const result = groups.every(([group]) => getValid(group));
  return result ? numberGame : 0;
}

function solve(inputFile = "input.txt") {
  const input = fs.readFileSync(path.join(__dirname, inputFile), "utf-8");
  const lines = input.split("\n");

  const result = lines.reduce((acc, value) => acc + getGames(value), 0)
  return result;
}

module.exports = solve;
