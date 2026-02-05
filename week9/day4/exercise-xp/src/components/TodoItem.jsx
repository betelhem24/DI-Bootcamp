import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todosSlice';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
    );
};

export default TodoItem;
