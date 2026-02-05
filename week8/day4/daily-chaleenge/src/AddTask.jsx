import { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';

const AddTask = () => {
    const { dispatch } = useContext(TaskContext);
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch({ type: 'ADD_TASK', payload: text.trim() });
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input
                type="text"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="add-task-input"
            />
            <button type="submit" className="add-task-btn">Add</button>
        </form>
    );
};

export default AddTask;
