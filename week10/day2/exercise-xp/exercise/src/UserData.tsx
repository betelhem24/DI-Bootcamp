import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { fetchUser, clearUser } from './userSlice';
import { useState } from 'react';
import './UserData.css';

const UserData = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data: user, loading, error } = useSelector((state: RootState) => state.user);
    const [userId, setUserId] = useState<string>('1');

    const handleFetchUser = () => {
        const id = parseInt(userId);
        if (id > 0 && id <= 10) {
            dispatch(fetchUser(id));
        } else {
            alert('Please enter a valid user ID (1-10)');
        }
    };

    const handleClearUser = () => {
        dispatch(clearUser());
        setUserId('1');
    };

    return (
        <div className="user-data-container">
            <h1>Redux Thunk User Data Fetcher</h1>

            <div className="controls">
                <input
                    type="number"
                    min="1"
                    max="10"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter User ID (1-10)"
                    className="user-input"
                />
                <button onClick={handleFetchUser} disabled={loading} className="fetch-btn">
                    {loading ? 'Loading...' : 'Fetch User'}
                </button>
                <button onClick={handleClearUser} className="clear-btn">
                    Clear
                </button>
            </div>

            {loading && (
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Fetching user data...</p>
                </div>
            )}

            {error && (
                <div className="error">
                    <h3>Error:</h3>
                    <p>{error}</p>
                </div>
            )}

            {user && !loading && (
                <div className="user-card">
                    <h2>User Information</h2>
                    <div className="user-details">
                        <div className="detail-row">
                            <span className="label">ID:</span>
                            <span className="value">{user.id}</span>
                        </div>
                        <div className="detail-row">
                            <span className="label">Name:</span>
                            <span className="value">{user.name}</span>
                        </div>
                        <div className="detail-row">
                            <span className="label">Username:</span>
                            <span className="value">{user.username}</span>
                        </div>
                        <div className="detail-row">
                            <span className="label">Email:</span>
                            <span className="value">{user.email}</span>
                        </div>
                        <div className="detail-row">
                            <span className="label">Phone:</span>
                            <span className="value">{user.phone}</span>
                        </div>
                        <div className="detail-row">
                            <span className="label">Website:</span>
                            <span className="value">{user.website}</span>
                        </div>
                    </div>
                </div>
            )}

            {!user && !loading && !error && (
                <div className="placeholder">
                    <p>Enter a user ID and click "Fetch User" to load data</p>
                </div>
            )}
        </div>
    );
};

export default UserData;
