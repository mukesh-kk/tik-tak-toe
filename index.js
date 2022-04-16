// to count moves,counts
let moveCounter = 0;
let gameOver = false;
let xScore = 0;
let oScore = 0;

let box = document.getElementsByClassName("box"); //selecting boxes

for (var i = 0; i < box.length; i++) {
  //adding click listener
  box[i].addEventListener("click", whatToDo);
  
}

function whatToDo(event) {
   // what to do on click
  moveCounter++;
        
  if (moveCounter <= 9 && moveCounter % 2 == 0 && !gameOver   ) {
    event.target.innerHTML = '<i class="fa-solid fa-x"></i>';

    if (isThereAWinner()) {
      gameOver = true;

      document.getElementById("x-win").style.display = "block";
      document.getElementById("x-score").innerHTML = ++xScore;
    }
  } else if (moveCounter <= 9 && moveCounter % 2 == 1 && !gameOver) {
    event.target.innerHTML = '<i class="fa-solid fa-o"></i>';
    if (isThereAWinner()) {
      gameOver = true;
      document.getElementById("o-win").style.display = "block";
      document.getElementById("o-score").innerHTML = ++oScore;
    }
  }
}
/// PLAY AGAIN

document.getElementById("play-again-btn").addEventListener("click", playAgain);

function playAgain() {
  for (var i = 0; i < box.length; i++) {
    box[i].innerHTML = "";
  }
  moveCounter = 0;
  gameOver = false;

  document.getElementById("o-win").style.display = "none";
  document.getElementById("x-win").style.display = "none";
}

function isThereAWinner() {
  if (
    box[0].innerHTML != "" &&
    box[0].innerHTML == box[1].innerHTML &&
    box[0].innerHTML == box[2].innerHTML
  ) {
    return true;
  } else if (
    box[0].innerHTML != "" &&
    box[0].innerHTML == box[3].innerHTML &&
    box[0].innerHTML == box[6].innerHTML
  ) {
    return true;
  } else if (
    box[2].innerHTML != "" &&
    box[2].innerHTML == box[5].innerHTML &&
    box[2].innerHTML == box[8].innerHTML
  ) {
    return true;
  } else if (
    box[1].innerHTML != "" &&
    box[1].innerHTML == box[4].innerHTML &&
    box[1].innerHTML == box[7].innerHTML
  ) {
    return true;
  } else if (
    box[0].innerHTML != "" &&
    box[0].innerHTML == box[3].innerHTML &&
    box[0].innerHTML == box[6].innerHTML
  ) {
    return true;
  } else if (
    box[3].innerHTML != "" &&
    box[3].innerHTML == box[4].innerHTML &&
    box[3].innerHTML == box[5].innerHTML
  ) {
    return true;
  } else if (
    box[6].innerHTML != "" &&
    box[6].innerHTML == box[7].innerHTML &&
    box[6].innerHTML == box[8].innerHTML
  ) {
    return true;
  } else if (
    box[0].innerHTML != "" &&
    box[0].innerHTML == box[3].innerHTML &&
    box[0].innerHTML == box[6].innerHTML
  ) {
    return true;
  } else if (
    box[0].innerHTML != "" &&
    box[0].innerHTML == box[4].innerHTML &&
    box[0].innerHTML == box[8].innerHTML
  ) {
    return true;
  } else if (
    box[2].innerHTML != "" &&
    box[2].innerHTML == box[4].innerHTML &&
    box[2].innerHTML == box[6].innerHTML
  ) {
    return true;
  } else {
    return false;
  }
}




