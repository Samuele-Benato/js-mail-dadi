// array con le mail possibili
const mails = ["@gmail.com", "@outlook.com", "@yahoo.com"];
// chiedere mail
const userMail = prompt("inserisci la mail");

let correct = false;
// definire ogni mail possibile
for (let i = 0; i < mails.length; i++) {
  const mail = mails[i];
  console.log(mail);

  // se la mail corrisponde a quelle elencate è compatibile
  if (userMail === mail) {
    correct = true;
  }
}

if (correct) {
  alert("mail inserita con successo");
} else {
  alert("mail non valida");
}
