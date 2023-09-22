import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todoList: [
            {
                id: 1,
                name: "Node Js",
                isCompleted: false,
            },
        ]
    },
    reducers: {
        setTodoList(state, action) {
            state.todoList = action.payload;
        },
        addNewTodo(state, action) {
            state.todoList = [...state.todoList, action.payload];
        }
    }
});

export const { setTodoList, addNewTodo } = todoSlice.actions;