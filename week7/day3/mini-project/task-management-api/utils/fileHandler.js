/**
 * ============================================================================
 * FILE HANDLER UTILITY
 * Part of the Task Management API - Express.js Application
 * ============================================================================
 * 
 * This utility module is used by the main API routes in routes/tasks.js
 * It handles all JSON file read/write operations for task storage.
 * 
 * IMPORTANT: This is a UTILITY MODULE component of the complete API.
 * The actual API endpoints are implemented in routes/tasks.js
 * 
 * Routes that use this file handler:
 * - GET /tasks (Read all tasks from JSON)
 * - GET /tasks/:id (Read tasks from JSON to find specific task)
 * - POST /tasks (Write new task to JSON)
 * - PUT /tasks/:id (Update task in JSON)
 * - DELETE /tasks/:id (Remove task from JSON)
 * 
 * JSON File Storage: data/tasks.json
 * 
 * Functions:
 * - readTasks(): Read all tasks from JSON file
 * - writeTasks(tasks): Write tasks array to JSON file
 * 
 * Features:
 * - Automatic file creation if missing
 * - Error handling for corrupted files
 * - Pretty-printed JSON output
 * - Configurable file path via environment variable
 * 
 * This file handler is part of a complete Task Management API that includes:
 * - Express.js server (server.js)
 * - 5 RESTful routes: GET, GET/:id, POST, PUT, DELETE (routes/tasks.js)
 * - This JSON file handler (utils/fileHandler.js)
 * - Validation middleware (middleware/validation.js)
 * ============================================================================
 */

const fs = require('fs').promises;
const path = require('path');

// Configurable file path (can be overridden by environment variable)
// Default: data/tasks.json
const TASKS_FILE = process.env.TASKS_FILE_PATH || path.join(__dirname, '../data/tasks.json');

/**
 * Read tasks from JSON file
 * Used by: All route handlers that need to access task data
 * 
 * Returns: Promise<Array> - Array of task objects
 * 
 * Error handling:
 * - If file doesn't exist (ENOENT), creates empty file and returns []
 * - If file is corrupted, throws error with details
 */
const readTasks = async () => {
  try {
    const data = await fs.readFile(TASKS_FILE, 'utf8');
    
    // Handle empty file
    if (!data || data.trim() === '') {
      await writeTasks([]);
      return [];
    }
    
    const tasks = JSON.parse(data);
    return tasks;
  } catch (error) {
    // If file doesn't exist, create it with empty array
    if (error.code === 'ENOENT') {
      await writeTasks([]);
      return [];
    }
    
    // If JSON parsing fails
    if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON in tasks file: ${error.message}`);
    }
    
    // Other errors
    throw new Error(`Error reading tasks file: ${error.message}`);
  }
};

/**
 * Write tasks to JSON file
 * Used by: POST, PUT, and DELETE route handlers
 * 
 * Params: tasks - Array of task objects to write
 * 
 * Returns: Promise<void>
 * 
 * Features:
 * - Pretty-prints JSON with 2-space indentation
 * - Creates directory if it doesn't exist
 */
const writeTasks = async (tasks) => {
  try {
    // Ensure the data directory exists
    const dir = path.dirname(TASKS_FILE);
    await fs.mkdir(dir, { recursive: true });
    
    // Write with pretty formatting (2-space indentation)
    await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2), 'utf8');
  } catch (error) {
    throw new Error(`Error writing tasks file: ${error.message}`);
  }
};

// Export functions for use in routes/tasks.js
// These functions enable all CRUD operations on the JSON file
module.exports = { readTasks, writeTasks };