/*
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// PARTE 1
// tramite un alert faccio vedere all'utente una serie di numeri casuali (per semplicità presi tra 1 e 50)
// quindi
// devo generare i 5 numeri e metterli in un array
// voglio che questi numeri siano singoli e non si ripetano

var aiNumbers = [];

// per creare i numeri posso fare un ciclo e pusharli nell'array
// la condizione del ciclo è lunghezza array < 5 perchè voglio 5 numeri
// una volta che il mio array arriva a lunghezza = 5 il ciclo si conclude
while (aiNumbers.length < 5) {
    // questa riga andrà a generare un numero random tra 1 e 50, e sarà un numero intero
    var aiRandomNum = parseInt(Math.random() * 50) + 1;

    // devo controllare che i numeri non siano doppi quindi
    // usando indexOf ottengo -1 se il numero generato non è presente 
    // e un numero relativo all'indice alla quale il numero si trova
    // se questo è già presente nell'array
    if (aiNumbers.indexOf(aiRandomNum) === -1) {
        aiNumbers.push(aiRandomNum);

    }
}

console.log(aiNumbers);
// alert che mostra il messaggio e i numeri da ricordare
alert('Memorizza questi numeri: \n' + ' ' + aiNumbers.join(" , "));

// PARTE 2
// Una volta chiuso il prompt parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// quindi
// per creare un' attesa di 30 sec posso usare setTimeout
// questa funzione, farà partire (dop i 30 secondi) il prompt che chiederà all'utente i numeri che ricorda
// avrò quindi due possibilità:
// opzione 1: l'utente ricorda il numero o i numeri
// opzione 2: l'utente inserisce numeri errati
// devo quindi definire due array, che andrò a riempire con i numeri inseriti dall'utente in base a se sono giusti o sbagliati
// poi definisco un terzo array che sarà quello di controllo che userò per confrontarlo con quello dell'ai

var correctUserNum = [];
var unCorrUserNum = [];

var checkUserInput = [];

// invoco la funzione setTimeout con una funzione anonima e 30000 ms
// all'interno della funzione anonima scrivo quello che voglio fare
setTimeout(function() {
    // il ciclo continua fino a qundo la lunghezza dei due array non sarà uguale
    while (checkUserInput.length < aiNumbers.length) {
        // creo il prompt per chiedere all'utente il numero
        var userInput = parseInt(prompt('Inserisci, uno alla volta, i cinque numeri che hai memorizzato!'));
        
        // devo effettuare controlli sulla correttezza dei dati inseriti dall'utente
        // no stringhe
        // no numeri minori di 1 o maggiori di 50
        if (isNaN(userInput)) {
            alert('Puoi inserire solo numeri, da 1 a 50!');

        } else if (userInput < 1 || userInput > 50) {
            alert('Devi inserire un numero da 1 a 50!');

        } else if (checkUserInput.indexOf(userInput) !== -1) {
            alert('ATTENZIONE! Non puoi inserire lo stesso numero più di una volta!!!');

        } else {
            // procedo quindi con le stesse verifiche precedenti
            // verifico che il numero non sia doppio 
            // e che sia nella lista di quelli del computer
            if (aiNumbers.indexOf(userInput) === -1) {
                // se questa condizione è vera il numero inserito dall'utente non era presente in quelli richiesti
                // quindi va inserito nell'array numeri sbagliati
                unCorrUserNum.push(userInput);
                checkUserInput.push(userInput);

            } else {
                // in caso contrario il numero è presente nell'array del computer e quindi è corretto
                correctUserNum.push(userInput);
                checkUserInput.push(userInput);

            }

        }
    }
    console.log(correctUserNum + ' ' + 'numeri corretti');
    console.log(unCorrUserNum + ' ' + 'numeri errati');
    console.log(checkUserInput + ' ' + 'array di controllo');

    // PARTE 3
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    // prendo array numeri corretti e lo stampo in html

    var yourScore = document.getElementById('result');

    yourScore.innerHTML= "Hai indovinato " + correctUserNum.length + " numeri" + " " + " su" + " " + aiNumbers.length + " " + " e sono: " + " " + correctUserNum.join(" , "); 

}, 30000);


// prova di evento click per far apparire il risultato
/*
yourScore.addEventListener('click', function(){
    document.getElementById('showResult').innerHTML= "Hai indovinato " + correctUserNum.length + " numeri" + " " + " su" + " " + aiNumbers.length + " " + " e sono: " + " " + correctUserNum.join(" , ");
})
*/








