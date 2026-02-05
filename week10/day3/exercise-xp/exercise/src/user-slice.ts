/**
 * User Slice - Week 10 Day 3 Exercise XP.
 * Redux slice for managing user data with TypeScript types.
 */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/**
 * User type definition with id, firstName, and lastName.
 */
type UserType = {
    id: number;
    firstName: string,
    lastName: string,
}

/**
 * Payload type for adding a new user (without id).
 */
type AddUserPayloadType = {
    firstName: string,
    lastName: string,
}

// Initial state: empty array of users
const users: UserType[] = [];

export const userSlice = createSlice({
    name: "users",
    initialState: users,
    reducers: {
        addUser: (state, action: PayloadAction<AddUserPayloadType>) =>
            state.concat({
                id: Date.now(),
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            }),
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;