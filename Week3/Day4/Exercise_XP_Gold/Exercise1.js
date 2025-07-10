// Get the necessary elements
const genreSelect = document.getElementById('genres');
const displayValue = document.getElementById('displayValue');

// Function to display the selected value
function updateSelectedValue() {
    // Get the value of the selected option
    const selectedValue = genreSelect.value;
    
    // Update the display
    displayValue.textContent = selectedValue;
}

// Display the initial selected value when the page loads
window.addEventListener('DOMContentLoaded', updateSelectedValue);

// Update the display whenever the selection changes
genreSelect.addEventListener('change', updateSelectedValue);