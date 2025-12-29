/**
 * ============================================
 * EMOJI GUESSING GAME - CLIENT-SIDE JAVASCRIPT
 * ============================================
 * 
 * This file handles the frontend interactions and communicates with the Express API.
 * 
 * Fulfills Requirements:
 * - #5: Allow the player to submit their guess using Fetch API POST
 * - #6: Check if guess is correct (via API) and update player's score
 * - #7: Provide feedback to the player
 * - #8: Continue presenting new emojis and options
 * - #9: Keep track of the player's total score (frontend display)
 * - #10: Display leaderboard from API
 * 
 * This file communicates with server.js Express API endpoints:
 * - GET /api/emoji - Fetch new emoji question
 * - POST /api/guess - Submit guess for validation
 * - POST /api/leaderboard - Submit final score
 * - GET /api/leaderboard - Fetch top scores
 */

// ============================================
// GAME STATE VARIABLES
// ============================================
// Requirement #9: Keep track of the player's total score
let playerName = '';
let score = 0;
let round = 0;
let totalQuestions = 0;
let currentOptions = [];
let selectedOption = null;

// ============================================
// UI HELPER FUNCTIONS
// ============================================

/**
 * Show a specific section and hide all others
 * @param {string} sectionId - ID of the section to show
 */
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}

/**
 * Reset game and show name entry section
 */
function showNameSection() {
    showSection('nameSection');
    document.getElementById('playerName').value = '';
    score = 0;
    round = 0;
    totalQuestions = 0;
}

// ============================================
// GAME FUNCTIONS
// ============================================

/**
 * Start a new game session
 * Initializes score tracking (Requirement #9)
 */
function startGame() {
    const nameInput = document.getElementById('playerName');
    const name = nameInput.value.trim();
    
    // Validate player name
    if (!name) {
        alert('⚠️ Please enter your name to start playing!');
        nameInput.focus();
        return;
    }
    
    if (name.length < 2) {
        alert('⚠️ Please enter a valid name (at least 2 characters)!');
        nameInput.focus();
        return;
    }
    
    // Initialize game state (Requirement #9: Track player's total score)
    playerName = name;
    score = 0;
    round = 0;
    totalQuestions = 0;
    
    // Update UI
    document.getElementById('displayName').textContent = playerName;
    document.getElementById('score').textContent = '0';
    document.getElementById('round').textContent = '0';
    
    showSection('gameSection');
    loadLeaderboard(); // Requirement #10: Show leaderboard
    nextQuestion(); // Requirement #8: Present new emoji
}

/**
 * Fetch and display next question from API
 * 
 * Fulfills Requirements:
 * - #3: Generate random emoji (via API call)
 * - #4: Present emoji and multiple choice options
 * - #8: Continue presenting new emojis
 */
async function nextQuestion() {
    try {
        // Hide previous feedback
        const feedback = document.getElementById('feedback');
        feedback.classList.add('hidden');
        
        // Reset selection
        selectedOption = null;
        
        // Show loading state
        document.getElementById('emojiContainer').textContent = '⏳';
        
        // Requirement #3 & #4: Fetch new emoji question from Express API
        const response = await fetch('/api/emoji');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Display emoji (Requirement #4: Present the emoji)
        document.getElementById('emojiContainer').textContent = data.emoji;
        currentOptions = data.options;
        
        // Create option buttons (Requirement #4: Present multiple choice options)
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        data.options.forEach(option => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'option-btn';
            button.textContent = option;
            button.onclick = () => selectOption(button, option);
            optionsContainer.appendChild(button);
        });
        
        // Update round counter (Requirement #8: Continue presenting)
        round++;
        totalQuestions++;
        document.getElementById('round').textContent = round;
        
        // Enable submit button
        const submitBtn = document.querySelector('#guessForm button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = false;
        }
        
        console.log('[Client] New question loaded from API');
        
    } catch (error) {
        console.error('Error loading question:', error);
        alert('❌ Error loading question. Please try again.');
        document.getElementById('emojiContainer').textContent = '❌';
    }
}

/**
 * Handle option selection
 * @param {HTMLElement} button - The clicked button element
 * @param {string} option - The selected option text
 */
function selectOption(button, option) {
    // Remove selection from all buttons
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to clicked button
    button.classList.add('selected');
    selectedOption = option;
}

// ============================================
// FORM SUBMISSION HANDLER
// ============================================
/**
 * Handle guess submission
 * 
 * Fulfills Requirements:
 * - #5: Submit guess via POST request using Fetch API
 * - #6: Check if guess is correct and update score
 * - #7: Provide feedback to the player
 */
