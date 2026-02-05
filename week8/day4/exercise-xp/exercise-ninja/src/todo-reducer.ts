import type {ToDoStateType, ActionType } from "./types.ts";

export function todoReducer(state: ToDoStateType, action: ActionType) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos, {
                    id: Date.now(),
                    text: action.payload,
                    done: false
                    }
                ],
                filter: state.filter
            };
        case "REMOVE_TODO":
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload),
                filter: state.filter
            };
        case "TOGGLE_TODO":
            return {
                todos: state.todos.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo),
                filter: state.filter
            };
        case "EDIT_TODO":
            return {
                todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo),
                filter: state.filter
            };
        case "FILTER_TODO":
            return {todos: state.todos, filter: action.payload};
        default:
            return state;
    }
}