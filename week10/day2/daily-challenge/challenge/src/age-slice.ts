import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {ageDownAsync, ageUpAsync} from "./age-thunks.ts";

type AgeState = {
    age: number;
    loading: boolean;
    error: string | null;
};

const initialState: AgeState = {
    age: 0,
    loading: false,
    error: null,
};


export const ageSlice = createSlice({
    name: "age",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(ageUpAsync.pending, (state) => {
                state.loadind = true;
                state.error = null;
            })
            .addCase(ageUpAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.age += action.payload;
            })
            .addCase(ageUpAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Failed to increment age";
            });
        builder
            .addCase(ageDownAsync.pending, (state) => {
                state.loadind = true;
                state.error = null;
            })
            .addCase(ageDownAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.age -= action.payload;
            })
            .addCase(ageDownAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Failed to decrement age";
            });
    }
})

export default ageSlice.reducer;