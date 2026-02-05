/**
 * Redux Toolkit Todos Slice.
 * Manages todo state with RTK's createSlice for simplified Redux logic.
 */
/**
 * AddTodo Component.
 * Provides a form to add new todos to the Redux store.
 */
import { useState } from 'react';
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.find((t) => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            return state.filter((t) => t.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
