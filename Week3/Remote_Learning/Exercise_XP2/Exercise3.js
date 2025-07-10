// Get the elements
const box = document.getElementById('box');
const target = document.getElementById('target');

// Make the box draggable
box.setAttribute('draggable', 'true');

// Variables to track the mouse position relative to the box
let offsetX, offsetY;

// Add event listeners for drag and drop
box.addEventListener('dragstart', dragStart);
target.addEventListener('dragover', dragOver);
target.addEventListener('drop', drop);

// Function to handle the start of dragging
function dragStart(e) {
    // Store the mouse position relative to the box
    offsetX = e.clientX - box.getBoundingClientRect().left;
    offsetY = e.clientY - box.getBoundingClientRect().top;
    
    // Set the data to be transferred (required for Firefox)
    e.dataTransfer.setData('text/plain', 'box');
    
    // Set the drag effect
    e.dataTransfer.effectAllowed = 'move';
}

// Function to allow dropping on the target
function dragOver(e) {
    // Prevent default to allow drop
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

// Function to handle the drop
function drop(e) {
    // Prevent default action
    e.preventDefault();
    
    // Calculate the new position inside the target
    const targetRect = target.getBoundingClientRect();
    const x = e.clientX - targetRect.left - offsetX;
    const y = e.clientY - targetRect.top - offsetY;
    
    // Set the box position inside the target
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
    
    // Move the box to the target
    target.appendChild(box);
}