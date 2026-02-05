import { createAsyncThunk} from "@reduxjs/toolkit";

const delay = (ms: number) =>
    new Promise<void>((resolve) => setTimeout(resolve, ms));

export const ageUpAsync = createAsyncThunk<number, number>(
    "age/ageUpAsync",
    async (amount: number) => {
        await delay(1000);
        return amount;
    }
);

export const ageDownAsync = createAsyncThunk<number, number>(
    "age/ageDownAsync",
    async (amount: number) => {
        await delay(1000);
        return amount;
    }
);
