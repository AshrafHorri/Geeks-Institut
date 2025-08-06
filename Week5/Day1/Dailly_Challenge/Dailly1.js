	// Function 1: makeAllCaps
	function makeAllCaps(words) {
	  return new Promise((resolve, reject) => {
	    // Check if all elements are strings
	    const allStrings = words.every(word => typeof word === 'string');
	    if (allStrings) {
	      // Resolve with uppercase array
	      resolve(words.map(word => word.toUpperCase()));
	    } else {
	      // Reject with error
	      reject('Not all elements are strings');
	    }
	  });
	}
	// Function 2: sortWords
	function sortWords(words) {
	  return new Promise((resolve, reject) => {
	    if (words.length > 4) {
	      // Resolve with sorted array
	      resolve(words.sort());
	    } else {
	      // Reject with error
	      reject('Array length is not greater than 4');
	    }
	  });
	}
	// Test Cases
	// Case 1: Should catch error (non-string element)
	makeAllCaps([1, "pear", "banana"])
	  .then(arr => sortWords(arr))
	  .then(result => console.log(result))
	  .catch(error => console.log(error)); // "Not all elements are strings"
	// Case 2: Should catch error (array length <= 4)
	makeAllCaps(["apple", "pear", "banana"])
	  .then(arr => sortWords(arr))
	  .then(result => console.log(result))
	  .catch(error => console.log(error)); // "Array length is not greater than 4"
	// Case 3: Should succeed (uppercase and sorted)
	makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
	  .then(arr => sortWords(arr))
	  .then(result => console.log(result)) // ["APPLE","BANANA","KIWI","MELON","PEAR"]
	  .catch(error => console.log(error));