const { Tile, shuffle, generateNewBoard } = require("./index.js");

test("Test case to validate the allResources array length", () => {
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
  ];
  var numbersOnBoard = [
    2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12,
  ];
  expect(() => {
    generateNewBoard(allResources, numbersOnBoard);
  }).toThrow("Length of allResources array should be 19");
});

test("Test case to validate the numbersOnBoard array length", () => {
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
  var numbersOnBoard = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11];
  expect(() => {
    generateNewBoard(allResources, numbersOnBoard);
  }).toThrow("Length of numbersOnBoard array should be 18");
});

test("Test case to validate the resource type in allResource array", () => {
  var allResources = [
    "desert",
    "brick",
    "brick",
    "brick",
    "wood",
    "test_resource",
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
  expect(() => {
    generateNewBoard(allResources, numbersOnBoard);
  }).toThrow("Incorrect resource type");
});

test("sets the type and number properties correctly", () => {
  const tile = new Tile("wood", 5);
  expect(tile.type).toBe("wood");
  expect(tile.number).toBe(5);
});
it("should shuffle the array in place", () => {
  const array = [1, 2, 3, 4, 5];
  const shuffled = shuffle(array);
  expect(shuffled).toEqual(array);
});
it("should shuffle the elements of the array randomly", () => {
  const array = [1, 2, 3, 4, 5];
  const shuffled = shuffle(array);
  expect(shuffled).not.toEqual([3, 1, 2, 4, 5]);
});

describe("test shuffle function", () => {
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

describe("test generateNewBoard function", () => {
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
  test("test the generated game board is not a null", () => {
    var board = generateNewBoard(allResources, numbersOnBoard);
    expect(board).not.toBe(null);
  });
});
