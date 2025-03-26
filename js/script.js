// connetto il DOM a javascript
// se prendo il loro valore con .value direttamente dall'input il valore mi risulterà vuoto
let kilometers = document.getElementById("kilometers");
let age = document.getElementById("age");
let btnConfirm = document.getElementById("btn-confirm");

btnConfirm.addEventListener("click", (event) => {
    // con preventDefault impedisco alla pagina l'auto-refresh cosi che io possa visualizare il risultato
    event.preventDefault();
    // prendo il valore quando clicco il bottone
    let valueKilometers = kilometers.value.trim();
    let valueAge = age.value.trim();
    trainTicketCost(valueKilometers, valueAge);
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