// DOM Elements
const rgbDisplay = document.getElementById('rgb-display');
const colorContainer = document.getElementById('color-container');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const rgbInputContainer = document.getElementById('rgb-input-container');
const redInput = document.getElementById('red-input');
const greenInput = document.getElementById('green-input');
const blueInput = document.getElementById('blue-input');
const submitRgbBtn = document.getElementById('submit-rgb');
const messageElement = document.getElementById('message');
const newGameBtn = document.getElementById('new-game-btn');
const timerElement = document.getElementById('timer');
const countdownElement = document.getElementById('countdown');

// Game variables
let correctColor;
let difficulty = 'easy';
let isGameActive = true;
let countdownInterval;

// Initialize the game
window.addEventListener('DOMContentLoaded', () => {
    setupDifficultyButtons();
    startNewGame();
});

// Set up difficulty buttons
function setupDifficultyButtons() {
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Only change difficulty if the game is active or a new game
            if (isGameActive) {
                // Remove active class from all buttons
                difficultyBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                // Update difficulty
                difficulty = btn.dataset.difficulty;
                // Start a new game with the new difficulty
                startNewGame();
            }
        });
    });
}

// Start a new game
function startNewGame() {
    isGameActive = true;
    clearMessage();
    stopCountdown();
    timerElement.classList.add('hidden');

    // Generate a random RGB color
    correctColor = generateRandomColor();

    // Display the RGB value
    rgbDisplay.textContent = `RGB(${correctColor.r}, ${correctColor.g}, ${correctColor.b})`;

    // Set up the game based on difficulty
    setupGameByDifficulty();
}

// Generate a random RGB color
function generateRandomColor() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

// Set up the game based on difficulty
function setupGameByDifficulty() {
    // Clear previous color swatches
    colorContainer.innerHTML = '';

    // Hide RGB input container by default
    rgbInputContainer.classList.add('hidden');

    // Remove hard mode event listener if it exists
    removeHardModeListener();

    switch (difficulty) {
        case 'easy':
            setupEasyMode();
            break;
        case 'medium':
            setupMediumMode();
            break;
        case 'hard':
            setupHardMode();
            break;
    }
}

// Set up easy mode (3 color swatches)
function setupEasyMode() {
    const colors = [correctColor];

    // Generate 2 more random colors
    for (let i = 0; i < 2; i++) {
        colors.push(generateRandomColor());
    }

    // Shuffle the colors
    shuffleArray(colors);

    // Create color swatches
    colors.forEach(color => {
        createColorSwatch(color);
    });
}

// Set up medium mode (6 RGB values)
function setupMediumMode() {
    const colors = [correctColor];

    // Generate 5 more random colors
    for (let i = 0; i < 5; i++) {
        colors.push(generateRandomColor());
    }

    // Shuffle the colors
    shuffleArray(colors);

    // Create color swatches
    colors.forEach(color => {
        createColorSwatch(color);
    });
}

// Set up hard mode (input exact RGB values)
function setupHardMode() {
    // Show RGB input container
    rgbInputContainer.classList.remove('hidden');

    // Clear input fields
    redInput.value = '';
    greenInput.value = '';
    blueInput.value = '';

    // Add event listener to submit button
    submitRgbBtn.addEventListener('click', checkRgbInput);
}

// Create a color swatch
function createColorSwatch(color) {
    const swatch = document.createElement('div');
    swatch.classList.add('color-swatch');
    swatch.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

    // Add click event listener
    swatch.addEventListener('click', () => {
        if (isGameActive) {
            checkGuess(color);
        }
    });

    colorContainer.appendChild(swatch);
}

// Check if the guessed color is correct
function checkGuess(guessedColor) {
    if (
        guessedColor.r === correctColor.r &&
        guessedColor.g === correctColor.g &&
        guessedColor.b === correctColor.b
    ) {
        handleCorrectGuess();
    } else {
        handleIncorrectGuess();
    }
}

// Check RGB input for hard mode
function checkRgbInput() {
    const guessedColor = {
        r: parseInt(redInput.value) || 0,
        g: parseInt(greenInput.value) || 0,
        b: parseInt(blueInput.value) || 0
    };

    checkGuess(guessedColor);
}

// Handle correct guess
function handleCorrectGuess() {
    isGameActive = false;
    displayMessage('Correct!', 'correct');
    startCountdown();
}

// Handle incorrect guess
function handleIncorrectGuess() {
    displayMessage('Incorrect! Try again.', 'incorrect');
}

// Display a message
function displayMessage(text, className) {
    messageElement.textContent = text;
    messageElement.className = '';
    messageElement.classList.add(className);
}

// Clear the message
function clearMessage() {
    messageElement.textContent = '';
    messageElement.className = '';
}

// Start the countdown timer
function startCountdown() {
    let seconds = 5;
    timerElement.classList.remove('hidden');
    countdownElement.textContent = seconds;

    countdownInterval = setInterval(() => {
        seconds--;
        countdownElement.textContent = seconds;

        if (seconds <= 0) {
            stopCountdown();
            startNewGame();
        }
    }, 1000);
}

// Stop the countdown timer
function stopCountdown() {
    clearInterval(countdownInterval);
}

// Shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// New Game button event listener
newGameBtn.addEventListener('click', startNewGame);

// Remove event listener when switching from hard mode
function removeHardModeListener() {
    submitRgbBtn.removeEventListener('click', checkRgbInput);
}
