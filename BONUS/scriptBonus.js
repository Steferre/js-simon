/*
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il 
prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono 
stati individuati.
*/


// PARTE 1
var aiNumbers = [];

while (aiNumbers.length < 5) {
    
    var aiRandomNum = parseInt(Math.random() * 50) + 1;

    if (aiNumbers.indexOf(aiRandomNum) === -1) {
         aiNumbers.push(aiRandomNum);

    }
}

console.log(aiNumbers);

alert('Memorizza questi numeri: \n' + ' ' + aiNumbers.join(" , "));

// PARTE 2
var correctUserNum = [];
var unCorrUserNum = [];

var checkUserInput = [];

setTimeout(function() {

    while (checkUserInput.length < aiNumbers.length) {
        var userInput = parseInt(prompt('Inserisci, uno alla volta, i cinque numeri che hai memorizzato!'));
        
        if (isNaN(userInput)) {
            alert('Puoi inserire solo numeri, da 1 a 50!');

        } else if (userInput < 1 || userInput > 50) {
            alert('Devi inserire un numero da 1 a 50!');

        } else if (checkUserInput.indexOf(userInput) !== -1) {
            alert('ATTENZIONE! Non puoi inserire lo stesso numero più di una volta!!!');

        } else {

            if (aiNumbers.indexOf(userInput) === -1) {

                unCorrUserNum.push(userInput);
                checkUserInput.push(userInput);

            } else {
                
                correctUserNum.push(userInput);
                checkUserInput.push(userInput);

            }

        }
    }
    console.log(correctUserNum + ' ' + 'numeri corretti');
    console.log(unCorrUserNum + ' ' + 'numeri errati');
    console.log(checkUserInput + ' ' + 'array di controllo');

    // PARTE 3
    var btnScore = document.getElementById('checkResult');
    var scoreBox = document.getElementById('resultBox');
    var yourScore = document.getElementById('result');


    btnScore.addEventListener('click', function() {

        yourScore.innerHTML= "Hai indovinato " + correctUserNum.length + " numeri" + " " + " su" + " " + aiNumbers.length + " " + " e sono: " + " " + correctUserNum.join(" , "); 
       
        scoreBox.style.margin = "10px";
        scoreBox.style.padding = "15px";
        scoreBox.style.backgroundColor = "rgba(0, 230, 64, 0.5)";


    })




}, 30000);


// prova di evento click per far apparire il risultato
/*
yourScore.addEventListener('click', function(){
document.getElementById('showResult').innerHTML= "Hai indovinato " + correctUserNum.length + " numeri" + " " + " su" + " " + aiNumberlength + " " + " e sono: " + " " + correctUserNum.join(" , ");
})
*/
