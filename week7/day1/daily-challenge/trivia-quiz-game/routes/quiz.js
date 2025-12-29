const express = require('express');
const router = express.Router();
const { JSDOM } = require('jsdom');
const createDOMPurify = require('dompurify');

// Create DOMPurify instance for sanitization
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

// Hard-coded trivia questions (as per requirements)
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

// Helper function to sanitize user input
function sanitizeInput(input) {
  if (!input) return '';
  return DOMPurify.sanitize(input.trim());
}

// Helper function to check answer (case-insensitive, handles variations)
function isAnswerCorrect(userAnswer, correctAnswer) {
  const sanitized = sanitizeInput(userAnswer);
  return sanitized.toLowerCase() === correctAnswer.toLowerCase();
}

// Helper function to generate HTML with consistent styling
function generateQuizHTML(content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Trivia Quiz</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 700px;
          margin: 30px auto;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }
        .container {
          background: white;
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        h1 { color: #333; margin-bottom: 20px; font-size: 28px; }
        h2 { color: #555; margin-bottom: 15px; font-size: 20px; }
        p { margin: 15px 0; line-height: 1.6; }
        .question { 
          font-size: 20px; 
          color: #2c3e50; 
          margin: 25px 0;
          font-weight: 500;
        }
        input[type="text"] {
          width: 100%;
          padding: 15px;
          font-size: 16px;
          border: 2px solid #ddd;
          border-radius: 8px;
          margin: 15px 0;
          transition: border-color 0.3s;
        }
        input[type="text"]:focus {
          outline: none;
          border-color: #667eea;
        }
        button {
          width: 100%;
          padding: 15px 30px;
          font-size: 18px;
          cursor: pointer;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
          font-weight: 600;
        }
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }
        button:active {
          transform: translateY(0);
        }
        .feedback {
          padding: 15px;
          margin: 20px 0;
          border-radius: 8px;
          font-weight: 500;
          font-size: 16px;
        }
        .feedback.correct {
          background-color: #d4edda;
          color: #155724;
          border: 2px solid #c3e6cb;
        }
        .feedback.incorrect {
          background-color: #f8d7da;
          color: #721c24;
          border: 2px solid #f5c6cb;
        }
        .score-info {
          text-align: center;
          margin: 20px 0;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          font-size: 18px;
          color: #495057;
        }
        .review-list {
          list-style: none;
          padding: 0;
        }
        .review-list li {
          margin: 20px 0;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        .correct-answer { color: #28a745; font-weight: 600; }
        .incorrect-answer { color: #dc3545; font-weight: 600; }
        .button-group {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        .button-group button {
          flex: 1;
        }
        .secondary-btn {
          background: #6c757d;
        }
        .secondary-btn:hover {
          box-shadow: 0 5px 20px rgba(108, 117, 125, 0.4);
        }
      </style>
    </head>
    <body>
      <div class="container">
        ${content}
      </div>
    </body>
    </html>
  `;
}

// GET /quiz - Start the quiz and display the first question
router.get('/', (req, res) => {
  try {
    // Initialize session data
    req.session.currentQuestion = 0;
    req.session.score = 0;
    req.session.answers = [];
    
    const question = triviaQuestions[0];
    
    const content = `
      <h1>🎯 Trivia Quiz Game</h1>
      <h2>Question 1 of ${triviaQuestions.length}</h2>
      <p class="question">${question.question}</p>
      
      <form action="/quiz" method="POST">
        <input type="text" 
               name="answer" 
               placeholder="Type your answer here..." 
               required 
               autocomplete="off"
               autofocus>
        <button type="submit">Submit Answer</button>
      </form>
    `;
    
    res.send(generateQuizHTML(content));
  } catch (error) {
    console.error('Error in GET /quiz:', error);
    res.status(500).send('An error occurred. Please try again.');
  }
});

// POST /quiz - Submit an answer and move to next question
router.post('/', (req, res) => {
  try {
    // Validate session
    if (typeof req.session.currentQuestion === 'undefined') {
      return res.redirect('/quiz');
    }

    const userAnswer = sanitizeInput(req.body.answer);
    
    // Validate input
    if (!userAnswer) {
      return res.status(400).send(generateQuizHTML(`
        <h1>Invalid Input</h1>
        <p>Please provide an answer.</p>
        <a href="/quiz"><button>Try Again</button></a>
      `));
    }

    const currentQ = triviaQuestions[req.session.currentQuestion];
    
    // Check if answer is correct
    const isCorrect = isAnswerCorrect(userAnswer, currentQ.answer);
    
    if (isCorrect) {
      req.session.score++;
    }
    
    // Store the answer
    req.session.answers.push({
      question: currentQ.question,
      userAnswer: userAnswer,
      correctAnswer: currentQ.answer,
      isCorrect: isCorrect
    });

    // Move to next question
    req.session.currentQuestion++;

    // Check if quiz is complete
    if (req.session.currentQuestion >= triviaQuestions.length) {
      return res.redirect('/quiz/score');
    }

    // Display feedback and next question
    const nextQuestion = triviaQuestions[req.session.currentQuestion];
    const feedbackClass = isCorrect ? 'correct' : 'incorrect';
    const feedbackText = isCorrect 
      ? '✓ Correct! Well done!' 
      : `✗ Incorrect! The correct answer was: ${currentQ.answer}`;

    const content = `
      <h1>🎯 Trivia Quiz Game</h1>
      
      <div class="feedback ${feedbackClass}">
        ${feedbackText}
      </div>
      
      <h2>Question ${req.session.currentQuestion + 1} of ${triviaQuestions.length}</h2>
      <p class="question">${nextQuestion.question}</p>
      
      <form action="/quiz" method="POST">
        <input type="text" 
               name="answer" 
               placeholder="Type your answer here..." 
               required 
               autocomplete="off"
               autofocus>
        <button type="submit">Submit Answer</button>
      </form>
      
      <div class="score-info">
        Current Score: ${req.session.score}/${req.session.currentQuestion}
      </div>
    `;

    res.send(generateQuizHTML(content));
  } catch (error) {
    console.error('Error in POST /quiz:', error);
    res.status(500).send('An error occurred. Please try again.');
  }
});

// GET /quiz/score - Display final score
router.get('/score', (req, res) => {
  try {
    // Validate session
    if (typeof req.session.score === 'undefined' || !req.session.answers) {
      return res.redirect('/quiz');
    }

    const totalQuestions = triviaQuestions.length;
    const score = req.session.score;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    let message = '';
    let emoji = '';
    
    if (percentage === 100) {
      emoji = '🎉';
      message = 'Perfect score! You\'re a trivia master!';
    } else if (percentage >= 70) {
      emoji = '👏';
      message = 'Great job! You know your stuff!';
    } else if (percentage >= 50) {
      emoji = '👍';
      message = 'Not bad! Keep practicing!';
    } else {
      emoji = '📚';
      message = 'Keep learning! You\'ll do better next time!';
    }

    // Build answer review
    let reviewHTML = '<h3>📋 Review Your Answers:</h3><ul class="review-list">';
    req.session.answers.forEach((ans, index) => {
      const answerClass = ans.isCorrect ? 'correct-answer' : 'incorrect-answer';
      reviewHTML += `
        <li>
          <strong>Q${index + 1}: ${ans.question}</strong><br>
          Your answer: <span class="${answerClass}">${ans.userAnswer}</span><br>
          ${!ans.isCorrect ? `Correct answer: <span class="correct-answer">${ans.correctAnswer}</span>` : '✓ Correct!'}
        </li>
      `;
    });
    reviewHTML += '</ul>';

    const content = `
      <h1>${emoji} Quiz Completed!</h1>
      <div class="score-info">
        <h2>Your Final Score: ${score}/${totalQuestions} (${percentage}%)</h2>
        <p style="font-size: 18px; margin-top: 10px;">${message}</p>
      </div>
      
      ${reviewHTML}
      
      <div class="button-group">
        <button onclick="window.location.href='/quiz'">
          Play Again
        </button>
        <button class="secondary-btn" onclick="window.location.href='/'">
          Back to Home
        </button>
      </div>
    `;

    res.send(generateQuizHTML(content));

    // Clear session data after displaying score
    req.session.destroy();
  } catch (error) {
    console.error('Error in GET /quiz/score:', error);
    res.status(500).send('An error occurred. Please try again.');
  }
});

module.exports = router;