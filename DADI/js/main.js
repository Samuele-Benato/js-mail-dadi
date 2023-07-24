// dichiaro min e max
const minNumber = 1;
const maxNumber = 6;

// formula numero random 1
let random1 = Math.floor(Math.random() * maxNumber) + minNumber;

// formula numero random 2
let random2 = Math.floor(Math.random() * maxNumber) + minNumber;

// dichiaro numero dell'user
let userNumber = random1;
// dichiaro numero del computer
let computerNumber = random2;

// richiamo il bottone dall'html
const myButton = document.getElementById("btn_gioca");
myButton.addEventListener("click", function () {
  // scrivo il risutato in tabella
  let userNumberGenerator = document.getElementById("user_number");
  userNumberGenerator.innerHTML = userNumber;

  // scrivo il risutato in tabella
  let computerNumberGenerator = document.getElementById("computer_number");
  computerNumberGenerator.innerHTML = computerNumber;

  let messageUser = document.getElementById("message");

  if (userNumber < computerNumber) {
    messageUser.innerHTML = "Che fortuna! HAI VINTO.";
  } else if (userNumber == computerNumber) {
    messageUser.innerHTML = "ACCIDENTI! parità.";
  } else {
    messageUser.innerHTML = "Che peccato! HAI PERSO";
  }
});
