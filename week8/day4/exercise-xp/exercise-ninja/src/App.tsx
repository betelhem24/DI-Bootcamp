import { useState } from "react";
import type { ChangeEvent, KeyboardEvent, MouseEvent } from "react";

import './App.css'
import {useTodos} from "./todo-provider.tsx";
import type {ToDoType} from "./types.ts";

export function App() {
    const { todos, dispatch } = useTodos();
    const [editingTodo, setEditingTodo] = useState<number | null>(null);
    const [editedText, setEditedText] = useState<string>('');

    function handleAddToDo(text:string) {
        dispatch({type: "ADD_TODO", payload:text})
    }

    function handleRemoveToDo(id: number) {
        dispatch({type: "REMOVE_TODO", payload:id})
    }

    function handleToggleTodo(id:number) {
        dispatch({type: "TOGGLE_TODO", payload:id})
    }

    function handleEditTodo(id:number, text:string) {
        dispatch({type: "EDIT_TODO", payload: {id, text}});
        setEditedText('');
        setEditingTodo(null);
    }

    function handleFilter(event: MouseEvent) {
        const buttonId = event.currentTarget.id;
        if (buttonId) {
            switch (buttonId) {
                case "all":
                    return dispatch({type: "FILTER_TODO", payload: "all"});
                case "done":
                    return dispatch({type: "FILTER_TODO", payload: "done"});
                case "active":
                    return dispatch({type: "FILTER_TODO", payload: "active"});
                default:
                    throw Error("Unknown buttonId : " + buttonId);
            }
        } else {
            throw Error("Button Id can't be empty");
        }
    }

    function handleEditBtn(id: number) {
        const toDoIndex: number = todos.todos.findIndex(todo => todo.id === id)
        if (toDoIndex !== -1) {
            setEditingTodo(id);
            setEditedText(todos.todos[toDoIndex].text);
        } else {
            throw Error("Incorrect index of todos with id " + id);
        }
    }

    function handleCancelBtn() {
        setEditedText('');
        setEditingTodo(null);
    }

    function handleChangeToDoText(event: ChangeEvent<HTMLInputElement>) {
        const text = event.target.value;
        setEditedText(text);
    }

    let visibleTodos: ToDoType[] = [];
    switch (todos.filter) {
        case "active":
            visibleTodos = todos.todos.filter(todo => !todo.done);
            break;
        case "done":
            visibleTodos = todos.todos.filter(todo => todo.done);
            break;
        case "all":
            visibleTodos = todos.todos;
            break;
        default:
            visibleTodos =  todos.todos;
            break;
    }
            return (
                <div>
                    <button id="all" onClick={(event) => handleFilter(event)}>all</button>
                    <button id="done" onClick={(event) => handleFilter(event)}>done</button>
                    <button id="active" onClick={(event) => handleFilter(event)}>active</button>
                    <ul>
                        {visibleTodos.map((todo) => (
                            <li key={todo.id.toString()}>
                                <input
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={() => handleToggleTodo(todo.id)}
                                />
                                {todo.id === editingTodo ? (
                                    <>
                                        <input value={editedText} onChange={handleChangeToDoText}/>
                                        <button onClick={() => handleEditTodo(todo.id, editedText)}>Save</button>
                                        <button onClick={handleCancelBtn}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        {todo.text}
                                        <button onClick={() => handleEditBtn(todo.id)}>Edit</button>
                                        <button onClick={() => handleRemoveToDo(todo.id)}>Delete</button>
                                    </>
                                )
                                }
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        placeholder="Add a new todo"
                        onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                            if (event.key === "Enter") {
                                handleAddToDo(event.currentTarget.value);
                                event.currentTarget.value = "";
                            }
                        }}
                    />
                </div>
            )
}
