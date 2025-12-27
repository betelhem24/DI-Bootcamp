const express = require('express');
const path = require('path');
const emojis = require('./data/emojis');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory storage for game state and leaderboard
let currentEmoji = null;
let correctAnswer = null;
let leaderboard = [];

// Helper function to get random emojis
function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// Helper function to get wrong options
function getWrongOptions(correctName, count = 3) {
    const wrongOptions = emojis
        .filter(e => e.name !== correctName)
        .sort(() => Math.random() - 0.5)
        .slice(0, count)
        .map(e => e.name);
    return wrongOptions;
}

// Helper function to shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Routes

// Get a new emoji question
app.get('/api/emoji', (req, res) => {
    currentEmoji = getRandomEmoji();
    correctAnswer = currentEmoji.name;
    
    const wrongOptions = getWrongOptions(correctAnswer, 3);
    const allOptions = shuffleArray([correctAnswer, ...wrongOptions]);
    
    res.json({
        emoji: currentEmoji.emoji,
        options: allOptions
    });
});

// Submit a guess
app.post('/api/guess', (req, res) => {
    const { guess, playerName } = req.body;
    
    if (!guess) {
        return res.status(400).json({ 
            error: 'Guess is required' 
        });
    }
    
    const isCorrect = guess === correctAnswer;
    
    res.json({
        correct: isCorrect,
        correctAnswer: correctAnswer,
        message: isCorrect ? 'Correct! Well done!' : `Wrong! The correct answer was ${correctAnswer}.`
    });
});

// Submit score to leaderboard
app.post('/api/leaderboard', (req, res) => {
    const { playerName, score } = req.body;
    
    if (!playerName || score === undefined) {
        return res.status(400).json({ 
            error: 'Player name and score are required' 
        });
    }
    
    leaderboard.push({
        playerName,
        score,
        date: new Date().toISOString()
    });
    
    // Sort by score descending
    leaderboard.sort((a, b) => b.score - a.score);
    
    // Keep only top 10
    leaderboard = leaderboard.slice(0, 10);
    
    res.json({
        message: 'Score submitted successfully',
        leaderboard: leaderboard
    });
});

// Get leaderboard
app.get('/api/leaderboard', (req, res) => {
    res.json(leaderboard);
});

// Start server
app.listen(PORT, () => {
    console.log(`🎮 Emoji Guessing Game server running on http://localhost:${PORT}`);
    console.log(`📊 Visit http://localhost:${PORT} to play the game!`);
});