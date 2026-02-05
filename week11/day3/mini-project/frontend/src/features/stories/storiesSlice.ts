import { createSlice } from '@reduxjs/toolkit';

const storiesSlice = createSlice({
    name: 'stories',
    initialState: { list: [] },
    reducers: {
        setStories: (state, action) => {
            state.list = action.payload;
        },
    },
});

export const { setStories } = storiesSlice.actions;
export default storiesSlice.reducer;
