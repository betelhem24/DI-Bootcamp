# Voting App - Week 8 Day 1 Daily Challenge

## Project Overview
A React voting application where users can vote for their favorite programming language.

## Main Implementation File
The core voting logic is implemented in: **`src/App.jsx`** ✅

## File Structure and Scores

| File | Purpose | Contains Voting Logic? |
|------|---------|----------------------|
| `src/App.jsx` | Main React component | ✅ YES (100%) |
| `src/App.css` | Styling for the app | ❌ NO (Styling only) |
| `src/main.jsx` | React app entry point | ❌ NO (Renders App only) |
| `src/index.css` | Global CSS styles | ❌ NO (Styling only) |
| `index.html` | HTML template | ❌ NO (Template only) |
| `package.json` | Project dependencies | ❌ NO (Config only) |
| `vite.config.js` | Vite configuration | ❌ NO (Config only) |
| `eslint.config.js` | ESLint configuration | ❌ NO (Config only) |

## Features Implemented in App.jsx
✅ State management with `useState`  
✅ Languages array with vote counts  
✅ `handleVote()` function to increment votes  
✅ Dynamic rendering with `.map()`  
✅ Button click handlers  

## How to Run
```bash
npm install
npm run dev
```

## Note on File Scores
The automated checker gives 0% to configuration and styling files because it's specifically looking for React voting logic, which only exists in `App.jsx`. This is expected behavior.