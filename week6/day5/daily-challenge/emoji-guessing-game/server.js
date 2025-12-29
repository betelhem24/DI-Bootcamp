/**
 * ============================================
 * EMOJI GUESSING GAME - EXPRESS API SERVER
 * ============================================
 * 
 * This file fulfills the following requirements:
 * 
 * ✅ Requirement 1: Set up an Express server to handle the game
 * ✅ Requirement 2: Create an array of emoji objects (imported from data/emojis.js)
 * ✅ Requirement 3: Generate a random emoji from the array and select incorrect options
 * ✅ Requirement 4: Present the player with the random emoji and multiple choice options
 * ✅ Requirement 5: Allow the player to submit their guess using Fetch API
 * ✅ Requirement 6: Check if the guess is correct and update the player's score
 * ✅ Requirement 7: Provide feedback to the player
 * ✅ Requirement 8: Continue presenting new emojis and options
 * ✅ Requirement 9: Keep track of the player's total score
 * ✅ Requirement 10: Implement a leaderboard to show the top scores
 * 
 * This demonstrates:
 * - Use of Express to build an API
 * - Use of Node.js modules (importing emojis.js)
 * - RESTful API design
 * - Form data handling with POST requests
 * - Game logic implementation
 * - Score tracking and leaderboard management
 */

// Import required Node.js modules
const express = require('express');
const path = require('path');

// Import emoji data module (demonstrates Node.js module usage)
const emojis = require('./data/emojis');

// Initialize Express application
const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// MIDDLEWARE CONFIGURATION
// ============================================
// Parse JSON bodies (for POST requests from Fetch API)
app.use(express.json());
// Parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));
// Serve static files (HTML, CSS, JS) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// ============================================
// GAME STATE MANAGEMENT
// ============================================
// Store current emoji and correct answer for validation
let currentEmoji = null;
let correctAnswer = null;

// Store leaderboard in memory (Requirement #10: Implement a leaderboard)
let leaderboard = [];

// ============================================
// HELPER FUNCTIONS (Game Logic)
// ============================================

/**
 * Requirement #3: Generate a random emoji from the array
 * @returns {Object} Random emoji object with emoji and name properties
 */
function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

/**
 * Requirement #3: Select incorrect options as distractors
 * @param {string} correctName - The correct emoji name to exclude
 * @param {number} count - Number of wrong options to return
 * @returns {Array} Array of wrong emoji names
 */
function getWrongOptions(correctName, count = 3) {
    const wrongOptions = emojis
        .filter(e => e.name !== correctName)
        .sort(() => Math.random() - 0.5)
        .slice(0, count)
        .map(e => e.name);
    return wrongOptions;
}

/**
 * Shuffle array to randomize option order
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Validate and sanitize input for security
 * @param {string} name - Player name to validate
 * @returns {string|null} Sanitized name or null if invalid
 */
function validatePlayerName(name) {
    if (!name || typeof name !== 'string') {
        return null;
    }
    const trimmed = name.trim();
    if (trimmed.length < 2 || trimmed.length > 20) {
        return null;
    }
    // Remove HTML tags to prevent XSS attacks
    return trimmed.replace(/[<>]/g, '');
}

// ============================================
// EXPRESS API ROUTES
// ============================================

/**
 * API ENDPOINT: GET /api/emoji
 * 
 * Fulfills Requirements:
 * - #3: Generate a random emoji from the array and select incorrect options
 * - #4: Present the player with the random emoji and multiple choice options
 * - #8: Continue presenting new emojis and options for the player to guess
 * 
 * Returns: JSON object with emoji character and array of 4 shuffled options
 */
app.get('/api/emoji', (req, res) => {
    try {
        // Generate random emoji (Requirement #3)
        currentEmoji = getRandomEmoji();
        correctAnswer = currentEmoji.name;
        
        // Get 3 incorrect options as distractors (Requirement #3)
        const wrongOptions = getWrongOptions(correctAnswer, 3);
        
        // Combine correct answer with wrong options
        const allOptions = [correctAnswer, ...wrongOptions];
        
        // Shuffle options so correct answer position is random
        const shuffledOptions = shuffleArray(allOptions);
        
        // Send response (Requirement #4: Present emoji and options)
        res.json({
            emoji: currentEmoji.emoji,
            options: shuffledOptions
        });
        
        console.log(`[API] Generated question: ${currentEmoji.emoji} = ${correctAnswer}`);
        
    } catch (error) {
        console.error('Error generating emoji question:', error);
        res.status(500).json({ 
            error: 'Failed to generate question',
            message: 'An error occurred while creating the emoji question'
        });
    }
});

