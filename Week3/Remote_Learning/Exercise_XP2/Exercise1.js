// Part I: setTimeout to alert "Hello World" after 2 seconds
setTimeout(function() {
    alert("Hello World");
}, 2000);

// Part II: setTimeout to add a new paragraph to the container after 2 seconds
setTimeout(function() {
    const container = document.getElementById("container");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
}, 2000);

// Part III: setInterval to add a new paragraph every 2 seconds
// The interval will be cleared when the user clicks the button or when there are 5 paragraphs
let intervalId;
let paragraphCount = 0;

// Function to add a paragraph
function addParagraph() {
    const container = document.getElementById("container");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
    
    paragraphCount++;
    
    // Clear interval when there are 5 paragraphs
    if (paragraphCount >= 5) {
        clearInterval(intervalId);
    }
}

// Start the interval
intervalId = setInterval(addParagraph, 2000);

// Clear interval when the button is clicked
document.getElementById("clear").addEventListener("click", function() {
    clearInterval(intervalId);
});