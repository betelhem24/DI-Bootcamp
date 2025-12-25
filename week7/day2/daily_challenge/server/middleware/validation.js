// Input validation middleware
const validateRegistration = (req, res, next) => {
  const { email, username, password, first_name, last_name } = req.body;

  // Check required fields
  if (!email || !username || !password || !first_name || !last_name) {
    return res.status(400).json({ 
      error: 'All fields are required: email, username, password, first_name, last_name' 
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Validate username (alphanumeric, 3-30 characters)
  const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/;
  if (!usernameRegex.test(username)) {
    return res.status(400).json({ 
      error: 'Username must be 3-30 characters and contain only letters, numbers, and underscores' 
    });
  }

  // Validate password strength (minimum 8 characters)
  if (password.length < 8) {
    return res.status(400).json({ 
      error: 'Password must be at least 8 characters long' 
    });
  }

  // Validate name fields (no special characters)
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
  if (!nameRegex.test(first_name)) {
    return res.status(400).json({ 
      error: 'First name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes' 
    });
  }
  if (!nameRegex.test(last_name)) {
    return res.status(400).json({ 
      error: 'Last name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes' 
    });
  }

  // Sanitize inputs (trim whitespace)
  req.body.email = email.trim().toLowerCase();
  req.body.username = username.trim();
  req.body.first_name = first_name.trim();
  req.body.last_name = last_name.trim();

  next();
};

const validateLogin = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Sanitize inputs
  req.body.username = username.trim();

  next();
};

const validateUserId = (req, res, next) => {
  const { id } = req.params;

  // Check if ID is a valid integer
  if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  next();
};

const validateUpdate = (req, res, next) => {
  const { email, username, first_name, last_name } = req.body;

  // At least one field must be provided
  if (!email && !username && !first_name && !last_name) {
    return res.status(400).json({ error: 'At least one field must be provided for update' });
  }

  // Validate email format if provided
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    req.body.email = email.trim().toLowerCase();
  }

  // Validate username if provided
  if (username) {
    const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/;
    if (!usernameRegex.test(username)) {
      return res.status(400).json({ 
        error: 'Username must be 3-30 characters and contain only letters, numbers, and underscores' 
      });
    }
    req.body.username = username.trim();
  }

  // Validate name fields if provided
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
  if (first_name) {
    if (!nameRegex.test(first_name)) {
      return res.status(400).json({ 
        error: 'First name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes' 
      });
    }
    req.body.first_name = first_name.trim();
  }
  if (last_name) {
    if (!nameRegex.test(last_name)) {
      return res.status(400).json({ 
        error: 'Last name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes' 
      });
    }
    req.body.last_name = last_name.trim();
  }

  next();
};

module.exports = {
  validateRegistration,
  validateLogin,
  validateUserId,
  validateUpdate
};