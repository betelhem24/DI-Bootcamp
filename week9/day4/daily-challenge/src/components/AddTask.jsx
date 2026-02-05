import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/planner/plannerSlice';

const AddTask = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.planner.selectedDate);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTask({ date: selectedDate, text }));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-task">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={`Add task for ${selectedDate}...`}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;
