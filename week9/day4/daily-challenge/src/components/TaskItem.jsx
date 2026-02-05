import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../features/planner/plannerSlice';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.planner.selectedDate);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleEdit = () => {
        if (isEditing) {
            dispatch(editTask({ date: selectedDate, id: task.id, text: editText }));
        }
        setIsEditing(!isEditing);
    };

    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <span onClick={() => dispatch(toggleTask({ date: selectedDate, id: task.id }))}>
                    {task.text}
                </span>
            )}
            <div className="task-actions">
                <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
                <button onClick={() => dispatch(deleteTask({ date: selectedDate, id: task.id }))}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
