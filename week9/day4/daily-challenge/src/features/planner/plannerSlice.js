import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedDate: new Date().toISOString().split('T')[0], // Default to today: 'YYYY-MM-DD'
    tasksByDate: {
        // Structure:
        // '2023-10-27': [ { id: 1, text: 'Buy milk', completed: false } ]
    },
};

export const plannerSlice = createSlice({
    name: 'planner',
    initialState,
    reducers: {
        setSelectedDate: (state, action) => {
            state.selectedDate = action.payload;
        },
        addTask: (state, action) => {
            const { date, text } = action.payload;
            if (!state.tasksByDate[date]) {
                state.tasksByDate[date] = [];
            }
            state.tasksByDate[date].push({
                id: Date.now(),
                text,
                completed: false,
            });
        },
        editTask: (state, action) => {
            const { date, taskId, newText } = action.payload;
            const tasks = state.tasksByDate[date];
            if (tasks) {
                const task = tasks.find((t) => t.id === taskId);
                if (task) {
                    task.text = newText;
                }
            }
        },
        deleteTask: (state, action) => {
            const { date, taskId } = action.payload;
            const tasks = state.tasksByDate[date];
            if (tasks) {
                state.tasksByDate[date] = tasks.filter((t) => t.id !== taskId);
            }
        },
        toggleTaskCompletion: (state, action) => {
            const { date, taskId } = action.payload;
            const tasks = state.tasksByDate[date];
            if (tasks) {
                const task = tasks.find((t) => t.id === taskId);
                if (task) {
                    task.completed = !task.completed;
                }
            }
        },
    },
});

export const { setSelectedDate, addTask, editTask, deleteTask, toggleTaskCompletion } = plannerSlice.actions;

export const selectSelectedDate = (state) => state.planner.selectedDate;
export const selectTasksForDate = (state, date) => state.planner.tasksByDate[date] || [];

export default plannerSlice.reducer;
