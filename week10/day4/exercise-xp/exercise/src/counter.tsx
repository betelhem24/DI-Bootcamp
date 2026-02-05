import {useState} from "react";

type ActionType = "increment" | "decrement" | null;

export function Counter() {
    const [counter, setCounter] = useState<number>(0);
    const [lastAction, setLastAction] = useState<ActionType>(null);

    function increment(): void {
        setCounter(counter + 1);
        setLastAction("increment")
    }

    function decrement(): void {
        setCounter(counter - 1);
        setLastAction("decrement");
    }

    return (
        <>
            <p>Counter: {counter}</p>
            <p>Last action: {lastAction}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}