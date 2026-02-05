import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { selectSelectedCategoryId } from '../features/categories/categoriesSlice';
import {
    selectTasksByCategory,
    addTask,
    editTask,
    deleteTask,
    toggleTaskCompletion
} from '../features/tasks/tasksSlice';

const TaskList: React.FC = () => {
    const dispatch = useDispatch();
    const selectedCategoryId = useSelector((state: RootState) => selectSelectedCategoryId(state));

    // Use memoized selector to get tasks for the selected category
    const tasks = useSelector((state: RootState) =>
        selectedCategoryId ? selectTasksByCategory(state, selectedCategoryId) : []
    );

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
    const [editTitle, setEditTitle] = useState('');

    const handleAddTask = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (newTaskTitle.trim() && selectedCategoryId) {
            dispatch(addTask({
                id: Date.now().toString(),
                title: newTaskTitle,
                categoryId: selectedCategoryId,
                completed: false,
            }));
            setNewTaskTitle('');
        }
    }, [dispatch, newTaskTitle, selectedCategoryId]);

    const handleDeleteTask = useCallback((taskId: string) => {
        dispatch(deleteTask(taskId));
    }, [dispatch]);

    const handleToggleTask = useCallback((taskId: string) => {
        dispatch(toggleTaskCompletion(taskId));
    }, [dispatch]);

    const startEditing = useCallback((task: { id: string, title: string }) => {
        setEditingTaskId(task.id);
        setEditTitle(task.title);
    }, []);

    const saveEdit = useCallback((taskId: string) => {
        if (editTitle.trim()) {
            dispatch(editTask({ id: taskId, title: editTitle }));
            setEditingTaskId(null);
            setEditTitle('');
        }
    }, [dispatch, editTitle]);

    const cancelEdit = useCallback(() => {
        setEditingTaskId(null);
        setEditTitle('');
    }, []);

    if (!selectedCategoryId) {
        return <p>Please select a category to view tasks.</p>;
    }

    return (
        <div className="task-list">
            <h3>Tasks</h3>

            <form onSubmit={handleAddTask} className="add-task-form">
                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Add a new task..."
                    className="task-input"
                />
                <button type="submit" className="btn-add">Add Task</button>
            </form>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                        {editingTaskId === task.id ? (
                            <div className="edit-mode">
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    className="edit-input"
                                    autoFocus
                                />
                                <button onClick={() => saveEdit(task.id)} className="btn-save">Save</button>
                                <button onClick={cancelEdit} className="btn-cancel">Cancel</button>
                            </div>
                        ) : (
                            <div className="view-mode">
                                <div className="task-content">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => handleToggleTask(task.id)}
                                        className="task-checkbox"
                                    />
                                    <span className="task-title">{task.title}</span>
                                </div>
                                <div className="task-actions">
                                    <button onClick={() => startEditing(task)} className="btn-edit">Edit</button>
                                    <button onClick={() => handleDeleteTask(task.id)} className="btn-delete">Delete</button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
                {tasks.length === 0 && <p className="no-tasks">No tasks in this category.</p>}
            </ul>
        </div>
    );
};

export default TaskList;
