const fs = require('fs').promises;
const path = require('path');

const TASKS_FILE = path.join(__dirname, '../data/tasks.json');

// Read tasks from JSON file
const readTasks = async () => {
  try {
    const data = await fs.readFile(TASKS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist or is empty, return empty array
    if (error.code === 'ENOENT') {
      await writeTasks([]);
      return [];
    }
    throw new Error(`Error reading tasks file: ${error.message}`);
  }
};

// Write tasks to JSON file
const writeTasks = async (tasks) => {
  try {
    await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2), 'utf8');
  } catch (error) {
    throw new Error(`Error writing tasks file: ${error.message}`);
  }
};

module.exports = { readTasks, writeTasks };