// connetto il DOM a javascript
// e prendo il loro valore con .value degli input
let kilometers = document.getElementById("kilometers").value;
let age = document.getElementById("age").value;
let btnConfirm = document.getElementById("btn-confirm");

console.log(kilometers);
console.log(age);

btnConfirm.addEventListener("click", () => {
    trainTicketCost(kilometers, age);
});

//Function
function trainTicketCost(kilometers, age){
    // calcolo il prezzo del biglietto
    let ticketCost = 0.21 * kilometers;

    // applichiamo uno sconto al biglietto in base all'età
    // se il passeggero è minorenne ha 20% di sconto
    if(age<18){
        ticketCost *= 0.8;
    }
    // altrimenti se il passeggero è over 65 ha 40% di sconto
    else if(age>65){
        ticketCost *= 0.6;
    }

    // con toFixed il valore number di ticketCost diventa string, ma arrotondo le cifre decimali del numero a 2
    console.log(`${ticketCost.toFixed(2)} costo del biglietto`);
}