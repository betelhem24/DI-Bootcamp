// Exercise 3: CRUD API with Axios - app.js

const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Endpoint to get all posts from JSONPlaceholder API
app.get('/api/posts', async (req, res) => {
  try {
    console.log('Fetching posts from JSONPlaceholder API...');
    
    // Use the fetchPosts function from dataService module
    const posts = await fetchPosts();
    
    console.log('Data successfully retrieved and sent as response');
    
    // Respond with the fetched data
    res.json(posts);
  } catch (error) {
    console.error('Error retrieving posts:', error.message);
    res.status(500).json({ error: 'Failed to fetch posts from external API' });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to CRUD API', 
    endpoints: {
      getAllPosts: 'GET /api/posts'
    }
  });
});

// Set up the server to listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`CRUD API server is running on http://localhost:${PORT}`);
});