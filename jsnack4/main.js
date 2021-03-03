//creo un array che contiene i nome dei invitati
var elenco = ["giuseppe","antonio","raffaele","fabrizio","alessandro","angelo","giulio","luca","alessia","ilaria"];
console.log(elenco);
//chiedo all'utente il suo nome
var nome = prompt("inserisci il tuo nome");
console.log(nome);
var flag=false;

for (var i = 0; i < elenco.length; i++) {

  if (elenco[i]== nome) {
    flag=true;
  }
}

if (flag) {

  console.log("puoi entrare");
  document.getElementById('risposta').innerHTML= "Tu"+ " "+ nome + " "+ "puoi entrare" ;
}else {
  console.log("non puoi entrare");
  document.getElementById('risposta').innerHTML= "Tu"+ " "+ nome + " "+ "non puoi entrare" ;
}
