
const solvePart1 = require("./part1");
const solvePart2 = require("./part2");

test("DAY 4 test - solvePart1 solves the problem correctly", () => {
  const result = solvePart1("test.txt");
  const expectedResult = 13;

  expect(result).toEqual(expectedResult);
});


test("DAY 4 input - solvePart1 solves the problem correctly", () => {
  const result = solvePart1("input.txt");
  const expectedResult = 21821;

  expect(result).toEqual(expectedResult);
});

test("DAY 4 test - solvePart2 solves the problem correctly", () => {
  const result = solvePart2("test.txt");
  const expectedResult = 30;

  expect(result).toEqual(expectedResult);
});

test("DAY 4 input - solvePart2 solves the problem correctly", () => {
  const result = solvePart2("input.txt");
  const expectedResult = 5539496;

  expect(result).toEqual(expectedResult);
});
