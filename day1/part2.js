const fs = require("fs");
const path = require("path");

const words = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const regWords = new RegExp("(" + words.join("|") + ")");

function getCalibration(line) {
  const numbers = line
    .split("")
    .map((char) => (!isNaN(char) ? char : null))
    .filter(Boolean);
  const result = +`${numbers[0]}${numbers[numbers.length - 1]}`;
  return isNaN(result) ? 0 : result;
}


function getCalibrationWithNumberStrings(line) {
  let result = "";
  let i = 0;

  while (i < line.length) {
    matchNumber = 0
    for (let word of words) {
      if (line.startsWith(word, i)) {
        matchNumber = words.indexOf(word) + 1;
      }
    }
    if (matchNumber) {
      result += matchNumber;
    } else {
      if (!isNaN(line[i])) {
        result += line[i];
      }
    }
    i++;
  }
  return getCalibration(result);
}

function solve(inputFile = "input.txt") {
  const input = fs.readFileSync(path.join(__dirname, inputFile), "utf-8");
  const lines = input.split("\n");

  const outputContent = lines
    .map((line) => {
      const processedLine = getCalibrationWithNumberStrings(line);
      return line + " " + processedLine;
    })
    .join("\n");

  fs.writeFile(path.join(__dirname, "output.txt"), outputContent, (err) => {
    if (err) {
      //console.error("Errore durante la scrittura del file:", err);
    } else {
      //console.log("File di output scritto con successo.");
    }
  });

  const result = lines.reduce((acc, line) => {
    return acc + getCalibrationWithNumberStrings(line);
  }, 0);
  return result;
}

module.exports = solve;
