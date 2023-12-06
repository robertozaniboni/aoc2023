function calcDistance(speed, time) {
  return ((time - speed) * speed)
}

function getVictoryCount(time, distance) {
  let win = 0
  for (let i = 0; i < time; i++) {
    const d = calcDistance(i, time)
    if (d > distance) {
      win++
    }
  }
  return win
}

function solve(inputFile = 'input.txt') {
  const result = getVictoryCount(54817088, 446129210351007)
  return result
}

module.exports = solve;
