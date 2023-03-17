const userInput = prompt("Inserisci una parola");
let userInputToCheck = userInput.toLowerCase();
//creo la funzione
/**
 * 
 * @param {string} userInputToCheck
 * @returns {boolean}
 */
function isPal(userInputToCheck) {
    let userArray = userInputToCheck.split("");//prendo un array e ci metto dentro ad ogni cella un carattere della stringa
    let b = [];//creo un array che mi servirà per il confronto
    let j = 0;//creo il contatore per l'array b
    for (let i = userArray.length - 1; i >= 0; i--) {//con questo ciclo for metto dall'ultimo carattere al primo all'interno di b
        b[j] = userArray[i];
        j++;
    }
    let c = b.join('');//uso una variabile per riconvertirlo in una stringa
    let result;//creo variabile risultato
    if (userInputToCheck == c) {//controllo carattere per carattere se è palindroma
        result = true;
    } else {
        result = false;
    }
    return result;
}
if (isPal(userInputToCheck)) {
    alert('è palindromo');
} else {
    alert('non è palindromo');
}