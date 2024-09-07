function toggleMenu() {
    var options = document.querySelector('.options');
    options.classList.toggle('show');
}
// Retrieve existing todos from local storage
let todoList = JSON.parse(localStorage.getItem('todos')) || [];

// Function to render todos
function renderTodos() {
    const todoListElement = document.getElementById('todoList');
    todoListElement.innerHTML = '';
    todoList.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <input type="checkbox" id="todo${index}" ${todo.completed ? 'checked' : ''} onchange="toggleCompletion(${index})">
            <label for="todo${index}">${index + 1}. ${todo.text}</label>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoListElement.appendChild(todoItem);
    });
}

// Function to add a new todo
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const text = todoInput.value.trim();
    if (text) {
        todoList.push({ text, completed: false });
        localStorage.setItem('todos', JSON.stringify(todoList));
        renderTodos();
        todoInput.value = '';
    }
}

// Function to toggle todo completion
function toggleCompletion(index) {
    todoList[index].completed = !todoList[index].completed;
    localStorage.setItem('todos', JSON.stringify(todoList));
    renderTodos();
}

// Function to delete a todo
function deleteTodo(index) {
    todoList.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todoList));
    renderTodos();
}

// Function to edit a todo
function editTodo(index) {
    const newText = prompt('Enter new text for the todo:');
    if (newText !== null) {
        todoList[index].text = newText.trim();
        localStorage.setItem('todos', JSON.stringify(todoList));
        renderTodos();
    }
}

// Function to clear all todos
function clearAll() {
    if (confirm('Are you sure you want to clear all todos?')) {
        localStorage.removeItem('todos');
        todoList = [];
        renderTodos();
    }
}

// Initial rendering of todos
renderTodos();