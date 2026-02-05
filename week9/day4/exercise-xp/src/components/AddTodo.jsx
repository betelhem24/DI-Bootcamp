/**
 * AddTodo Component.
 * Provides a form to add new todos to the Redux store.
 */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodo;
