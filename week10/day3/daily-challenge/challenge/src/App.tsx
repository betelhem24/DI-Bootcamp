import React from 'react';
import { useSelector } from 'react-redux';
import { selectCompletedTasksCount } from './features/tasks/tasksSlice';
import { RootState } from './app/store';
import CategorySelector from './components/CategorySelector';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    const completedCount = useSelector((state: RootState) => selectCompletedTasksCount(state));

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Productivity Tracker</h1>
                <p>Optimized with Redux Toolkit selectors</p>
                <div className="stats">
                    Total Completed Tasks: <strong>{completedCount}</strong>
                </div>
            </header>

            <main className="tracker-main">
                <CategorySelector />
                <TaskList />
            </main>
        </div>
    );
}

export default App;
