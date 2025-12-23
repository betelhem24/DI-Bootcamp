const validateTask = (req, res, next) => {
  const { title } = req.body;
  
  // Check if title is provided
  if (!title || title.trim() === '') {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      message: 'Title is required and cannot be empty'
    });
  }
  
  // Validate title length
  if (title.length > 100) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      message: 'Title must be less than 100 characters'
    });
  }
  
  // Validate status if provided
  if (req.body.status) {
    const validStatuses = ['pending', 'in-progress', 'completed'];
    if (!validStatuses.includes(req.body.status)) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: `Status must be one of: ${validStatuses.join(', ')}`
      });
    }
  }
  
  next();
};

module.exports = { validateTask };