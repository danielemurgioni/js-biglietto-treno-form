// connetto il DOM a javascript
// se prendo il loro valore con .value direttamente dall'input il valore mi risulterà vuoto
let kilometers = document.getElementById("kilometers");
let age = document.getElementById("age");
let btnConfirm = document.getElementById("btn-confirm");
let nameSurname = document.getElementById("name-surname");
// DOM: risultato del form
let passengerName = document.getElementById("passenger-name");
let ticketType = document.getElementById("ticket-type");
let wagonNumber = document.getElementById("wagon-number");
let cpCode = document.getElementById("cp-code");
let ticketPrice = document.getElementById("ticket-price");

// invio i risultati del form all'utente
btnConfirm.addEventListener("click", (event) => {
    // con preventDefault impedisco alla pagina l'auto-refresh cosi che io possa visualizare il risultato
    event.preventDefault();
    // prendo il valore quando clicco il bottone
    let valueKilometers = kilometers.value.trim();
    let valueAge = age.value.trim();
    let ticketCost = trainTicketCost(valueKilometers, valueAge);
    let valueNameSurname = nameSurname.value.trim();
    // visualizzazione su html:
    //nome passeggero
    passengerName.innerText = valueNameSurname;
    //tipo di biglietto
    if(valueAge<18){
        ticketType.innerText = "Sconto del 20%"
    }
    else if(valueAge>65){
        ticketType.innerText = "Sconto del 40%"
    }
    else{
        ticketType.innerText = "Biglietto Standard"
    }
    //numero vagone
    wagonNumber.innerText = randomNumber(1, 8);
    //codice cp
    cpCode.innerText = randomNumber(2000, 9999);
    //costo biglietto
    ticketPrice.innerText = `${ticketCost} €`;
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
    return ticketCost.toFixed(2);
}

function randomNumber(min, max){
    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
}