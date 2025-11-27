// Array to store tasks as objects
const tasks = [];
let taskId = 0; // Unique ID for each task

// Set to store session autocomplete history
const historySet = new Set();

// Select elements
const form = document.getElementById('todoForm');
const input = document.getElementById('taskInput');
const datalist = document.getElementById('historyList');
const taskContainer = document.querySelector('.listTasks');
const clearBtn = document.getElementById('clearHistory');

/**
 * Add a new task
 * @param {string} taskText
 */
function addTask(taskText) {
    taskText = taskText.trim();
    if (!taskText) return;

    const task = { task_id: taskId++, text: taskText, done: false };
    tasks.push(task);

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.setAttribute('data-task-id', task.task_id);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const textSpan = document.createElement('span');
    textSpan.className = 'text';
    textSpan.textContent = task.text;

    const emojiSpan = document.createElement('span');
    emojiSpan.className = 'emoji';
    emojiSpan.textContent = '';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'X';
    deleteBtn.title = "Delete Task";

    // Delete task
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteTask(task.task_id, taskDiv);
    });

    // Toggle completion on task click
    taskDiv.addEventListener('click', () => {
        task.done = !task.done;
        taskDiv.classList.toggle('completed');
        emojiSpan.textContent = task.done ? ' 😊' : '';
        checkbox.checked = task.done;
    });

    // Toggle completion on checkbox click
    checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
        task.done = checkbox.checked;
        taskDiv.classList.toggle('completed', task.done);
        emojiSpan.textContent = task.done ? ' 😊' : '';
    });

    // Append elements
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(textSpan);
    taskDiv.appendChild(emojiSpan);
    taskDiv.appendChild(deleteBtn);

    taskContainer.appendChild(taskDiv);

    // Add to session autocomplete
    if (!historySet.has(taskText)) {
        historySet.add(taskText);
        const option = document.createElement('option');
        option.value = taskText;
        datalist.appendChild(option);
    }
}

// Delete a task
function deleteTask(id, taskDiv) {
    taskContainer.removeChild(taskDiv);
    const index = tasks.findIndex(task => task.task_id === id);
    if (index > -1) tasks.splice(index, 1);
}

// Clear session autocomplete history
function clearHistory() {
    historySet.clear();
    datalist.innerHTML = '';
}

// Delete a specific word from session history
function deleteHistoryWord(word) {
    if (historySet.has(word)) {
        historySet.delete(word);
        const options = datalist.querySelectorAll('option');
        options.forEach(option => {
            if (option.value === word) datalist.removeChild(option);
        });
        console.log(`Deleted history word: "${word}"`);
    }
}

// Handle form submit (Enter key or Add button)
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent browser submit
    addTask(input.value);
    input.value = '';
});

// Clear history button (optional)
clearBtn.addEventListener('click', clearHistory);

// Optional: clear input on focus to avoid any leftover text
input.addEventListener('focus', () => {
    input.value = '';
});
