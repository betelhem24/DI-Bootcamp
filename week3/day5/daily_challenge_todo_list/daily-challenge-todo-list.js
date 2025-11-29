// Daily Challenge: Todo list


// Array to store tasks as objects (BONUS I)
const tasks = [];
let taskId = 0;

// Select DOM elements
const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const taskContainer = document.querySelector(".listTasks");


// Add a new task
function addTask(taskText) {
    taskText = taskText.trim();
    if (taskText === "") return; // Prevent empty tasks

    // Create task object
    const task = {
        task_id: taskId++,
        text: taskText,
        done: false
    };

    tasks.push(task);

    // Create DOM elements for the task
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.setAttribute("data-task-id", task.task_id);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textSpan = document.createElement("span");
    textSpan.className = "text";
    textSpan.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;

    // Check/uncheck task
    checkbox.addEventListener("change", () => {
        doneTask(task.task_id, taskDiv, checkbox.checked);
    });

    // Delete task
    deleteBtn.addEventListener("click", () => {
        deleteTask(task.task_id, taskDiv);
    });

    // Build DOM structure
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(textSpan);
    taskDiv.appendChild(deleteBtn);

    taskContainer.appendChild(taskDiv);

    input.value = ""; // Clear the input field
}


// Mark a task as completed
function doneTask(id, taskDiv, isChecked) {
    const task = tasks.find(t => t.task_id === id);
    if (!task) return;

    task.done = isChecked;
    taskDiv.classList.toggle("completed", task.done);
}


// Delete a task
function deleteTask(id, taskDiv) {
    taskContainer.removeChild(taskDiv);

    const index = tasks.findIndex(t => t.task_id === id);
    if (index !== -1) tasks.splice(index, 1);
}


// Handle form submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask(input.value);
});
