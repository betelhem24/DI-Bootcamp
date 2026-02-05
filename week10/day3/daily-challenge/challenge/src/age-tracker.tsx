import { useAppDispatch, useAppSelector } from "./hook";
import { ageUpAsync, ageDownAsync } from "./age-thunks";

export function AgeTracker() {
    const { age, loading, error } = useAppSelector((state) => state.age);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>Age: {age}</h2>

            {loading && <p>Updating age...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <button
                onClick={() => dispatch(ageUpAsync(1))}
                disabled={loading}
            >
                Increment
            </button>

            <button
                onClick={() => dispatch(ageDownAsync(1))}
                disabled={loading}
            >
                Decrement
            </button>
        </div>
    );
}
