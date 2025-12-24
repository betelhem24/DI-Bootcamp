/**
 * VALIDATION MIDDLEWARE
 * 
 * This middleware validates task data before creating or updating tasks.
 * It ensures data integrity and provides clear error messages.
 * 
 * Validates:
 * - Title: required, string, non-empty, max 100 characters
 * - Description: optional, string if provided, max 500 characters
 * - Status: optional, must be one of: pending, in-progress, completed
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
  
  // Validate status if provided
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
  
  // All validations passed
  console.log('✅ Validation passed for task:', title.trim());
  next();
};

module.exports = { validateTask };