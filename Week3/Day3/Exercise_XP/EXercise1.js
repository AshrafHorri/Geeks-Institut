function displayNumbersDivisible() {
    let sum = 0;
    const divisibleNumbers = [];

    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            divisibleNumbers.push(i);
            sum += i;
        }
    }
    console.log(divisibleNumbers.join(' '));
    console.log('Sum :', sum);
}

displayNumbersDivisible();

function displayNumbersDivisibleBonus(divisor) {
    let sum = 0;
    const divisibleNumbers = [];

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            divisibleNumbers.push(i);
            sum += i;
        }
    }
    console.log(divisibleNumbers.join(' '));
    console.log('Sum :', sum);
}

displayNumbersDivisibleBonus(3);
displayNumbersDivisibleBonus(45);