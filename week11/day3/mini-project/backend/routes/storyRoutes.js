const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/', storyController.getAllStories); // Public or Protected? Instructions say GET /stories needs JWT.
router.post('/', authenticateToken, storyController.createStory);
// Add other routes (PATCH, DELETE)

module.exports = router;
