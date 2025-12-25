// app.js - ES6 module syntax

import TodoList from './todo.js';

// Create an instance of TodoList
const myTodoList = new TodoList();

// Add tasks
console.log('Adding tasks...\n');
myTodoList.addTask('Buy groceries');
myTodoList.addTask('Complete Node.js exercises');
myTodoList.addTask('Read a book');
myTodoList.addTask('Go for a run');

console.log('\n-------------------');

// List all tasks
myTodoList.listAllTasks();

// Mark some tasks as complete
console.log('Marking tasks as complete...\n');
myTodoList.markTaskComplete(1);
myTodoList.markTaskComplete(3);

console.log('\n-------------------');

// List all tasks again to see the updates
myTodoList.listAllTasks();