
const solvePart1 = require("./part1");
const solvePart2 = require("./part2");

test("DAY 3 - solvePart1 solves the problem correctly", () => {
  const result = solvePart1("test.txt");
  const expectedResult = 4361;

  expect(result).toEqual(expectedResult);
});

test("DAY 3 solution - solvePart1 solves the problem correctly", () => {
  const result = solvePart1("input.txt");
  const expectedResult = 521515;

  expect(result).toEqual(expectedResult);
});

test.only("DAY 3 - solvePart2 solves the problem correctly", () => {
  const result = solvePart2("test.txt");
  const expectedResult = 467835;

  expect(result).toEqual(expectedResult);
});

test("DAY 3 solutions - solvePart2 solves the problem correctly", () => {
  const result = solvePart2("input.txt");
  const expectedResult = 69527306;

  expect(result).toEqual(expectedResult);
});


