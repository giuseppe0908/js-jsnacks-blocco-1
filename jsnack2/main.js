//faccio inserire all'utente due parole

 var parola_one= prompt("inserisci una parola 1").trim();

 var parola_two = prompt("inserisci una parola 2").trim();
//ora faccio il confronto tra le due parole e stampo la più piccola prima e dopo la piùgrande

  if (parola_one.length > parola_two.length) {
    console.log(parola_two , parola_one);
  }else {
    console.log(parola_one , parola_two);
  }