const guessForm = document.getElementById('guessForm');
if (guessForm) {
    guessForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!selectedOption) {
            alert('⚠️ Please select an option before submitting!');
            return;
        }
        
        try {
            // Disable submit button to prevent double submission
            const submitBtn = e.target.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            
            // Requirement #5: Submit guess to Express API using Fetch API POST
            const response = await fetch('/api/guess', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    guess: selectedOption,
                    playerName: playerName
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Requirement #7: Provide feedback to the player
            const feedback = document.getElementById('feedback');
            feedback.textContent = data.message;
            feedback.className = 'feedback ' + (data.correct ? 'correct' : 'wrong');
            feedback.classList.remove('hidden');
            
            // Requirement #6: Update player's score if correct
            if (data.correct) {
                score++;
                document.getElementById('score').textContent = score;
                console.log('[Client] Correct answer! Score updated to:', score);
            } else {
                console.log('[Client] Wrong answer. Correct answer was:', data.correctAnswer);
            }
            
            // Disable all option buttons and highlight correct answer
            const allButtons = document.querySelectorAll('.option-btn');
            allButtons.forEach(btn => {
                btn.disabled = true;
                btn.style.opacity = '0.6';
                btn.style.cursor = 'not-allowed';
                
                // Highlight the correct answer in green
                if (btn.textContent === data.correctAnswer) {
                    btn.style.background = '#28a745';
                    btn.style.color = 'white';
                    btn.style.borderColor = '#28a745';
                }
            });
            
        } catch (error) {
            console.error('Error submitting guess:', error);
            alert('❌ Error submitting guess. Please try again.');
        }
    });
}

/**
 * End game and submit final score
 * 
 * Fulfills Requirements:
 * - #9: Keep track of player's total score
 * - #10: Submit score to leaderboard
 */
async function endGame() {
    if (totalQuestions === 0) {
        alert('⚠️ Play at least one round before ending the game!');
        return;
    }
    
    const confirmEnd = confirm(`Are you sure you want to end the game?\n\nYour Score: ${score}/${totalQuestions}`);
    
    if (!confirmEnd) {
        return;
    }
    
    try {
        // Requirement #10: Submit score to leaderboard via API
        const response = await fetch('/api/leaderboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                playerName: playerName,
                score: score
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Calculate percentage
        const percentage = ((score / totalQuestions) * 100).toFixed(1);
        
        alert(`🎮 Game Over!\n\n👤 Player: ${playerName}\n📊 Final Score: ${score}/${totalQuestions}\n📈 Accuracy: ${percentage}%`);
        
        // Display updated leaderboard (Requirement #10)
        displayLeaderboard(data.leaderboard);
        showSection('leaderboardSection');
        
        console.log('[Client] Game ended. Final score:', score);
        
    } catch (error) {
        console.error('Error submitting score:', error);
        alert('❌ Error submitting score. Showing leaderboard anyway.');
        await loadLeaderboard();
        showSection('leaderboardSection');
    }
}

/**
 * Load leaderboard from API
 * Fulfills Requirement #10: Display top scores
 */
async function loadLeaderboard() {
    try {
        const response = await fetch('/api/leaderboard');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const leaderboard = await response.json();
        displayLeaderboard(leaderboard);
        
        console.log('[Client] Leaderboard loaded from API');
        
    } catch (error) {
        console.error('Error loading leaderboard:', error);
    }
}

/**
 * Display leaderboard in UI
 * Fulfills Requirement #10: Show top scores
 * @param {Array} leaderboard - Array of leaderboard entries
 */
function displayLeaderboard(leaderboard) {
    const leaderboardList = document.getElementById('leaderboardList');
    
    if (!leaderboard || leaderboard.length === 0) {
        leaderboardList.innerHTML = '<p class="no-scores">🏆 No scores yet. Be the first to play!</p>';
        return;
    }
    
    leaderboardList.innerHTML = '';
    
    leaderboard.forEach((entry, index) => {
        const item = document.createElement('div');
        item.className = 'leaderboard-item';
        
        // Add medals for top 3
        let medal = '';
        if (index === 0) medal = '🥇';
        else if (index === 1) medal = '🥈';
        else if (index === 2) medal = '🥉';
        
        item.innerHTML = `
            <span class="leaderboard-rank">${medal} #${index + 1}</span>
            <span class="leaderboard-name">${escapeHtml(entry.playerName)}</span>
            <span class="leaderboard-score">${entry.score} pts</span>
        `;
        
        leaderboardList.appendChild(item);
    });
}

/**
 * Escape HTML to prevent XSS attacks
 * Security best practice for user-generated content
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 Emoji Guessing Game client loaded!');
    console.log('✅ Ready to communicate with Express API');
    console.log('📡 API Endpoints available:');
    console.log('   - GET  /api/emoji       (Fetch random emoji question)');
    console.log('   - POST /api/guess       (Submit guess for validation)');
    console.log('   - GET  /api/leaderboard (Fetch top scores)');
    console.log('   - POST /api/leaderboard (Submit final score)');
    
    // Requirement #10: Load and display leaderboard on page load
    loadLeaderboard();
});

