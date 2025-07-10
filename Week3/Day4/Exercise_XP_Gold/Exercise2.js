/**
 * Exercise 2: Delete colors
 * 
 * This function removes the selected color from the dropdown list
 * when the "Select and Remove" button is clicked.
 */
function removecolor() {
    // Get the dropdown element
    const colorSelect = document.getElementById('colorSelect');
    
    // Check if there are any options left
    if (colorSelect.options.length > 0) {
        // Get the index of the selected option
        const selectedIndex = colorSelect.selectedIndex;
        
        // Remove the selected option
        colorSelect.remove(selectedIndex);
    }
}