const readlineSync = require('readline-sync');

let number;

do {
    const input = readlineSync.question("Veuillez entrer un nombre : ");
    number = Number(input);
} while (number < 10 || isNaN(number));

console.log("Le nombre entré est supérieur ou égal à 10 :", number);