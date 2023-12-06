
const solvePart1 = require("./part1");
const solvePart2 = require("./part2");

test("solvePart1 solves the problem correctly", () => {
  const result = solvePart1("test.txt");
  const expectedResult = 2065338;

  expect(result).toEqual(expectedResult);
});

test("solvePart2 solves the problem correctly", () => {
  const result = solvePart2("test.txt");
  const expectedResult = 34934171;

  expect(result).toEqual(expectedResult);
});
