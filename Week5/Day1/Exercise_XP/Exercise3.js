	// Create a resolved promise with value 3
	const resolvedPromise = Promise.resolve(3);
	// Create a rejected promise with error "Boo!"
	const rejectedPromise = Promise.reject('Boo!');
	// Test the resolved promise
	resolvedPromise
	    .then(result => console.log(result)) // Logs: 3
	    .catch(error => console.log(error)); // This won't execute
	// Test the rejected promise
	rejectedPromise
	    .then(result => console.log(result)) // This won't execute
	    .catch(error => console.log(error)); // Logs: Boo!