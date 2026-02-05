import {createContext, useContext, useReducer} from "react";
import type { ReactNode, Dispatch } from "react";

import {todoReducer} from "./todo-reducer.ts";
import type {
    ActionType,
    ToDoStateType
} from "./types.ts";

type TodoContextValue = {
    todos: ToDoStateType;
    dispatch: Dispatch<ActionType>;
};

const ToDoContext = createContext<TodoContextValue | undefined>(undefined);

export function ToDoProvider({children} : {children: ReactNode}) {

    const [todos, dispatch] = useReducer(todoReducer, {
        todos: [],
        filter: "all"
    });
    return (
        <ToDoContext.Provider value={{todos, dispatch}}>
            {children}
        </ToDoContext.Provider>
    )
}

export function useTodos() {
    const ctx = useContext(ToDoContext);
    if (!ctx) throw new Error("useTodos must be used inside <TodoProvider>");
    return ctx;
}