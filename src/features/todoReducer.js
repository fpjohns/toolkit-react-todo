import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    {
      text: "JavaScript",
      completed: false,
    },
    {
      text: "php",
      completed: true,
    },
    {
      text: "c++",
      completed: false,
    },
  ],
};

export const addTodo = createAction("addTodo");
export const removeTodo = createAction("removeTodo");
export const statusTodo = createAction("statusTodo");

export const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.todo.push(action.payload);
  });
  builder.addCase(removeTodo, (state, action) => {
    state.todo = state.todo.filter((item, index) => index !== action.payload);
  });
  builder.addCase(statusTodo, (state, action) => {
    state.todo = state.todo.map((item, index) => {
      if (index === action.payload) {
        item.completed = !item.completed;
      }
      return item;
    });
  });
});
