// Game state variables
let playerName = '';
let score = 0;
let round = 0;
let totalQuestions = 0;
let currentOptions = [];
let selectedOption = null;

// DOM Helper Functions

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

function showNameSection() {
    showSection('nameSection');
    document.getElementById('playerName').value = '';
    score = 0;
    round = 0;
    totalQuestions = 0;
}

// Game Functions

function startGame() {
    const nameInput = document.getElementById('playerName');
    const name = nameInput.value.trim();
    
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
    
    playerName = name;
    score = 0;
    round = 0;
    totalQuestions = 0;
    
    document.getElementById('displayName').textContent = playerName;
    document.getElementById('score').textContent = '0';
    document.getElementById('round').textContent = '0';
    
    showSection('gameSection');
    loadLeaderboard();
    nextQuestion();
}

async function nextQuestion() {
    try {
        // Hide feedback
        const feedback = document.getElementById('feedback');
        feedback.classList.add('hidden');
        
        // Reset selection
        selectedOption = null;
        
        // Show loading state
        document.getElementById('emojiContainer').textContent = '⏳';
        
        // Fetch new emoji question
        const response = await fetch('/api/emoji');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Display emoji
        document.getElementById('emojiContainer').textContent = data.emoji;
        currentOptions = data.options;
        
        // Create option buttons
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
        
        // Update round counter
        round++;
        totalQuestions++;
        document.getElementById('round').textContent = round;
        
        // Enable submit button
        const submitBtn = document.querySelector('#guessForm button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = false;
        }
        
    } catch (error) {
        console.error('Error loading question:', error);
        alert('❌ Error loading question. Please try again.');
        document.getElementById('emojiContainer').textContent = '❌';
    }
}

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

// Handle form submission
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
            
            // Submit guess to server
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
            
            // Show feedback
            const feedback = document.getElementById('feedback');
            feedback.textContent = data.message;
            feedback.className = 'feedback ' + (data.correct ? 'correct' : 'wrong');
            feedback.classList.remove('hidden');
            
            // Update score if correct
            if (data.correct) {
                score++;
                document.getElementById('score').textContent = score;
            }
            
            // Disable all option buttons
            const allButtons = document.querySelectorAll('.option-btn');
            allButtons.forEach(btn => {
                btn.disabled = true;
                btn.style.opacity = '0.6';
                btn.style.cursor = 'not-allowed';
                
                // Highlight correct answer
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
        // Submit score to leaderboard
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
        
        // Display leaderboard
        displayLeaderboard(data.leaderboard);
        showSection('leaderboardSection');
        
    } catch (error) {
        console.error('Error submitting score:', error);
        alert('❌ Error submitting score. Showing leaderboard anyway.');
        await loadLeaderboard();
        showSection('leaderboardSection');
    }
}

async function loadLeaderboard() {
    try {
        const response = await fetch('/api/leaderboard');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const leaderboard = await response.json();
        displayLeaderboard(leaderboard);
    } catch (error) {
        console.error('Error loading leaderboard:', error);
    }
}

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

// Security: Escape HTML to prevent XSS
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 Emoji Guessing Game loaded!');
    loadLeaderboard();
});