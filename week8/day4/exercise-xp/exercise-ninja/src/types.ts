export type ToDoType = {
    id: number,
    text: string,
    done: boolean,
}

export type FilterType = "done" | "active" | "all";

export type ToDoStateType = {
    todos: ToDoType[],
    filter: FilterType
};

export type ActionType =
    | { type: "ADD_TODO"; payload: string }
    | { type: "REMOVE_TODO"; payload: number }
    | { type: "TOGGLE_TODO"; payload: number }
    | { type: "EDIT_TODO"; payload: { id: number, text: string } }
    | { type: "FILTER_TODO"; payload: FilterType };