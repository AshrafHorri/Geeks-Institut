// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the HTML elements
    const getLocationBtn = document.getElementById('getLocationBtn');
    const coordinatesDiv = document.getElementById('coordinates');
    const latitudeSpan = document.getElementById('latitude');
    const longitudeSpan = document.getElementById('longitude');
    
    // Add click event listener to the button
    getLocationBtn.addEventListener('click', getLocation);
    
    // Function to get the user's location
    function getLocation() {
        // Check if geolocation is supported by the browser
        if (navigator.geolocation) {
            // Get the current position
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            // Geolocation is not supported
            alert("Geolocation is not supported by this browser.");
        }
    }
    
    // Function to display the position
    function showPosition(position) {
        // Get the coordinates
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        // Display the coordinates
        latitudeSpan.textContent = latitude;
        longitudeSpan.textContent = longitude;
        
        // Show the coordinates div
        coordinatesDiv.style.display = 'block';
    }
    
    // Function to handle errors
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    }
});