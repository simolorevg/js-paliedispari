const userInput = prompt("Inserisci una parola");
let userInputToCheck = userInput.toLowerCase();
//creo la funzione
/**
 * 
 * @param {string} a 
 * @returns {boolean}
 */
function isPal(userInputToCheck) {
    let userArray = userInputToCheck.split("");
    let b = [];
    let j = 0;
    for (let i = userArray.length - 1; i >= 0; i--) {
        b[j] = userArray[i];
        j++;
    }
    let c = b.join('');
    let result;
    console.log(c);
    for (let x = 0; x < userArray.length; x++) {
        if (userInputToCheck == c) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}
if(isPal(userInputToCheck)){
    alert('è palindromo');
}else{
    alert('non è palindromo');
}