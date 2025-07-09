// Initialize tasks array
const tasks = [];

// Function to add a new task
function addTask() {
    // Get the input value
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    // Check if the input is not empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Create a new task object (for BONUS I)
    const taskId = tasks.length;
    const newTask = {
        task_id: taskId,
        text: taskText,
        done: false
    };
    
    // Add the task to the array
    tasks.push(newTask);
    
    // Add the task to the DOM
    renderTask(newTask);
    
    // Clear the input
    taskInput.value = '';
}

// Function to render a task in the DOM
function renderTask(task) {
    const listTasks = document.querySelector('.listTasks');
    
    // Create task item container
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.setAttribute('data-task-id', task.task_id);
    
    // Create delete button with Font Awesome icon
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.onclick = function() {
        deleteTask(task.task_id);
    };
    
    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.done;
    checkbox.onchange = function() {
        doneTask(task.task_id);
    };
    
    // Create label for the checkbox
    const label = document.createElement('label');
    label.className = 'task-text';
    if (task.done) {
        label.classList.add('task-done');
    }
    label.textContent = task.text;
    
    // Append elements to task item
    taskItem.appendChild(deleteBtn);
    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);
    
    // Append task item to the list
    listTasks.appendChild(taskItem);
}

// Function to mark a task as done (for BONUS I)
function doneTask(taskId) {
    // Find the task in the array
    const taskIndex = tasks.findIndex(task => task.task_id === taskId);
    
    if (taskIndex !== -1) {
        // Toggle the done property
        tasks[taskIndex].done = !tasks[taskIndex].done;
        
        // Update the DOM
        const taskItem = document.querySelector(`[data-task-id="${taskId}"]`);
        const label = taskItem.querySelector('.task-text');
        
        if (tasks[taskIndex].done) {
            label.classList.add('task-done');
        } else {
            label.classList.remove('task-done');
        }
    }
}

// Function to delete a task (for BONUS II)
function deleteTask(taskId) {
    // Find the task in the array
    const taskIndex = tasks.findIndex(task => task.task_id === taskId);
    
    if (taskIndex !== -1) {
        // Remove the task from the array
        tasks.splice(taskIndex, 1);
        
        // Remove the task from the DOM
        const taskItem = document.querySelector(`[data-task-id="${taskId}"]`);
        taskItem.remove();
    }
}

// Event listener for form submission
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    console.log('Todo List App initialized');
});