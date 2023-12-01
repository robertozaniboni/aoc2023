
const fs = require("fs");
const path = require("path");

function getCalibration(line) {
  const numbers = line.split('').map(char => !isNaN(char) ? char : null).filter(Boolean)
  return +`${numbers[0]}${numbers[numbers.length - 1]}`
}

function solve(inputFile = 'input.txt') {
  const input = fs.readFileSync(path.join(__dirname, inputFile), 'utf-8');
  const lines = input.split('\n');

  const result = lines.reduce((acc, line) => acc + getCalibration(line), 0)
  return result;
}

module.exports = solve;
