import {addUser} from "./user-slice.ts";
import type { AppDispatch } from "./store";

export function fetchUser() {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch("/api/users");
            if (!response.ok) {
                throw new Error("Could not fetch user");
            } else {
                const data = await response.json();
                const user = { firstName: data.firstName, lastName: data.lastName };
                dispatch(addUser(user));
            }
        } catch (error) {
            console.error(error)
        }
    }
}