/**
 * Age Tracker Component - Week 10 Day 2 Daily Challenge.
 * Demonstrates Redux Toolkit with Thunk middleware for async actions.
 * Allows users to increment/decrement age with simulated async operations.
 */
import { useAppDispatch, useAppSelector } from "./hook";
import { ageUpAsync, ageDownAsync } from "./age-thunks";

/**
 * Main Age Tracker component.
 * Displays current age and provides buttons for async increment/decrement.
 */
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
