const fs = require("fs");
const path = require("path");

function powerSet(games) {
  const maxValues = {
    red: 0,
    blue: 0,
    green: 0
  };
  games.forEach(game => {
    for (let i = 0; i < game.length; i += 2) {
      const color = game[i];
      const value = +game[i + 1];
      if (value > maxValues[color]) {
        maxValues[color] = value;
      }
    }
  });
  return maxValues
}

function getGames(line) {
  const row = line.split(":");
  const games = row[1].split(';').map(color => color.trim().split(/[, ]/).filter(Boolean).reverse())
  const power = powerSet(games)
  return power.red * power.blue * power.green
}

function solve(inputFile = "input.txt") {
  const input = fs.readFileSync(path.join(__dirname, inputFile), "utf-8");
  const lines = input.split("\n");

  const result = lines.reduce((acc, value) => acc + getGames(value), 0);
  return result;
}

module.exports = solve;
