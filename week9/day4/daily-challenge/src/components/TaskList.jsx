import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addTask,
    editTask,
    deleteTask,
    toggleTaskCompletion,
    selectTasksForDate,
    selectSelectedDate,
} from '../features/planner/plannerSlice';

const TaskList = () => {
    const dispatch = useDispatch();
    const selectedDate = useSelector(selectSelectedDate);
    const tasks = useSelector((state) => selectTasksForDate(state, selectedDate));

    const [newTaskText, setNewTaskText] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTaskText.trim()) {
            dispatch(addTask({ date: selectedDate, text: newTaskText }));
            setNewTaskText('');
        }
    };

    const handleStartEdit = (task) => {
        setEditingTaskId(task.id);
        setEditText(task.text);
    };

    const handleSaveEdit = (taskId) => {
        if (editText.trim()) {
            dispatch(editTask({ date: selectedDate, taskId, newText: editText }));
            setEditingTaskId(null);
            setEditText('');
        }
    };

    const handleCancelEdit = () => {
        setEditingTaskId(null);
        setEditText('');
    };

    const handleDelete = (taskId) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            dispatch(deleteTask({ date: selectedDate, taskId }));
        }
    };

    const handleToggle = (taskId) => {
        dispatch(toggleTaskCompletion({ date: selectedDate, taskId }));
    };

    return (
        <div className="task-list-container">
            <h3>Tasks for {selectedDate}</h3>

            {/* Add Task Form */}
            <form onSubmit={handleAddTask} className="add-task-form">
                <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    placeholder="Add a new task..."
                    className="task-input"
                />
                <button type="submit" className="btn-add">Add Task</button>
            </form>

            {/* Task List */}
            <ul className="task-list">
                {tasks.length === 0 ? (
                    <p className="no-tasks">No tasks for this day.</p>
                ) : (
                    tasks.map((task) => (
                        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                            {editingTaskId === task.id ? (
                                <div className="edit-mode">
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        className="edit-input"
                                        autoFocus
                                    />
                                    <div className="edit-actions">
                                        <button onClick={() => handleSaveEdit(task.id)} className="btn-save">Save</button>
                                        <button onClick={handleCancelEdit} className="btn-cancel">Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="view-mode">
                                    <div className="task-content">
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => handleToggle(task.id)}
                                            className="task-checkbox"
                                        />
                                        <span className="task-text">{task.text}</span>
                                    </div>
                                    <div className="task-actions">
                                        <button onClick={() => handleStartEdit(task)} className="btn-edit">Edit</button>
                                        <button onClick={() => handleDelete(task.id)} className="btn-delete">Delete</button>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default TaskList;
