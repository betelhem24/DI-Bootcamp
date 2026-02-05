import { createSlice } from '@reduxjs/toolkit';

const plannerSlice = createSlice({
    name: 'planner',
    initialState: {
        selectedDate: new Date().toISOString().split('T')[0],
        tasksByDate: {},
    },
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
            const { date, id, text } = action.payload;
            const tasks = state.tasksByDate[date];
            if (tasks) {
                const task = tasks.find((t) => t.id === id);
                if (task) {
                    task.text = text;
                }
            }
        },
        toggleTask: (state, action) => {
            const { date, id } = action.payload;
            const tasks = state.tasksByDate[date];
            if (tasks) {
                const task = tasks.find((t) => t.id === id);
                if (task) {
                    task.completed = !task.completed;
                }
            }
        },
        deleteTask: (state, action) => {
            const { date, id } = action.payload;
            if (state.tasksByDate[date]) {
                state.tasksByDate[date] = state.tasksByDate[date].filter((t) => t.id !== id);
            }
        },
    },
});

export const { setSelectedDate, addTask, editTask, toggleTask, deleteTask } = plannerSlice.actions;
export default plannerSlice.reducer;
