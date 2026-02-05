import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the User interface
interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
    website: string;
}

// Define the state interface
interface UserState {
    data: User | null;
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: UserState = {
    data: null,
    loading: false,
    error: null,
};

// Thunk action creator to fetch user data
export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (userId: number, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data: User = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
        }
    }
);

// Create the user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUser: (state) => {
            state.data = null;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
