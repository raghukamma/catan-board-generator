var allResources = ["desert","brick","brick","brick","wood","wood","wood","wood","ore","ore","ore","sheep","sheep","sheep","sheep","grain","grain","grain","grain"];
var tileTypes = ["desert", "brick", "wood", "ore", "sheep", "grain"];

function init(){
  console.log("In init function");
  var game;

  game = generateNewBoard();
  console.log("Creating random board");
  console.log(game)

  displayBoard(game);
  console.log("Displaying board");
}

function generateNewBoard(){
  console.log("In random game generation function");
  var board = shuffle(allResources);
  var pieces = [];
  for (var i = 0; i < board.length; i++) {
    pieces.push(new Tile(board[i]));
  }

  return new Game(pieces);
}

function shuffle(array){
  console.log("Inside shuffle function");
  var currentIndex = array.length, temporaryValue, randomIndex;
  console.log(currentIndex)

  while(0 !== currentIndex) {
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

class Tile{
  constructor(type){
    console.log("Tile constructor called");
    this.type = type;
  }
}

class Game{
  constructor(pieces){
    console.log("Inside Game constructor");
    this.pieces = pieces;
  }
}

function displayBoard(game){
  console.log("This is display board function");
  var displayStr = "";

  for (var i = 0; i < game.pieces.length; i++){
    var piece = game.pieces[i];

    if ([0, 3, 7, 12, 16].includes(i)) {
      displayStr += "<div class='row'>";
    }

    displayStr += "<span class='tile'" + "' style='background-image: url(\"images/" + piece.type + ".png\");'></span>";
  }

  console.log(displayStr);
  document.getElementById('display').innerHTML = displayStr;
}