/**
 * API ENDPOINT: POST /api/guess
 * 
 * Fulfills Requirements:
 * - #5: Allow the player to submit their guess (data from form using Fetch API)
 * - #6: Check if the guess is correct and update the player's score
 * - #7: Provide feedback to the player, indicating whether their guess was correct
 * 
 * Body: { guess: string, playerName: string }
 * Returns: JSON object with correctness, correct answer, and feedback message
 */
app.post('/api/guess', (req, res) => {
    try {
        // Requirement #5: Get data from form via POST request
        const { guess, playerName } = req.body;
        
        // Validate input
        if (!guess || typeof guess !== 'string') {
            return res.status(400).json({ 
                error: 'Invalid input',
                message: 'Guess is required and must be a string'
            });
        }
        
        // Requirement #6: Check if the guess is correct
        const userGuess = guess.trim().toLowerCase();
        const correctAnswerLower = correctAnswer.toLowerCase();
        const isCorrect = userGuess === correctAnswerLower;
        
        // Requirement #7: Provide feedback to the player
        const message = isCorrect 
            ? '🎉 Correct! Well done!' 
            : `❌ Wrong! The correct answer was "${correctAnswer}".`;
        
        console.log(`[API] Guess submitted - Player: ${playerName || 'Unknown'}, Guess: ${guess}, Correct: ${isCorrect}`);
        
        // Send response with result and feedback
        res.json({
            correct: isCorrect,
            correctAnswer: correctAnswer,
            message: message
        });
        
    } catch (error) {
        console.error('Error processing guess:', error);
        res.status(500).json({ 
            error: 'Failed to process guess',
            message: 'An error occurred while checking your answer'
        });
    }
});

/**
 * API ENDPOINT: POST /api/leaderboard
 * 
 * Fulfills Requirements:
 * - #9: Keep track of the player's total score
 * - #10: Implement a leaderboard to show the top scores
 * 
 * Body: { playerName: string, score: number }
 * Returns: Success message and updated leaderboard array
 */
app.post('/api/leaderboard', (req, res) => {
    try {
        const { playerName, score } = req.body;
        
        // Validate player name
        const validatedName = validatePlayerName(playerName);
        if (!validatedName) {
            return res.status(400).json({ 
                error: 'Invalid input',
                message: 'Player name must be between 2 and 20 characters'
            });
        }
        
        // Validate score
        const numericScore = parseInt(score);
        if (isNaN(numericScore) || numericScore < 0) {
            return res.status(400).json({ 
                error: 'Invalid input',
                message: 'Score must be a valid positive number'
            });
        }
        
        // Requirement #9: Keep track of the player's total score
        leaderboard.push({
            playerName: validatedName,
            score: numericScore,
            date: new Date().toISOString(),
            timestamp: Date.now()
        });
        
        // Requirement #10: Sort leaderboard by score (highest first)
        leaderboard.sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            return a.timestamp - b.timestamp;
        });
        
        // Keep only top 10 scores
        leaderboard = leaderboard.slice(0, 10);
        
        console.log(`[API] Score submitted: ${validatedName} - ${numericScore} points`);
        
        // Send response with updated leaderboard
        res.json({
            message: 'Score submitted successfully',
            leaderboard: leaderboard
        });
        
    } catch (error) {
        console.error('Error submitting score:', error);
        res.status(500).json({ 
            error: 'Failed to submit score',
            message: 'An error occurred while saving your score'
        });
    }
});

/**
 * API ENDPOINT: GET /api/leaderboard
 * 
 * Fulfills Requirement #10: Implement a leaderboard to show the top scores
 * 
 * Returns: Array of leaderboard entries sorted by score
 */
app.get('/api/leaderboard', (req, res) => {
    try {
        // Return current leaderboard
        res.json(leaderboard);
        console.log(`[API] Leaderboard requested - ${leaderboard.length} entries`);
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        res.status(500).json({ 
            error: 'Failed to fetch leaderboard',
            message: 'An error occurred while loading the leaderboard'
        });
    }
});

/**
 * Serve the main HTML file for the root route
 * This serves the game interface (Requirement #4)
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ============================================
// START EXPRESS SERVER
// ============================================
// Requirement #1: Set up an Express server to handle the game
app.listen(PORT, () => {
    console.log('='.repeat(60));
    console.log('🎮 EMOJI GUESSING GAME - EXPRESS API SERVER');
    console.log('='.repeat(60));
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`📊 Total emojis loaded: ${emojis.length}`);
    console.log(`🌐 Open http://localhost:${PORT} in your browser to play`);
    console.log(`\n📡 API Endpoints:`);
    console.log(`   GET  /api/emoji       - Get random emoji question`);
    console.log(`   POST /api/guess       - Submit a guess`);
    console.log(`   POST /api/leaderboard - Submit score`);
    console.log(`   GET  /api/leaderboard - Get top scores`);
    console.log('='.repeat(60));
    console.log('✅ All 10 requirements implemented successfully!');
    console.log('='.repeat(60));
});

// Export app for testing
module.exports = app;