//utente inserisce due numeri

var number_one = parseInt(prompt("inserisci il primo numero"));
var number_two = parseInt(prompt("inserisci il secondo numero"));

//verifico se il numero uno è maggiore del secondo e viceversa e stampo il piu grande

if(number_one > number_two){
  console.log(number_one);
}else if (number_one == number_two) {
  console.log("ridammi i numeri perchè i numeri sono uguali");
}else {
  console.log(number_two);
}
