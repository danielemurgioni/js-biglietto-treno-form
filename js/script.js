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

btnConfirm.addEventListener("click", () => {
    trainTicketCost(kilometers, age)
});

//Function
function trainTicketCost(kilometers, age){
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

    // con toFixed il valore number di ticketCost diventa string, ma arrotondo le cifre decimali del numero a 2
    console.log(`${ticketDiscount.toFixed(2)} costo del biglietto`);
}