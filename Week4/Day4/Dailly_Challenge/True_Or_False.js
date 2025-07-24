// Function that returns true if all parameters are truthy, and false otherwise
function allTruthy(...args) {
    // Check if all arguments are truthy
    return args.every(arg => Boolean(arg));
}

// Test cases
console.log("Testing allTruthy function:");
console.log("allTruthy(true, true, true):", allTruthy(true, true, true)); // Expected: true
console.log("allTruthy(true, false, true):", allTruthy(true, false, true)); // Expected: false
console.log("allTruthy(5, 4, 3, 2, 1, 0):", allTruthy(5, 4, 3, 2, 1, 0)); // Expected: false

// Additional test cases to verify edge cases
console.log("allTruthy():", allTruthy()); // Expected: true (no arguments, vacuous truth)
console.log("allTruthy(1):", allTruthy(1)); // Expected: true
console.log("allTruthy(0):", allTruthy(0)); // Expected: false
console.log("allTruthy('hello', 'world'):", allTruthy('hello', 'world')); // Expected: true
console.log("allTruthy('hello', ''):", allTruthy('hello', '')); // Expected: false
console.log("allTruthy(null, undefined):", allTruthy(null, undefined)); // Expected: false