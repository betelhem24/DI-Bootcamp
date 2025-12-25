const express = require('express');
const quizRouter = require('./routes/quiz');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the quiz router
app.use('/quiz', quizRouter);

// Home route
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Trivia Quiz Game!</h1>
    <p>Test your knowledge with our fun trivia questions.</p>
    <a href="/quiz">
      <button style="padding: 10px 20px; font-size: 16px; cursor: pointer;">
        Start Quiz
      </button>
    </a>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Visit http://localhost:${PORT} to start the quiz!`);
});