let number;

do {
    number = prompt("8:");
    number = Number(number);
} while (number < 10);

console.log("Le nombre entré est supérieur ou égal à 10 :", number);