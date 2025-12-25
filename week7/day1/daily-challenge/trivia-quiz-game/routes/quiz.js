const express = require('express');
const router = express.Router();

// Hard-coded trivia questions
const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

// In-memory storage for user sessions (in a real app, use sessions or database)
const userSessions = {};

// Helper function to generate a simple session ID
function generateSessionId() {
  return 'user_' + Date.now() + Math.random().toString(36).substr(2, 9);
}

// GET /quiz - Start the quiz and display the first question
router.get('/', (req, res) => {
  // Create a new session
  const sessionId = generateSessionId();
  userSessions[sessionId] = {
    currentQuestion: 0,
    score: 0,
    answers: []
  };

  const question = triviaQuestions[0];
  
  res.send(`
    <h1>Trivia Quiz Game</h1>
    <h2>Question 1 of ${triviaQuestions.length}</h2>
    <p><strong>${question.question}</strong></p>
    
    <form action="/quiz?sessionId=${sessionId}" method="POST">
      <input type="text" name="answer" placeholder="Your answer" required 
             style="padding: 10px; font-size: 14px; width: 300px;">
      <br><br>
      <button type="submit" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">
        Submit Answer
      </button>
    </form>
  `);
});

// POST /quiz - Submit an answer and move to next question
router.post('/', (req, res) => {
  const sessionId = req.query.sessionId;
  const userAnswer = req.body.answer;

  // Check if session exists
  if (!sessionId || !userSessions[sessionId]) {
    return res.send(`
      <h1>Session Error</h1>
      <p>Your session has expired. Please start a new quiz.</p>
      <a href="/quiz"><button>Start New Quiz</button></a>
    `);
  }

  const session = userSessions[sessionId];
  const currentQ = triviaQuestions[session.currentQuestion];
  
  // Check if answer is correct (case-insensitive)
  const isCorrect = userAnswer.trim().toLowerCase() === currentQ.answer.toLowerCase();
  
  if (isCorrect) {
    session.score++;
  }
  
  // Store the answer
  session.answers.push({
    question: currentQ.question,
    userAnswer: userAnswer,
    correctAnswer: currentQ.answer,
    isCorrect: isCorrect
  });

  // Move to next question
  session.currentQuestion++;

  // Check if quiz is complete
  if (session.currentQuestion >= triviaQuestions.length) {
    // Quiz completed, redirect to score page
    return res.redirect(`/quiz/score?sessionId=${sessionId}`);
  }

  // Display feedback and next question
  const nextQuestion = triviaQuestions[session.currentQuestion];
  const feedbackColor = isCorrect ? 'green' : 'red';
  const feedbackText = isCorrect ? '✓ Correct!' : `✗ Incorrect! The answer was: ${currentQ.answer}`;

  res.send(`
    <h1>Trivia Quiz Game</h1>
    <div style="padding: 10px; background-color: ${feedbackColor}; color: white; margin-bottom: 20px;">
      <strong>${feedbackText}</strong>
    </div>
    
    <h2>Question ${session.currentQuestion + 1} of ${triviaQuestions.length}</h2>
    <p><strong>${nextQuestion.question}</strong></p>
    
    <form action="/quiz?sessionId=${sessionId}" method="POST">
      <input type="text" name="answer" placeholder="Your answer" required 
             style="padding: 10px; font-size: 14px; width: 300px;">
      <br><br>
      <button type="submit" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">
        Submit Answer
      </button>
    </form>
    
    <p><em>Current Score: ${session.score}/${session.currentQuestion}</em></p>
  `);
});

// GET /quiz/score - Display final score
router.get('/score', (req, res) => {
  const sessionId = req.query.sessionId;

  // Check if session exists
  if (!sessionId || !userSessions[sessionId]) {
    return res.send(`
      <h1>Session Error</h1>
      <p>No quiz session found. Please start a new quiz.</p>
      <a href="/quiz"><button>Start New Quiz</button></a>
    `);
  }

  const session = userSessions[sessionId];
  const percentage = Math.round((session.score / triviaQuestions.length) * 100);
  
  let message = '';
  if (percentage === 100) {
    message = '🎉 Perfect score! You\'re a trivia master!';
  } else if (percentage >= 70) {
    message = '👏 Great job! You know your stuff!';
  } else if (percentage >= 50) {
    message = '👍 Not bad! Keep practicing!';
  } else {
    message = '📚 Keep learning! You\'ll do better next time!';
  }

  // Build answer review
  let reviewHTML = '<h3>Review Your Answers:</h3><ul>';
  session.answers.forEach((ans, index) => {
    const color = ans.isCorrect ? 'green' : 'red';
    reviewHTML += `
      <li style="margin-bottom: 15px;">
        <strong>Q${index + 1}: ${ans.question}</strong><br>
        Your answer: <span style="color: ${color};">${ans.userAnswer}</span><br>
        ${!ans.isCorrect ? `Correct answer: <span style="color: green;">${ans.correctAnswer}</span>` : '✓ Correct!'}
      </li>
    `;
  });
  reviewHTML += '</ul>';

  res.send(`
    <h1>Quiz Completed!</h1>
    <h2>Your Final Score: ${session.score}/${triviaQuestions.length} (${percentage}%)</h2>
    <p style="font-size: 20px;">${message}</p>
    
    ${reviewHTML}
    
    <br>
    <a href="/quiz">
      <button style="padding: 10px 20px; font-size: 16px; cursor: pointer;">
        Play Again
      </button>
    </a>
    <a href="/">
      <button style="padding: 10px 20px; font-size: 16px; cursor: pointer; margin-left: 10px;">
        Back to Home
      </button>
    </a>
  `);

  // Clean up session after displaying score
  setTimeout(() => {
    delete userSessions[sessionId];
  }, 60000); // Delete after 1 minute
});

module.exports = router;