function shuffle(){
    var cont = document.getElementById("container");
    var hexArr = cont.getElementsByClassName("hex")
    var elementsArray = Array.prototype.slice.call(hexArr);
  
    elementsArray.forEach(function (element) {
    cont.removeChild(element);
    })
    shuffleArray(elementsArray);
  
    elementsArray.forEach(function (element) {
    cont.appendChild(element);
    })
  }
  
  function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }
  
  
  
  