import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories, createStory } from '../../features/stories/storiesSlice';
import { logout } from '../../features/auth/authSlice';
import { AppDispatch, RootState } from '../store';

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { list: stories, loading, error } = useSelector((state: RootState) => state.stories);
    const { user } = useSelector((state: RootState) => state.auth);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        dispatch(fetchStories());
    }, [dispatch]);

    const handleCreateStory = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && content) {
            dispatch(createStory({ title, content }));
            setTitle('');
            setContent('');
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="home-container">
            <header>
                <h1>Collaborative Stories</h1>
                <div className="user-info">
                    <span>Welcome, {user?.username}</span>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </header>

            <section className="create-story">
                <h3>Start a New Story</h3>
                <form onSubmit={handleCreateStory}>
                    <input
                        type="text"
                        placeholder="Story Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Once upon a time..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    <button type="submit">Publish</button>
                </form>
            </section>

            <section className="stories-list">
                <h3>Latest Stories</h3>
                {loading && <p>Loading stories...</p>}
                {error && <p className="error">{error}</p>}
                {stories.map((story) => (
                    <article key={story.id} className="story-card">
                        <h4>{story.title}</h4>
                        <p className="author">by {story.author_name}</p>
                        <p className="content">{story.content.substring(0, 100)}...</p>
                        <small>Created: {new Date(story.created_at).toLocaleDateString()}</small>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Home;
