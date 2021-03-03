//creo array vuoto
var array = [6];
//chiedo all'utente di inserire un numero per sei volte
for (var i = 0; i < 6 ; i++) {
  var numero = parseInt(prompt("inserisci un numero"));
  console.log(numero);

//se il numero inserito dall'utente e dispari lo insersco nell'array
  if (numero % 2 == 1) {
    array[i]= numero ;
    console.log(array[i]);

  }

}
document.getElementById('dispari').innerHTML= array;
