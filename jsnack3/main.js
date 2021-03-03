
//inizializzo la variabile somma a 0
var somma=0;
//faccio inserire all'utente 10 numeri me li salvo in una variabiele e li sommo nella variabile somma
for (var i = 0; i < 10; i++) {
  var numero= parseInt(prompt("inserisci un numero"));
  somma +=numero;
}
//stampo la somma
console.log(somma);
