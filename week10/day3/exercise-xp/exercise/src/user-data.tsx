import {useAppDispatch, useAppSelector} from "./hook.ts";
import {fetchUser} from "./user-thunks.ts";

export function UserData() {
    const users = useAppSelector((state) => state.users)
    const dispatch = useAppDispatch();
    return (
        <>
            <button onClick={() => dispatch(fetchUser())}>Add user</button>
            <ul>
            {users.map(user => (
                <li key={user.id}>
                    <p>{user.firstName} {user.lastName}</p>
                </li>
            ))}
            </ul>
        </>
    )
}