// Exercise 2: Colors #2

// Given arrays
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

// Display the colors with ordinal numbers
colors.forEach((color, index) => {
    // Using ternary operator to determine the correct ordinal suffix
    // For numbers ending with 1, 2, 3 we use "st", "nd", "rd" respectively
    // Exception: numbers 11, 12, 13 use "th"
    // For all others, we use "th"
    const position = index + 1;
    const lastDigit = position % 10;
    const specialCase = position % 100 >= 11 && position % 100 <= 13;

    // Ternary operator to determine the suffix
    const suffix = !specialCase && lastDigit <= 3 && lastDigit !== 0 ? ordinal[lastDigit] : ordinal[0];

    console.log(`${position}${suffix} choice is ${color}.`);
});
