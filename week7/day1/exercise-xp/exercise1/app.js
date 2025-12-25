// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Import the router module
const indexRouter = require('./routes/index');

// Mount the router
app.use('/', indexRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});