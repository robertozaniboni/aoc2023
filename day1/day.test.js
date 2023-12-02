
const solvePart1 = require("./part1");
const solvePart2 = require("./part2");

test("solvePart1 solves the problem correctly", () => {
  const result = solvePart1("test.txt");
  const expectedResult = 142

  expect(result).toEqual(expectedResult);
});

test("SOLUTION 1: solvePart1 solves the problem correctly", () => {
  const result = solvePart1("input.txt");
  const expectedResult = 54450

  expect(result).toEqual(expectedResult);
});

test("solvePart2 solves the problem correctly", () => {
  const result = solvePart2("test2.txt");
  const expectedResult = 281;

  expect(result).toEqual(expectedResult);
});

test("SOLUTION 2: solvePart2 solves the problem correctly", () => {
  const result = solvePart2("input.txt");
  const expectedResult = 54265;

  expect(result).toEqual(expectedResult);
});
