// Exercise 1: Colors

// Given array
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Display the colors in the specified format
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// 2. Check if "Violet" exists in the array
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}