// Load environment variables
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const path = require('path');
const quizRouter = require('./routes/quiz');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware for proper session management
app.use(session({
  secret: process.env.SESSION_SECRET || 'fallback-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    httpOnly: true,
    maxAge: 1000 * 60 * 60 // 1 hour
  }
}));

// Serve static files (if you add CSS later)
app.use(express.static('public'));

// Use the quiz router
app.use('/quiz', quizRouter);

// Home route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Trivia Quiz Game</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          text-align: center;
          background-color: #f4f4f4;
        }
        h1 { color: #333; }
        button {
          padding: 15px 30px;
          font-size: 18px;
          cursor: pointer;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to the Trivia Quiz Game!</h1>
      <p>Test your knowledge with our fun trivia questions.</p>
      <a href="/quiz">
        <button>Start Quiz</button>
      </a>
    </body>
    </html>
  `);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Error</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        h1 { color: #dc3545; }
      </style>
    </head>
    <body>
      <h1>Oops! Something went wrong.</h1>
      <p>Please try again later.</p>
      <a href="/"><button style="padding: 10px 20px; cursor: pointer;">Go Home</button></a>
    </body>
    </html>
  `);
});

// 404 handler
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Page Not Found</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        h1 { color: #333; }
      </style>
    </head>
    <body>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/"><button style="padding: 10px 20px; cursor: pointer;">Go Home</button></a>
    </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✓ Server is running on http://localhost:${PORT}`);
  console.log(`✓ Visit http://localhost:${PORT} to start the quiz!`);
  console.log(`✓ Press Ctrl+C to stop the server`);
});

module.exports = app;