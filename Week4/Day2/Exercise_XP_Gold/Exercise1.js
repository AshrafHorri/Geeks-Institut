// Exercise 1: Analyzing the map method

// The code to analyze:
const result = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});

console.log("Result of the map operation:", result);

/* 
Analysis:

1. The map() method creates a new array by calling a provided function on every element in the calling array.

2. In this code:
   - We start with the array [1, 2, 3]
   - For each element, we check if it's a number using typeof
   - If it is a number (which all elements are), we multiply it by 2
   - If not, we return undefined (which happens when you use 'return;' with no value)

3. Since all elements in the array are numbers, each will pass the condition and be multiplied by 2.

4. The output will be: [2, 4, 6]

Note: Even if an element wasn't a number, map would still include a value in the resulting array.
In that case, it would be 'undefined' because of the empty return statement.
*/

// To demonstrate this further, let's try with a mixed array:
const mixedResult = [1, "two", 3, null].map(item => {
  if (typeof item === 'number') return item * 2;
  return;
});

console.log("Result with mixed types:", mixedResult);
// This will output: [2, undefined, 6, undefined]
// Because only 1 and 3 are numbers, while "two" and null are not.