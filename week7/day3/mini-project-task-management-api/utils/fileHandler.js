/**
 * FILE HANDLER UTILITY
 * 
 * This module handles all file read/write operations for the tasks.json file.
 * It provides error handling and automatic file creation if the file doesn't exist.
 * 
 * Functions:
 * - readTasks(): Read all tasks from JSON file
 * - writeTasks(tasks): Write tasks array to JSON file
 * 
 * File location: data/tasks.json (configurable via TASKS_FILE_PATH env variable)
 */

const fs = require('fs').promises;
const path = require('path');

// Configurable file path (can be overridden by environment variable)
const TASKS_FILE = process.env.TASKS_FILE_PATH || path.join(__dirname, '../data/tasks.json');

/**
 * Read tasks from JSON file
 * 
 * Returns: Promise<Array> - Array of task objects
 * 
 * Error handling:
 * - If file doesn't exist (ENOENT), creates empty file and returns []
 * - If file is corrupted, throws error with details
 * - Logs all operations for debugging
 */
const readTasks = async () => {
  try {
    console.log(`📂 Reading tasks from: ${TASKS_FILE}`);
    const data = await fs.readFile(TASKS_FILE, 'utf8');
    
    // Handle empty file
    if (!data || data.trim() === '') {
      console.log('⚠️  Tasks file is empty, initializing with empty array');
      await writeTasks([]);
      return [];
    }
    
    const tasks = JSON.parse(data);
    console.log(`✅ Successfully read ${tasks.length} tasks from file`);
    return tasks;
  } catch (error) {
    // If file doesn't exist, create it with empty array
    if (error.code === 'ENOENT') {
      console.log('⚠️  Tasks file not found, creating new file with empty array');
      await writeTasks([]);
      return [];
    }
    
    // If JSON parsing fails
    if (error instanceof SyntaxError) {
      console.error('❌ Invalid JSON in tasks file:', error.message);
      throw new Error(`Invalid JSON in tasks file: ${error.message}`);
    }
    
    // Other errors
    console.error('❌ Error reading tasks file:', error.message);
    throw new Error(`Error reading tasks file: ${error.message}`);
  }
};

/**
 * Write tasks to JSON file
 * 
 * Params: tasks - Array of task objects to write
 * 
 * Returns: Promise<void>
 * 
 * Features:
 * - Pretty-prints JSON with 2-space indentation
 * - Creates directory if it doesn't exist
 * - Logs all operations for debugging
 */
const writeTasks = async (tasks) => {
  try {
    // Ensure the data directory exists
    const dir = path.dirname(TASKS_FILE);
    await fs.mkdir(dir, { recursive: true });
    
    console.log(`💾 Writing ${tasks.length} tasks to: ${TASKS_FILE}`);
    
    // Write with pretty formatting (2-space indentation)
    await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2), 'utf8');
    
    console.log('✅ Successfully wrote tasks to file');
  } catch (error) {
    console.error('❌ Error writing tasks file:', error.message);
    throw new Error(`Error writing tasks file: ${error.message}`);
  }
};

module.exports = { readTasks, writeTasks };