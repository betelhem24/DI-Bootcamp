import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { DataState } from '../types/types';

// Generic async thunk for fetching data
export const fetchDataThunk = createAsyncThunk
  any,
  () => Promise<any>,
  { rejectValue: string }
>('data/fetchData', async (fetchFunction, { rejectWithValue }) => {
  try {
    const data = await fetchFunction();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unknown error occurred');
  }
});

// Initial state
const initialState: DataState<any> = {
  data: null,
  loading: false,
  error: null,
};

// Create slice
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    resetData: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch data';
      });
  },
});

export const { resetData } = dataSlice.actions;
export default dataSlice.reducer;