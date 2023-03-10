function init() {
  if(document.getElementById('regular').checked) {
    regular_init();
  }
  else if(document.getElementById('extension').checked) {
  }
}

function regular_init() {
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

  var game;

  game = generateNewBoard(allResources, numbersOnBoard);

  displayBoard(game);
}

function generateNewBoard(allResources, numbersOnBoard) {

  if(allResources.length != 19){
    throw new Error('Length of allResources array should be 19');
  }
  if(numbersOnBoard.length != 18){
    throw new Error('Length of numbersOnBoard array should be 18');
  }
  for(i=0; i<allResources.length; i++){
    if(allResources[i] === 'desert' || allResources[i] === 'brick' || allResources[i] === 'grain' || allResources[i] === 'ore' || allResources[i] === 'sheep' || allResources[i] === 'wood'){
      continue;
    }
    else{
      throw new Error('Incorrect resource type');
    }
  }

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
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  console.log(currentIndex);

  while (0 !== currentIndex) {
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
    this.type = type;
    this.number = number;
  }
}

class Game {
  constructor(pieces) {
    this.pieces = pieces;
  }
}

function displayBoard(game) {
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

  document.getElementById("display").innerHTML = displayStr;
}

module.exports = generateNewBoard;
