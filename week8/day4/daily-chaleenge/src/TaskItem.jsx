import { useContext, useState, useRef, useEffect } from 'react';
import { TaskContext } from './TaskContext';

const TaskItem = ({ task }) => {
    const { dispatch } = useContext(TaskContext);
    const [isEditing, setIsEditing] = useState(false);
    const editInputRef = useRef(null);

    // Focus the input when entering edit mode
    useEffect(() => {
        if (isEditing && editInputRef.current) {
            editInputRef.current.focus();
            editInputRef.current.value = task.text; // Set initial value
        }
    }, [isEditing, task.text]);

    const handleToggle = () => {
        dispatch({ type: 'TOGGLE_TASK', payload: task.id });
    };

    const handleDelete = () => {
        dispatch({ type: 'DELETE_TASK', payload: task.id });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        const newText = editInputRef.current.value.trim();
        if (newText) {
            dispatch({ type: 'EDIT_TASK', payload: { id: task.id, text: newText } });
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };

    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleToggle}
                    className="task-checkbox"
                />

                {isEditing ? (
                    <div className="edit-container">
                        <input
                            ref={editInputRef}
                            type="text"
                            defaultValue={task.text}
                            onKeyDown={handleKeyDown}
                            className="edit-input"
                            onBlur={handleSave}
                        />
                    </div>
                ) : (
                    <span className="task-text" onClick={handleToggle}>
                        {task.text}
                    </span>
                )}
            </div>

            <div className="task-actions">
                {isEditing ? (
                    <button onClick={handleSave} className="btn-save">Save</button>
                ) : (
                    <button onClick={handleEdit} className="btn-edit">Edit</button>
                )}
                <button onClick={handleDelete} className="btn-delete">Delete</button>
            </div>
        </li>
    );
};

export default TaskItem;
