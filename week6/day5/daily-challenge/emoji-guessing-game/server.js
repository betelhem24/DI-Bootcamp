// Import required modules
const express = require('express');
const path = require('path');
const emojis = require('./data/emojis');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for game state and leaderboard
let currentEmoji = null;
let correctAnswer = null;
let leaderboard = [];

// Helper Functions

// Get a random emoji from the array
function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// Get wrong answer options (distractors)
function getWrongOptions(correctName, count = 3) {
    const wrongOptions = emojis
        .filter(e => e.name !== correctName)
        .sort(() => Math.random() - 0.5)
        .slice(0, count)
        .map(e => e.name);
    return wrongOptions;
}

// Shuffle an array randomly
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// API Routes

// GET /api/emoji - Get a new random emoji with multiple choice options
app.get('/api/emoji', (req, res) => {
    try {
        // Select a random emoji
        currentEmoji = getRandomEmoji();
        correctAnswer = currentEmoji.name;
        
        // Get 3 wrong options
        const wrongOptions = getWrongOptions(correctAnswer, 3);
        
        // Combine correct answer with wrong options and shuffle
        const allOptions = shuffleArray([correctAnswer, ...wrongOptions]);
        
        // Send response
        res.json({
            emoji: currentEmoji.emoji,
            options: allOptions
        });
    } catch (error) {
        console.error('Error generating emoji question:', error);
        res.status(500).json({ error: 'Failed to generate question' });
    }
});

// POST /api/guess - Submit a guess and check if it's correct
app.post('/api/guess', (req, res) => {
    try {
        const { guess, playerName } = req.body;
        
        // Validate input
        if (!guess) {
            return res.status(400).json({ 
                error: 'Guess is required' 
            });
        }
        
        // Check if guess is correct
        const isCorrect = guess.trim().toLowerCase() === correctAnswer.toLowerCase();
        
        // Send feedback
        res.json({
            correct: isCorrect,
            correctAnswer: correctAnswer,
            message: isCorrect 
                ? '🎉 Correct! Well done!' 
                : `❌ Wrong! The correct answer was "${correctAnswer}".`
        });
    } catch (error) {
        console.error('Error processing guess:', error);
        res.status(500).json({ error: 'Failed to process guess' });
    }
});

// POST /api/leaderboard - Submit a score to the leaderboard
app.post('/api/leaderboard', (req, res) => {
    try {
        const { playerName, score } = req.body;
        
        // Validate input
        if (!playerName || score === undefined || score === null) {
            return res.status(400).json({ 
                error: 'Player name and score are required' 
            });
        }
        
        // Add new score to leaderboard
        leaderboard.push({
            playerName: playerName.trim(),
            score: parseInt(score),
            date: new Date().toISOString()
        });
        
        // Sort by score (highest first)
        leaderboard.sort((a, b) => b.score - a.score);
        
        // Keep only top 10 scores
        leaderboard = leaderboard.slice(0, 10);
        
        res.json({
            message: 'Score submitted successfully',
            leaderboard: leaderboard
        });
    } catch (error) {
        console.error('Error submitting score:', error);
        res.status(500).json({ error: 'Failed to submit score' });
    }
});

// GET /api/leaderboard - Get the current leaderboard
app.get('/api/leaderboard', (req, res) => {
    try {
        res.json(leaderboard);
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        res.status(500).json({ error: 'Failed to fetch leaderboard' });
    }
});

// Serve the main HTML file for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log('=================================');
    console.log('🎮 Emoji Guessing Game Server');
    console.log('=================================');
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`📊 Total emojis loaded: ${emojis.length}`);
    console.log(`🌐 Open http://localhost:${PORT} in your browser`);
    console.log('=================================');
});

// Export app for testing purposes
module.exports = app;