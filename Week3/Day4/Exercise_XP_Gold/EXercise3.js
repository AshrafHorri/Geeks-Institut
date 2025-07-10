// Create an empty array for the shopping list
let shoppingList = [];

// Function to render the shopping list
function renderShoppingList() {
    const root = document.getElementById('root');
    
    // Clear the root element
    root.innerHTML = '';
    
    // Create the form
    const form = document.createElement('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addItem();
    });
    
    // Create the input field
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'itemInput';
    input.placeholder = 'Enter item to buy';
    
    // Create the Add Item button
    const addButton = document.createElement('button');
    addButton.type = 'submit';
    addButton.textContent = 'AddItem';
    
    // Create the Clear All button
    const clearButton = document.createElement('button');
    clearButton.type = 'button';
    clearButton.textContent = 'ClearAll';
    clearButton.addEventListener('click', clearAll);
    
    // Append elements to the form
    form.appendChild(input);
    form.appendChild(addButton);
    form.appendChild(clearButton);
    
    // Append the form to the root
    root.appendChild(form);
    
    // Create and append the shopping list display
    const listContainer = document.createElement('div');
    listContainer.id = 'listContainer';
    
    // Create a list of items
    const list = document.createElement('ul');
    
    // Add each item to the list
    shoppingList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
    
    listContainer.appendChild(list);
    root.appendChild(listContainer);
}

// Function to add an item to the shopping list
function addItem() {
    const input = document.getElementById('itemInput');
    const newItem = input.value.trim();
    
    if (newItem !== '') {
        shoppingList.push(newItem);
        input.value = ''; // Clear the input field
        renderShoppingList(); // Re-render the list
    }
}

// Function to clear all items from the shopping list
function clearAll() {
    shoppingList = []; // Reset the array
    renderShoppingList(); // Re-render the list
}

// Initialize the page
document.addEventListener('DOMContentLoaded', renderShoppingList);