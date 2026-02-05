import React from 'react';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Daily Planner</h1>
                <p>Manage your tasks efficiently.</p>
            </header>

            <main className="planner-main">
                <div className="planner-card">
                    <Calendar />
                    <hr className="divider" />
                    <TaskList />
                </div>
            </main>
        </div>
    );
}

export default App;
