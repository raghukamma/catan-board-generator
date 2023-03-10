const generateNewBoard = require('./index.js');

test("Test case to validate the allResources array length", () => {
    var allResources = ["desert", "brick", "brick", "brick", "wood", "wood", "wood", "wood", "ore", "ore", "ore", "sheep", "sheep", "sheep", "sheep", "grain", "grain", "grain"];
    var numbersOnBoard = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12,];
    expect(() => {
        generateNewBoard(allResources, numbersOnBoard);
    }).toThrow("Length of allResources array should be 19");
})

test("Test case to validate the numbersOnBoard array length", () => {
    var allResources = ["desert", "brick", "brick", "brick", "wood", "wood", "wood", "wood", "ore", "ore", "ore", "sheep", "sheep", "sheep", "sheep", "grain", "grain", "grain", "grain"];
    var numbersOnBoard = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11];
    expect(() => {
        generateNewBoard(allResources, numbersOnBoard);
    }).toThrow("Length of numbersOnBoard array should be 18");
})

test("Test case to validate the resource type in allResource array", () => {
    var allResources = ["desert", "brick", "brick", "brick", "wood", "test_resource", "wood", "wood", "ore", "ore", "ore", "sheep", "sheep", "sheep", "sheep", "grain", "grain", "grain", "grain"];
    var numbersOnBoard = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];
    expect(() => {
        generateNewBoard(allResources, numbersOnBoard);
    }).toThrow("Incorrect resource type");
})