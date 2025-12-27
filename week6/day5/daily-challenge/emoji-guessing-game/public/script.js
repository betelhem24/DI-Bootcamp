let playerName = '';
let score = 0;
let round = 0;
let currentOptions = [];
let selectedOption = null;

// Show/Hide sections
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function showNameSection() {
    showSection('nameSection');
    document.getElementById('playerName').value = '';
}

// Start game
function startGame() {
    const nameInput = document.getElementById('playerName').value.trim();
    
    if (!nameInput) {
        alert('Please enter your name!');
        return;
    }
    
    playerName = nameInput;
    score = 0;
    round = 0;
    
    document.getElementById('displayName').textContent = playerName;
    document.getElementById('score').textContent = score;
    document.getElementById('round').textContent = round;
    
    showSection('gameSection');
    loadLeaderboard();
    nextQuestion();
}

// Load new question
async function nextQuestion() {
    try {
        document.getElementById('feedback').classList.add('hidden');
        selectedOption = null;
        
        const response = await fetch('/api/emoji');
        const data = await response.json();
        
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
        
        round++;
        document.getElementById('round').textContent = round;
        
    } catch (error) {
        console.error('Error loading question:', error);
        alert('Error loading question. Please try again.');
    }
}

// Select option
function selectOption(button, option) {
    // Remove selection from all buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to clicked button
    button.classList.add('selected');
    selectedOption = option;
}

// Handle form submission
document.getElementById('guessForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!selectedOption) {
        alert('Please select an option!');
        return;
    }
    
    try {
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
        
        const data = await response.json();
        
        // Show feedback
        const feedback = document.getElementById('feedback');
        feedback.textContent = data.message;
        feedback.className = 'feedback ' + (data.correct ? 'correct' : 'wrong');
        feedback.classList.remove('hidden');
        
        // Update score
        if (data.correct) {
            score++;
            document.getElementById('score').textContent = score;
        }
        
        // Disable option buttons
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            btn.style.cursor = 'not-allowed';
        });
        
    } catch (error) {
        console.error('Error submitting guess:', error);
        alert('Error submitting guess. Please try again.');
    }
});

// End game
async function endGame() {
    if (round === 0) {
        alert('Play at least one round before ending!');
        return;
    }
    
    try {
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
        
        const data = await response.json();
        
        alert(`Game Over!\n${playerName}, your final score: ${score}/${round}`);
        
        displayLeaderboard(data.leaderboard);
        showSection('leaderboardSection');
        
    } catch (error) {
        console.error('Error submitting score:', error);
        alert('Error submitting score. Please try again.');
    }
}

// Load leaderboard
async function loadLeaderboard() {
    try {
        const response = await fetch('/api/leaderboard');
        const leaderboard = await response.json();
        displayLeaderboard(leaderboard);
    } catch (error) {
        console.error('Error loading leaderboard:', error);
    }
}

// Display leaderboard
function displayLeaderboard(leaderboard) {
    const leaderboardList = document.getElementById('leaderboardList');
    
    if (leaderboard.length === 0) {
        leaderboardList.innerHTML = '<p class="no-scores">No scores yet. Be the first to play!</p>';
        return;
    }
    
    leaderboardList.innerHTML = '';
    
    leaderboard.forEach((entry, index) => {
        const item = document.createElement('div');
        item.className = 'leaderboard-item';
        
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
        
        item.innerHTML = `
            <span class="leaderboard-rank">${medal} #${index + 1}</span>
            <span class="leaderboard-name">${entry.playerName}</span>
            <span class="leaderboard-score">${entry.score} pts</span>
        `;
        
        leaderboardList.appendChild(item);
    });
}

// Load leaderboard on page load
document.addEventListener('DOMContentLoaded', () => {
    loadLeaderboard();
});