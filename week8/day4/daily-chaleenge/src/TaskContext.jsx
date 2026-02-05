import { createContext, useReducer, useEffect } from 'react';

// Initial State
const initialState = {
    tasks: [
        { id: 1, text: 'Complete the daily challenge', completed: false },
        { id: 2, text: 'Review Week 8 content', completed: true },
    ],
    filter: 'all', // all, completed, active
};

// Reducer Function
const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }],
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, text: action.payload.text } : task
                ),
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};

// Create Context
export const TaskContext = createContext();

// Provider Component
export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    useEffect(() => {
        // Optional: Persist tasks to local storage or fetch from API
    }, [state.tasks]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};
