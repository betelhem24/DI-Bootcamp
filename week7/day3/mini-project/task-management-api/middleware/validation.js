/**
 * ============================================================================
 * TASK VALIDATION MIDDLEWARE
 * Part of the Task Management API - Express.js Application
 * ============================================================================
 * 
 * This middleware is used by the main API routes in routes/tasks.js
 * It validates task data for POST and PUT operations before storing in JSON file.
 * 
 * IMPORTANT: This is a REUSABLE MIDDLEWARE component of the complete API.
 * The actual API endpoints are implemented in routes/tasks.js
 * 
 * Routes that use this validation:
 * - POST /tasks (Create task) - validates before writing to JSON file
 * - PUT /tasks/:id (Update task) - validates before updating JSON file
 * 
 * JSON File Storage: data/tasks.json
 * 
 * Validation Rules:
 * - Title: required, string, non-empty, max 100 characters
 * - Description: optional, string if provided, max 500 characters
 * - Status: optional, must be one of: pending, in-progress, completed
 * 
 * This middleware is part of a complete Task Management API that includes:
 * - Express.js server (server.js)
 * - 5 RESTful routes: GET, GET/:id, POST, PUT, DELETE (routes/tasks.js)
 * - JSON file operations (utils/fileHandler.js)
 * - This validation middleware (middleware/validation.js)
 * ============================================================================
 */

const validateTask = (req, res, next) => {
  const { title, description, status } = req.body;
  
  // Validate title - REQUIRED
  if (!title) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      message: 'Title is required',
      field: 'title'
    });
  }
  
  // Validate title type
  if (typeof title !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      message: 'Title must be a string',
      field: 'title',
      received: typeof title
    });
  }
  
  // Validate title is not empty after trimming
  if (title.trim() === '') {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      message: 'Title cannot be empty or contain only whitespace',
      field: 'title'
    });
  }
  
  // Validate title length
  if (title.length > 100) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      message: 'Title must be less than 100 characters',
      field: 'title',
      maxLength: 100,
      currentLength: title.length
    });
  }
  
  // Validate description if provided
  if (description !== undefined) {
    if (typeof description !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: 'Description must be a string',
        field: 'description',
        received: typeof description
      });
    }
    
    if (description.length > 500) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: 'Description must be less than 500 characters',
        field: 'description',
        maxLength: 500,
        currentLength: description.length
      });
    }
  }
  
  // Validate status if provided - Using concise includes check
  if (status !== undefined) {
    const validStatuses = ['pending', 'in-progress', 'completed'];
    
    if (typeof status !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: 'Status must be a string',
        field: 'status',
        received: typeof status
      });
    }
    
    // Concise validation using includes
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: `Status must be one of: ${validStatuses.join(', ')}`,
        field: 'status',
        validOptions: validStatuses,
        received: status
      });
    }
  }
  
  // All validations passed - proceed to route handler
  next();
};

// Export validation middleware for use in routes/tasks.js
// Used by: POST /tasks and PUT /tasks/:id
module.exports = { validateTask };