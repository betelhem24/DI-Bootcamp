const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/auth', authRoutes);

// Base route
app.get('/', (req, res) => {
    res.send('Week 11 Day 2 Exercise XP - JWT Authentication API');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
