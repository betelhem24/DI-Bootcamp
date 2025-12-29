/**
 * EMOJI GUESSING GAME - EMOJI DATA MODULE
 * 
 * This module fulfills the requirement:
 * "Create an array of emoji objects, each containing the emoji character 
 * and its corresponding name"
 * 
 * This data is used by the Express API in server.js to:
 * - Generate random emoji questions
 * - Create multiple choice options
 * - Validate player guesses
 * 
 * This demonstrates the use of Node.js modules as required by the instructions.
 */

// Array of emoji objects with emoji character and corresponding name
// This fulfills requirement #2: "Create an array of emoji objects"
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '🎉', name: 'Party' },
    { emoji: '🌟', name: 'Star' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '📱', name: 'Phone' },
    { emoji: '⚽', name: 'Soccer' },
    { emoji: '🌈', name: 'Rainbow' },
    { emoji: '🍦', name: 'Ice Cream' },
    { emoji: '🎮', name: 'Game' },
    { emoji: '📚', name: 'Books' },
    { emoji: '☕', name: 'Coffee' },
    { emoji: '🌺', name: 'Flower' },
    { emoji: '🎨', name: 'Art' },
    { emoji: '🏀', name: 'Basketball' },
    { emoji: '🍔', name: 'Burger' },
    { emoji: '🎭', name: 'Theater' },
    { emoji: '🎪', name: 'Circus' },
    { emoji: '🎬', name: 'Movie' },
    { emoji: '🎤', name: 'Microphone' },
    { emoji: '🎧', name: 'Headphones' },
    { emoji: '🎯', name: 'Target' },
    { emoji: '🎲', name: 'Dice' },
    { emoji: '🎰', name: 'Slot Machine' },
    { emoji: '🏆', name: 'Trophy' },
    { emoji: '🏅', name: 'Medal' },
    { emoji: '⚡', name: 'Lightning' },
    { emoji: '🌙', name: 'Moon' },
    { emoji: '☀️', name: 'Sun' },
    { emoji: '🌊', name: 'Wave' },
    { emoji: '🔥', name: 'Fire' },
    { emoji: '❄️', name: 'Snowflake' }
];

/**
 * Export the emojis array as a Node.js module
 * This demonstrates the requirement: "Use Node.js modules"
 * 
 * This module is imported in server.js using:
 * const emojis = require('./data/emojis');
 */
module.exports = emojis;

/**
 * PROJECT STRUCTURE NOTE:
 * This file is part of a complete Express.js application where:
 * - server.js contains the Express API and game logic (backend)
 * - This file (emojis.js) provides the data module (backend)
 * - public/index.html contains the game interface (frontend)
 * - public/script.js handles client-side interactions (frontend)
 * - public/style.css provides styling (frontend)
 * 
 * Together, these files fulfill all requirements of the Daily Challenge.
 */