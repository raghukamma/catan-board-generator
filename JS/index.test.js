var assert = require("assert");

describe("test generateNewBoard function", () => {
  const generateNewBoard = require("./index");
  var allResources = [
    "desert",
    "brick",
    "brick",
    "brick",
    "wood",
    "wood",
    "wood",
    "wood",
    "ore",
    "ore",
    "ore",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "grain",
    "grain",
    "grain",
    "grain",
  ];
  var numbersOnBoard = [
    2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12,
  ];
  test("test total number of pieces from the generated game board", () => {
    var board = generateNewBoard(allResources, numbersOnBoard);
    expect(board).toHaveLength(19);
  });
  test("test the generated game board is not a null", () => {
    var board = generateNewBoard(allResources, numbersOnBoard);
    expect(board).not.toBe(null);
  });
});

describe("test shuffle function", () => {
  const shuffle = require("./index");
  var array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  test("returns an array of the same length", () => {
    const shuffledArray = shuffle(array);
    expect(shuffledArray.length).toEqual(array.length);
  });

  test("does not modify the original array", () => {
    const shuffledArray = shuffle(array);
    expect(shuffledArray).toEqual(expect.arrayContaining(array));
  });

  test("returns an array with the same elements as the original", () => {
    const shuffledArray = shuffle(array);
    array.forEach((element) => {
      expect(shuffledArray).toContain(element);
    });
  });

  test("test the shuffled array is not a null", () => {
    const shuffledArray = shuffle(array);
    expect(shuffledArray).not.toBe(null);
  });
});
