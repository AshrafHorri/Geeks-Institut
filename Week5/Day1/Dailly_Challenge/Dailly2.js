
	// Function 1: Convert Morse JSON to JavaScript Object
	function toJs() {
	  return new Promise((resolve, reject) => {
	    const morseJS = JSON.parse(morse);
	    if (Object.keys(morseJS).length === 0) {
	      reject("Morse object is empty");
	    } else {
	      resolve(morseJS);
	    }
	  });
	}
	// Function 2: Convert User Input to Morse Code
	function toMorse(morseJS) {
	  return new Promise((resolve, reject) => {
	    const input = prompt("Enter a word or sentence:");
	    const morseTranslation = [];
	    for (const char of input.toLowerCase()) {
	      if (morseJS[char]) {
	        morseTranslation.push(morseJS[char]);
	      } else {
	        reject(`Character "${char}" doesn't exist in Morse code`);
	        return;
	      }
	    }
	    resolve(morseTranslation);
	  });
	}
	// Function 3: Display Morse Translation on DOM
	function joinWords(morseTranslation) {
	  const container = document.createElement('div');
	  container.style.whiteSpace = 'pre-line'; // Preserve line breaks
	  container.textContent = morseTranslation.join('\n');
	  document.body.appendChild(container);
	}
	// Chain the functions
	toJs()
	  .then(morseJS => toMorse(morseJS))
	  .then(morseTranslation => joinWords(morseTranslation))
	  .catch(error => console.error(error));