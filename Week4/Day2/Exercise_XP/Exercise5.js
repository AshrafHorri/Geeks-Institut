// Exercise 5: Star Wars

// Given array
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all elements into a single string
const starWarsIntro = epic.reduce((accumulator, currentValue, index) => {
    // Add a space only if it's not the first element
    return index === 0 ? currentValue : accumulator + ' ' + currentValue;
});

// Display the result
console.log(starWarsIntro);
