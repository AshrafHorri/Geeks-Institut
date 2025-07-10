// DOM Elements
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const gameGridElement = document.getElementById('game-grid');
const startButton = document.getElementById('start-btn');
const highScoresElement = document.getElementById('high-scores');
const highScoresList = document.getElementById('high-scores-list');
const nameInputContainer = document.getElementById('name-input-container');
const playerNameInput = document.getElementById('player-name');
const saveScoreButton = document.getElementById('save-score-btn');
const playAgainButton = document.getElementById('play-again-btn');

// Game variables
let score = 0;
let timeLeft = 30;
let gameInterval;
let moleInterval;
let isGameRunning = false;
let highScores = [];
const gridSize = 9; // 3x3 grid
const moleEmoji = '🐹'; // Mole emoji

// Initialize the game
function initGame() {
    // Create grid cells
    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.dataset.index = i;
        
        // Create mole element
        const mole = document.createElement('div');
        mole.className = 'mole';
        mole.textContent = moleEmoji;
        cell.appendChild(mole);
        
        // Add click event to whack mole
        cell.addEventListener('click', whackMole);
        
        gameGridElement.appendChild(cell);
    }
    
    // Load high scores from local storage
    loadHighScores();
    
    // Add event listeners for buttons
    startButton.addEventListener('click', startGame);
    saveScoreButton.addEventListener('click', saveHighScore);
    playAgainButton.addEventListener('click', resetGame);
}

// Start the game
function startGame() {
    if (isGameRunning) return;
    
    isGameRunning = true;
    score = 0;
    timeLeft = 30;
    
    // Update UI
    scoreElement.textContent = score;
    timerElement.textContent = timeLeft;
    startButton.disabled = true;
    highScoresElement.classList.add('hidden');
    playAgainButton.classList.add('hidden');
    nameInputContainer.classList.add('hidden');
    
    // Start timer
    gameInterval = setInterval(updateTimer, 1000);
    
    // Start showing moles
    showMoles();
}

// Update timer
function updateTimer() {
    timeLeft--;
    timerElement.textContent = timeLeft;
    
    if (timeLeft <= 0) {
        endGame();
    }
}

// Show moles randomly
function showMoles() {
    const moles = document.querySelectorAll('.mole');
    const cells = document.querySelectorAll('.grid-cell');
    
    // Hide all moles first
    moles.forEach(mole => {
        mole.classList.remove('visible');
    });
    
    // Show a random mole
    function showRandomMole() {
        if (!isGameRunning) return;
        
        // Hide all moles
        moles.forEach(mole => {
            mole.classList.remove('visible');
        });
        
        // Select a random cell
        const randomIndex = Math.floor(Math.random() * gridSize);
        const randomMole = moles[randomIndex];
        
        // Show the mole
        randomMole.classList.add('visible');
        
        // Set a timeout to hide the mole
        setTimeout(() => {
            if (isGameRunning) {
                randomMole.classList.remove('visible');
            }
        }, 800); // Mole visible for 800ms
    }
    
    // Show moles at random intervals
    moleInterval = setInterval(() => {
        showRandomMole();
    }, 1000); // New mole every 1 second
}

// Handle mole whacking
function whackMole(event) {
    if (!isGameRunning) return;
    
    const cell = event.currentTarget;
    const mole = cell.querySelector('.mole');
    
    // Check if mole is visible (whackable)
    if (mole.classList.contains('visible')) {
        // Increase score
        score++;
        scoreElement.textContent = score;
        
        // Visual feedback
        cell.classList.add('active');
        setTimeout(() => {
            cell.classList.remove('active');
        }, 100);
        
        // Hide the mole
        mole.classList.remove('visible');
    }
}

// End the game
function endGame() {
    isGameRunning = false;
    clearInterval(gameInterval);
    clearInterval(moleInterval);
    
    // Check if score is a high score
    const isHighScore = checkHighScore(score);
    
    if (isHighScore) {
        // Show name input for high score
        nameInputContainer.classList.remove('hidden');
    } else {
        // Show high scores
        displayHighScores();
        highScoresElement.classList.remove('hidden');
    }
    
    playAgainButton.classList.remove('hidden');
    startButton.disabled = false;
}

// Check if score is a high score
function checkHighScore(score) {
    // If we have less than 5 scores, it's automatically a high score
    if (highScores.length < 5) return true;
    
    // Check if score is higher than the lowest high score
    return score > highScores[highScores.length - 1].score;
}

// Save high score
function saveHighScore() {
    const name = playerNameInput.value.trim() || 'Anonymous';
    
    // Add new score
    highScores.push({ name, score });
    
    // Sort high scores (highest first)
    highScores.sort((a, b) => b.score - a.score);
    
    // Keep only top 5
    if (highScores.length > 5) {
        highScores = highScores.slice(0, 5);
    }
    
    // Save to local storage
    localStorage.setItem('whackAMoleHighScores', JSON.stringify(highScores));
    
    // Hide name input
    nameInputContainer.classList.add('hidden');
    
    // Show high scores
    displayHighScores();
    highScoresElement.classList.remove('hidden');
}

// Load high scores from local storage
function loadHighScores() {
    const storedScores = localStorage.getItem('whackAMoleHighScores');
    if (storedScores) {
        highScores = JSON.parse(storedScores);
    }
}

// Display high scores
function displayHighScores() {
    // Clear previous scores
    highScoresList.innerHTML = '';
    
    // Add each high score to the list
    highScores.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.name}: ${entry.score}`;
        highScoresList.appendChild(listItem);
    });
    
    // If no high scores yet
    if (highScores.length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = 'No high scores yet!';
        highScoresList.appendChild(listItem);
    }
}

// Reset game for playing again
function resetGame() {
    // Reset UI
    scoreElement.textContent = '0';
    timerElement.textContent = '30';
    
    // Hide elements
    highScoresElement.classList.add('hidden');
    playAgainButton.classList.add('hidden');
    nameInputContainer.classList.add('hidden');
    
    // Clear input
    playerNameInput.value = '';
    
    // Start new game
    startGame();
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);