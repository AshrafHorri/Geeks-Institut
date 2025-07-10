// Todo list application

// Initialize the todo list array
let todos = [];
let currentFilter = 'all';

// DOM Elements
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');
const removeAllBtn = document.getElementById('removeAllBtn');
const allFilterBtn = document.getElementById('allFilter');
const activeFilterBtn = document.getElementById('activeFilter');
const completedFilterBtn = document.getElementById('completedFilter');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    addTodoBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    removeAllBtn.addEventListener('click', removeAllTodos);
    allFilterBtn.addEventListener('click', () => setFilter('all'));
    activeFilterBtn.addEventListener('click', () => setFilter('active'));
    completedFilterBtn.addEventListener('click', () => setFilter('completed'));
    
    // Initial render
    renderTodos();
});

// Add a new todo
function addTodo() {
    const todoText = todoInput.value.trim();
    
    if (todoText) {
        const newTodo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };
        
        todos.push(newTodo);
        todoInput.value = '';
        renderTodos();
    }
}

// Toggle todo completion status
function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    
    renderTodos();
}

// Remove a specific todo
function removeTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// Remove all todos
function removeAllTodos() {
    todos = [];
    renderTodos();
}

// Set the current filter
function setFilter(filter) {
    currentFilter = filter;
    
    // Update active filter button
    allFilterBtn.classList.remove('active');
    activeFilterBtn.classList.remove('active');
    completedFilterBtn.classList.remove('active');
    
    switch (filter) {
        case 'all':
            allFilterBtn.classList.add('active');
            break;
        case 'active':
            activeFilterBtn.classList.add('active');
            break;
        case 'completed':
            completedFilterBtn.classList.add('active');
            break;
    }
    
    renderTodos();
}

// Filter todos based on current filter
function getFilteredTodos() {
    switch (currentFilter) {
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

// Render the todo list
function renderTodos() {
    const filteredTodos = getFilteredTodos();
    
    // Clear the current list
    todoList.innerHTML = '';
    
    // Update "Remove All" button state
    removeAllBtn.disabled = todos.length === 0;
    
    // Show empty state if no todos
    if (todos.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.textContent = 'No todos yet. Add a new task above!';
        todoList.appendChild(emptyState);
        return;
    }
    
    // Show message if no todos match the filter
    if (filteredTodos.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.textContent = `No ${currentFilter} todos found.`;
        todoList.appendChild(emptyState);
        return;
    }
    
    // Create todo items
    filteredTodos.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleTodo(todo.id));
        
        // Todo text
        const todoText = document.createElement('span');
        todoText.className = 'todo-text';
        todoText.textContent = todo.text;
        
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn delete-btn';
        deleteBtn.innerHTML = '<span class="material-icons">delete</span>';
        deleteBtn.addEventListener('click', () => removeTodo(todo.id));
        
        // Append elements to todo item
        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteBtn);
        
        // Append todo item to list
        todoList.appendChild(todoItem);
    });
}