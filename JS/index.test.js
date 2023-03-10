const { shuffle, Tile, Game } = require("./index.js");

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

it("should return the same array if it is empty", () => {
  const array = [];
  const shuffled = shuffle(array);
  expect(shuffled).toEqual([]);
});

it("should return the same array if it contains only one element", () => {
  const array = [1];
  const shuffled = shuffle(array);
  expect(shuffled).toEqual([1]);
});

test("sets the type and number properties correctly", () => {
  const tile = new Tile("wood", 5);
  expect(tile.type).toBe("wood");
  expect(tile.number).toBe(5);
});

test('should create game object with pieces array',() => {
  const pieces = ["desert", "brick", "brick", "brick", "wood", "wood", "wood", "wood", "ore", "ore", "ore", "sheep", "sheep", "sheep", "sheep", "grain", "grain", "grain", "grain",];
  const game = new Game(pieces);
  expect(game.pieces).toEqual(pieces);
})

test('should create game object with pieces array',() => {
  const game = new Game([]);
  expect(game.pieces).toEqual([]);
})
