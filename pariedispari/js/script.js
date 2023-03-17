let userChoice = prompt("Pari o Dispari");
userChoice = userChoice.toLowerCase();
let userNumber = parseInt(prompt("Insrisci un numero da 1 a 5"));
let cpuNumber = Math.floor(Math.random() * 5 + 1);
console.log('Numero scelto da user '+ userNumber);
console.log('Numero scelto dal computer '+cpuNumber);
/**
 * 
 * @param {number} userNumber 
 * @param {number} cpuNumber 
 * @returns 
 */
function pariODispari(userNumber, cpuNumber){
    let result = (userNumber + cpuNumber) % 2;
    let message;
switch(userChoice){
    case 'pari':
        if(result === 0 && userChoice === 'pari'){
            message = 'Ha vinto User';
        }else{
            message = 'Ha vinto il computer';
        }
        break;

    case 'dispari':
        if(result != 0 && userChoice === 'dispari'){
            message = 'Ha vinto User';
        }else{
            message = 'Ha vinto il computer';
        }
        break;
    default:
        message ='Gioco non completato. Ricaricare la pagina e riprovare';

}
return message;
}
alert(pariODispari(userNumber, cpuNumber));
document.getElementById('');