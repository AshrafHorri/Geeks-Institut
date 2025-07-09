function changeEnough(itemPrice, amountOfChange) {
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    const quartersCount = amountOfChange[0];
    const dimesCount = amountOfChange[1];
    const nickelsCount = amountOfChange[2];
    const penniesCount = amountOfChange[3];

    const totalChange = 
        (quartersCount * quarterValue) +
        (dimesCount * dimeValue) +
        (nickelsCount * nickelValue) +
        (penniesCount * pennyValue);

    return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));