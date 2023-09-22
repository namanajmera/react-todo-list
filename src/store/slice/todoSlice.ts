import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "../../Model/modal";

const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodoList(state, action) {
      state.todoList = action.payload;
    },
    addNewTodo(state, action) {
      state.todoList = [...state.todoList, action.payload];
    },
  },
});

export const { setTodoList, addNewTodo } = todoSlice.actions;
