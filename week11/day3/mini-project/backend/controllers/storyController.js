const db = require('../db');

exports.getAllStories = async (req, res) => {
    try {
        const result = await db.query(`
      SELECT s.*, u.username as author_name 
      FROM stories s 
      JOIN users u ON s.author_id = u.id 
      ORDER BY s.created_at DESC
    `);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching stories' });
    }
};

exports.createStory = async (req, res) => {
    const { title, content } = req.body;
    const authorId = req.user.userId;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content required' });
    }

    try {
        const result = await db.query(
            'INSERT INTO stories (title, content, author_id) VALUES ($1, $2, $3) RETURNING *',
            [title, content, authorId]
        );
        const newStory = result.rows[0];
        // Attach username for consistency
        newStory.author_name = req.user.username;
        res.status(201).json(newStory);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating story' });
    }
};
