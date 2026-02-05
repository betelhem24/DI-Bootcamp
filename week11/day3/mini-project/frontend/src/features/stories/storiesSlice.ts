import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Story } from '../../types';

const API_URL = 'http://localhost:5000/api/stories';

export const fetchStories = createAsyncThunk(
    'stories/fetchAll',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState() as any;
            const response = await axios.get(API_URL, {
                headers: { Authorization: `Bearer ${auth.token}` },
            });
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || 'Failed to fetch stories');
        }
    }
);

export const createStory = createAsyncThunk(
    'stories/create',
    async (storyData: { title: string; content: string }, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState() as any;
            const response = await axios.post(API_URL, storyData, {
                headers: { Authorization: `Bearer ${auth.token}` },
            });
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || 'Failed to create story');
        }
    }
);

interface StoriesState {
    list: Story[];
    loading: boolean;
    error: string | null;
}

const initialState: StoriesState = {
    list: [],
    loading: false,
    error: null,
};

const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchStories.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchStories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(createStory.fulfilled, (state, action) => {
                state.list.unshift(action.payload);
            });
    },
});

export default storiesSlice.reducer;
