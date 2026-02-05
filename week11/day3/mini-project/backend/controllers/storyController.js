exports.getAllStories = async (req, res) => {
    res.json([{ id: 1, title: 'Story 1', content: 'Content' }]);
};

exports.createStory = async (req, res) => {
    res.json({ message: 'Story created' });
};
