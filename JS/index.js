function init() {
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
    ]; //all numbers that are visible on the game board, 18 elements, #7 is not part of this list
  
    console.log("In init function");
    var game;
  
    game = generateNewBoard(allResources, numbersOnBoard);
    console.log("Creating random board");
    console.log(game);
  
    displayBoard(game);
    console.log("Displaying board");
  }
  
  function generateNewBoard(allResources, numbersOnBoard) {
    console.log("In random game generation function");
    var board = shuffle(allResources);
    var shuffledNumbersOnBoard = shuffle(numbersOnBoard);
    var pieces = [];
    for (var i = 0; i < board.length; i++) {
      if (board[i] == "desert") {
        pieces.push(new Tile(board[i], 7));
      } else {
        pieces.push(new Tile(board[i], shuffledNumbersOnBoard.pop()));
      }
    }
    return new Game(pieces);
  }
  
  function shuffle(array) {
    console.log("Inside shuffle function");
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    console.log(currentIndex);
  
    while (0 !== currentIndex) {
      console.log("In while");
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    console.log(array);
    return array;
  }
  
  class Tile {
    constructor(type, number) {
      console.log("Tile constructor called");
      this.type = type;
      this.number = number;
    }
  }
  
  class Game {
    constructor(pieces) {
      console.log("Inside Game constructor");
      this.pieces = pieces;
    }
  }
  
  function displayBoard(game) {
    console.log("This is display board function");
    var displayStr =
      "<img class='border' src='../images/border.png' alt='border-image'>";
  
    for (var i = 0; i < game.pieces.length; i++) {
      var piece = game.pieces[i];
  
      if ([0, 3, 7, 12, 16].includes(i)) {
        displayStr += "<div class='row'>";
      }
  
      if (piece.type != "desert") {
        displayStr +=
          "<span class='tile' probability='" +
          piece.number +
          "' numberOfDots='" +
          Array(6 - Math.abs(piece.number - 7) + 1).join(".") + 
          "' style='background-image: url(\"../images/" +
          piece.type +
          '.png"); color: ' +
          (piece.number == 6 || piece.number == 8 ? "red" : "black") + 
          "'></span>";
      } else {
        displayStr +=
          "<span class='tile' style='background-image: url(\"../images/desert.png\")'></span>";
      }
    }
  
    console.log(displayStr);
    // document.getElementById('display').style.display = "block";
    document.getElementById("display").innerHTML = displayStr;
  }
  module.exports = { shuffle, Tile };