// Function to validate email using regex
function validateEmailWithRegex(email) {
    // Regular expression for email validation
    // This checks for:
    // - One or more characters before the @ symbol
    // - One or more characters after the @ symbol
    // - A period (.) followed by at least two characters at the end
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}

// Function to validate email without using regex
function validateEmailWithoutRegex(email) {
    // Check if email is empty or contains spaces
    if (!email || email.includes(' ')) {
        return false;
    }
    
    // Check if email contains exactly one @ symbol
    const atSymbolIndex = email.indexOf('@');
    if (atSymbolIndex === -1 || email.indexOf('@', atSymbolIndex + 1) !== -1) {
        return false;
    }
    
    // Check if there are characters before and after the @ symbol
    const localPart = email.substring(0, atSymbolIndex);
    const domainPart = email.substring(atSymbolIndex + 1);
    
    if (localPart.length === 0 || domainPart.length === 0) {
        return false;
    }
    
    // Check if domain part contains at least one period (.)
    const periodIndex = domainPart.indexOf('.');
    if (periodIndex === -1) {
        return false;
    }
    
    // Check if there are characters before and after the period
    const domainName = domainPart.substring(0, periodIndex);
    const extension = domainPart.substring(periodIndex + 1);
    
    if (domainName.length === 0 || extension.length < 2) {
        return false;
    }
    
    return true;
}

// Main validation function called on form submission
function validateEmail() {
    // Get the email input value
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    
    // Get the selected validation method
    const useRegex = document.getElementById('withRegex').checked;
    
    // Validate the email using the selected method
    let isValid;
    if (useRegex) {
        isValid = validateEmailWithRegex(email);
    } else {
        isValid = validateEmailWithoutRegex(email);
    }
    
    // Show appropriate message based on validation result
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    
    if (isValid) {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
    
    // Return false to prevent form submission
    return false;
}

// Add event listeners to radio buttons to allow real-time validation when switching methods
document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[name="validationMethod"]');
    const emailInput = document.getElementById('email');
    
    // Add change event listeners to radio buttons
    radioButtons.forEach(function(radio) {
        radio.addEventListener('change', function() {
            // If email field has a value, validate it again with the new method
            if (emailInput.value.trim()) {
                validateEmail();
            }
        });
    });
    
    // Add input event listener to email field for real-time validation
    emailInput.addEventListener('input', function() {
        validateEmail();
    });
});