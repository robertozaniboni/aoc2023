
const fs = require("fs");
const path = require("path");

function getPoints(line) {
  const [card, cardNumbers] = line.split(':')
  const [winners, played] = cardNumbers.split('|')
  const winNumers = winners.split(' ').map(n => parseInt(n)).filter(n => !isNaN(n))
  const playedNumbers = played.split(' ').map(n => parseInt(n)).filter(n => !isNaN(n))

  const tot = playedNumbers.reduce((acc, curr) => {
    if (winNumers.includes(curr)) {
      return (acc === 0 ? 1 : acc) * 2
    }
    return acc
  }, 0)
  return tot / 2
}


function solve(inputFile = 'input.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split("\n");

  const result = lines.reduce((acc, value, index) => {
    return acc + getPoints(value)
  }, 0)
  return result;
}

module.exports = solve;
