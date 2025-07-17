// Exercise 4: Nested arrays

// Part 1: Flatten the array
console.log("Part 1: Flatten the array");
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
// Using flat method with depth of 2 to flatten the array
const flattenedArray = array.flat(2);
console.log("Original array:", array);
console.log("Flattened array:", flattenedArray);

// Bonus: One-line solution
console.log("One-line solution:", [[1],[2],[3],[[[4]]],[[[5]]]].flat(2));

// Part 2: Join strings in nested arrays
console.log("\nPart 2: Join strings in nested arrays");
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// Using map and join to combine strings in each subarray
const joinedGreeting = greeting.map(subArray => subArray.join(" "));
console.log("Original greeting:", greeting);
console.log("Joined greeting:", joinedGreeting);

// Part 3: Convert greeting array to a string
console.log("\nPart 3: Convert greeting array to a string");
// Using join with a space to combine all elements
const greetingString = joinedGreeting.join(" ");
console.log("Greeting string:", greetingString);

// Part 4: Extract the number from a deeply nested array
console.log("\nPart 4: Extract the number from a deeply nested array");
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
// Using flat with Infinity to completely flatten the array
const freed = trapped.flat(Infinity);
console.log("Original trapped array:", trapped);
console.log("Freed number:", freed);

/* 
Explanation:

1. Array.flat(depth) method:
   - Creates a new array with all sub-array elements concatenated recursively up to the specified depth
   - The depth parameter specifies how deep the nesting should be flattened
   - Using flat(2) flattens up to 2 levels deep
   - Using flat(Infinity) completely flattens the array regardless of nesting depth

2. Array.map() method:
   - Creates a new array with the results of calling a function on every element
   - We use it to apply join(" ") to each subarray

3. Array.join(separator) method:
   - Joins all elements of an array into a string
   - The separator parameter specifies the string to separate each element
*/