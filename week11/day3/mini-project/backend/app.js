const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const storyRoutes = require('./routes/storyRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true })); // Allow frontend
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/stories', storyRoutes);

// Base
app.get('/', (req, res) => {
    res.send('Storytelling App API');
});

// Start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
