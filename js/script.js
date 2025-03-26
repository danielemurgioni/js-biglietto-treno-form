/* calcolo del biglietto del treno

// chiedo all'utente il numero di chilometri che vuole percorrere

let kilometers = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));

console.log(kilometers)

// chiedo all'utente l'età

let age = parseInt(prompt("Inserisci la tua età"));

console.log(age)

// calcolo il prezzo del biglietto

let ticketCost = 0.21 * kilometers;

// applichiamo uno sconto al biglietto in base all'età
let ticketDiscount = ticketCost;

// se il passeggero è minorenne ha 20% di sconto
if(age<18){
    ticketDiscount *= 0.8;
}
// altrimenti se il passeggero è over 65 ha 40% di sconto
else if(age>64){
    ticketDiscount *= 0.6;
}

console.log(ticketCost)
console.log(ticketDiscount)

// con toFixed il valore number di ticketCost diventa string, ma arrotondo le cifre decimali del numero a 2
console.log(`${ticketDiscount.toFixed(2)} costo del biglietto`);

*/

//connetto il DOM a javascript
let inputKilometers = document.getElementById("kilometers");
let inputAge = document.getElementById("age");
let btnConfirm = document.getElementById("btn-confirm");

console.log(inputKilometers);
console.log(inputAge);
console.log(btnConfirm);

// prendo la valuta degli input
let kilometers = inputKilometers.value;
let age = inputAge.value;

console.log(kilometers);
console.log(age);