// dichiaro min e max
const minNumber = 1;
const maxNumber = 6;

// formula numero random 1
let random1 = Math.floor(Math.random() * maxNumber) + minNumber;

// formula numero random 2
let random2 = Math.floor(Math.random() * maxNumber) + minNumber;

// dichiaro numero dell'user
let userNumber = random1;
console.log(random1);
// dichiaro numero del computer
let computerNumber = random2;
console.log(random2);

if (userNumber < computerNumber) {
  alert("complimenti USER hai vinto!");
} else if (userNumber == computerNumber) {
  alert("ACCIDENTI parità");
} else {
  alert("AHAH ti sei fatto battere da un computer!");
}
