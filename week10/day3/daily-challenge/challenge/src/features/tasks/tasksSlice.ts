import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

export interface Task {
    id: string;
    title: string;
    categoryId: string;
    completed: boolean;
}

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: [
        { id: '1', title: 'Complete project report', categoryId: '1', completed: false },
        { id: '2', title: 'Buy groceries', categoryId: '2', completed: false },
        { id: '3', title: 'Learn Redux Toolkit', categoryId: '3', completed: true },
    ],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        editTask: (state, action: PayloadAction<{ id: string; title: string }>) => {
            const task = state.tasks.find((t) => t.id === action.payload.id);
            if (task) {
                task.title = action.payload.title;
            }
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((t) => t.id !== action.payload);
        },
        toggleTaskCompletion: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions;

// Base Selector
const selectTasks = (state: { tasks: TasksState }) => state.tasks.tasks;

// Memoized Selectors using createSelector
export const selectTasksByCategory = createSelector(
    [selectTasks, (state, categoryId: string) => categoryId],
    (tasks, categoryId) => tasks.filter((task) => task.categoryId === categoryId)
);

export const selectCompletedTasksCount = createSelector(
    [selectTasks],
    (tasks) => tasks.filter((task) => task.completed).length
);

export default tasksSlice.reducer;
