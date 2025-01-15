const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Initialize task array
let tasks = [];

// Function to add task
function addTask(task) {
    tasks.push(task);
    renderTaskList();
}

// Function to render task list
function renderTaskList() {
    const taskHtml = tasks.map((task, index) => {
        return `
            <li class="task-item ${task.completed ? 'completed' : ''}">
                <span>${task.text}</span>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </li>
        `;
    }).join('');

    taskList.innerHTML = taskHtml;
}
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTaskList();
}

// Event listeners
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask({ text: taskText, completed: false });
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        deleteTask(index);
    }
});

// Initialize task list
renderTaskList();


