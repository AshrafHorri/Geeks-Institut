// Function to play sound when a key is pressed or clicked
function playSound(e) {
    // For keyboard events, use e.keyCode
    // For click events, use this.getAttribute('data-key')
    const keyCode = e.keyCode || this.getAttribute('data-key');
    
    // Find the audio element with the matching data-key
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    
    // Find the key element with the matching data-key
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    
    // If no audio element found, exit the function
    if (!audio) return;
    
    // Reset the audio to the start (allows for rapid playing)
    audio.currentTime = 0;
    
    // Play the audio
    audio.play();
    
    // Add the playing class to the key for visual feedback
    key.classList.add('playing');
}

// Function to remove the playing class when the transition ends
function removeTransition(e) {
    // Skip if it's not a transform transition
    if (e.propertyName !== 'transform') return;
    
    // Remove the playing class
    this.classList.remove('playing');
}

// Add event listeners to all keys for the transitionend event
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Add event listener for keydown event (keyboard)
window.addEventListener('keydown', playSound);

// Add event listeners to all keys for click events (mouse)
keys.forEach(key => key.addEventListener('click', playSound));

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Drumset ready!');
});