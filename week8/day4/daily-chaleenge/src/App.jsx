import { TaskProvider } from './TaskContext';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import './App.css';

function App() {
    return (
        <TaskProvider>
            <div className="app-container">
                <header className="app-header">
                    <h1>Enhanced Task Manager</h1>
                    <p>useContext + useReducer + useRef Demo</p>
                </header>

                <div className="tasks-card">
                    <AddTask />
                    <TaskFilter />
                    <TaskList />
                </div>
            </div>
        </TaskProvider>
    );
}

export default App;
