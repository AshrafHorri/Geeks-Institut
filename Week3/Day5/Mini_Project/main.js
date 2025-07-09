// DOM Elements
const colorElements = document.querySelectorAll('.color');
const selectedColorElement = document.querySelector('.selected-color');
const drawingGrid = document.getElementById('drawing-grid');
const clearButton = document.getElementById('clear-btn');
const saveButton = document.getElementById('save-btn');

// Variables
let selectedColor = '';
let isDrawing = false;

// Initialize the app
function init() {
    createGrid();
    setupEventListeners();
    // Set default selected color to the first color
    if (colorElements.length > 0) {
        selectColor(colorElements[0]);
    }
}

// Create the drawing grid
function createGrid() {
    // Create 20x20 grid (400 squares)
    for (let i = 0; i < 400; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        drawingGrid.appendChild(square);
    }
}

// Set up all event listeners
function setupEventListeners() {
    // Color selection
    colorElements.forEach(color => {
        color.addEventListener('click', () => {
            selectColor(color);
        });
    });

    // Drawing functionality
    drawingGrid.addEventListener('mousedown', startDrawing);
    drawingGrid.addEventListener('mouseup', stopDrawing);
    drawingGrid.addEventListener('mouseleave', stopDrawing);

    // Add mouseover event to each grid square
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.addEventListener('mouseover', draw);
        square.addEventListener('mousedown', draw); // For immediate coloring on click
    });

    // Clear button
    clearButton.addEventListener('click', clearGrid);

    // Save button
    saveButton.addEventListener('click', saveDrawing);
}

// Select a color
function selectColor(colorElement) {
    // Remove selected class from all colors
    colorElements.forEach(color => {
        color.classList.remove('selected');
    });

    // Add selected class to clicked color
    colorElement.classList.add('selected');

    // Update selected color
    selectedColor = colorElement.getAttribute('data-color');
    selectedColorElement.style.backgroundColor = selectedColor;
}

// Start drawing
function startDrawing() {
    if (selectedColor) {
        isDrawing = true;
    }
}

// Stop drawing
function stopDrawing() {
    isDrawing = false;
}

// Draw on grid squares
function draw(event) {
    // Check if we're drawing and a color is selected
    if (isDrawing && selectedColor) {
        event.target.style.backgroundColor = selectedColor;
    }
}

// Clear the grid
function clearGrid() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
}

// Save the drawing as an image
function saveDrawing() {
    // Use html2canvas to capture the drawing grid
    html2canvas(drawingGrid).then(canvas => {
        // Create a download link
        const link = document.createElement('a');
        link.download = 'my-drawing.png';

        // Convert canvas to data URL
        link.href = canvas.toDataURL('image/png');

        // Trigger the download
        link.click();
    });
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
