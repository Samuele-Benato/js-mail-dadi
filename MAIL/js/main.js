// array con le mail possibili
const mails = [
  "Goku@gmail.com",
  "Vegeta@gmail.com",
  "Crillin@gmail.com",
  "Gohan@gmail.com",
  "MrSatan@gmail.com",
  "C-16@gmail.com",
  "C-17@gmail.com",
  "C-18@gmail.com",
  "Bulma@gmail.com",
  "MajinBu@gmail.com",
  "Freezer@gmail.com",
  "Trunks@gmail.com",
  "Cell@gmail.com",
  "Chichi@gmail.com",
  "Goten@gmail.com",
  "MaestroMuten@gmail.com",
  "Shenron@gmail.com",
  "Nappa@gmail.com",
  "Tenshing@gmail.com",
  "Dende@gmail.com",
  "Darbula@gmail.com",
  "Ub@gmail.com",
  "Zarbon@gmail.com",
];
// definisco l'user mail
let userMail = prompt(
  "Provaci! Inserisci la mail del personaggio più iconico di DragonBall Z  (Lettera maiuscola iniziale di ogni parola + '@gmail.com')"
).trim();

// // definisco il value dell'userMail
// let userMailValue = document.getElementById("user_mail").value;

// setto variabile d'appoggio
let correct = false;

// definire ogni mail possibile
for (let i = 0; i < mails.length; i++) {
  const mail = mails[i];

  // se la mail corrisponde a quelle elencate è compatibile
  if (userMail === mail) {
    correct = true;
  }
}

if (correct) {
  let mailCorrect = document.getElementById("mail_correct");
  mailCorrect.classList.remove("d-none");
} else {
  let mailFail = document.getElementById("mail_fail");
  mailFail.classList.remove("d-none");
}

// // richiamo il bottone dall'html
// const myButton = document.getElementById("btn_newsletter");
// myButton.addEventListener("click", function () {});
