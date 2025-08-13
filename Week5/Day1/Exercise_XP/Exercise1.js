	function compareToTen(num) {
	    return new Promise((resolve, reject) => {
	        if (num <= 10) {
	            resolve("The number is less than or equal to 10");
	        } else {
	            reject("The number is greater than 10");
	        }
	    });
	}
	// Test cases
	compareToTen(15)
	  .then(result => console.log(result))
	  .catch(error => console.log(error));
	compareToTen(8)
	  .then(result => console.log(result))
	  .catch(error => console.log(error));
