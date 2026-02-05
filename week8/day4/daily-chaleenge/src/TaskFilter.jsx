import { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskFilter = () => {
    const { state, dispatch } = useContext(TaskContext);
    const { filter } = state;

    const setFilter = (newFilter) => {
        dispatch({ type: 'SET_FILTER', payload: newFilter });
    };

    return (
        <div className="task-filters">
            <button
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
            >
                All
            </button>
            <button
                className={filter === 'active' ? 'active' : ''}
                onClick={() => setFilter('active')}
            >
                Active
            </button>
            <button
                className={filter === 'completed' ? 'active' : ''}
                onClick={() => setFilter('completed')}
            >
                Completed
            </button>
        </div>
    );
};

export default TaskFilter;
