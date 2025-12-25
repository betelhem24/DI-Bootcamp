// todo.js - ES6 module syntax

class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(taskDescription) {
        const task = {
            id: this.tasks.length + 1,
            description: taskDescription,
            completed: false
        };
        this.tasks.push(task);
        console.log(`Task added: "${taskDescription}"`);
    }

    markTaskComplete(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
            console.log(`Task ${taskId} marked as complete.`);
        } else {
            console.log(`Task ${taskId} not found.`);
        }
    }

    listAllTasks() {
        console.log('\n=== Todo List ===');
        if (this.tasks.length === 0) {
            console.log('No tasks available.');
            return;
        }

        this.tasks.forEach(task => {
            const status = task.completed ? '✓' : '✗';
            console.log(`[${status}] ${task.id}. ${task.description}`);
        });
        console.log('=================\n');
    }
}

export default TodoList;