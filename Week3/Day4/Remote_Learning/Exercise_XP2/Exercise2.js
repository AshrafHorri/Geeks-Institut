function myMove() {
    // Get the animate element
    const animateElement = document.getElementById("animate");
    
    // Reset the position to the starting point (left: 0)
    animateElement.style.left = "0px";
    
    // Set the interval to move the box
    let position = 0;
    const containerWidth = document.getElementById("container").offsetWidth;
    const animateWidth = animateElement.offsetWidth;
    const maxPosition = containerWidth - animateWidth;
    
    // Move the box 1px to the right every millisecond
    const interval = setInterval(function() {
        // If the box has reached the right edge of the container
        if (position >= maxPosition) {
            // Clear the interval
            clearInterval(interval);
        } else {
            // Increment the position
            position++;
            // Update the position of the box
            animateElement.style.left = position + "px";
        }
    }, 1); // 1 millisecond interval
}