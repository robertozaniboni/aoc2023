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
  const result = [[54, 446] , [81, 1292], [70, 1035], [88, 1007]].reduce((acc, [s, d])  => acc * getVictoryCount(s, d), 1)//?
  return result
}

module.exports = solve;
