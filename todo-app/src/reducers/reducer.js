import React, { useReducer } from "react";

export const initialState = {
  addTodo: {
    item: ""
  },
  todoList: [
    { item: "Paint shed", completed: false, id: 1 },
    { item: "clean kitchen", completed: false, id: 2 }
  ]
};

export const INPUT_CHANGE = "INPUT_CHANGE";
export const SUBMIT_TODO = "SUBMIT_TODO";
export const TOGGLE_TODO_COMPLETE = "TOGGLE_TODO_COMPLETE";
export const REMOVE_TODO = "REMOVE_TODO";

export function reducer(state, action) {
  switch (action.type) {
    //handleChange
    case INPUT_CHANGE:
      const { todoItem, todoValue } = action.payload;
      return {
        ...state,
        addTodo: {
          ...state.addTodo,
          [todoItem]: todoValue
        }
      };
    //onSubmit
    case SUBMIT_TODO:
      const newTodo = action.payload;
      return {
        ...state,
        todoList: [...state.todoList, newTodo],
        //clear form
        addTodo: { item: "" }
      };
    case TOGGLE_TODO_COMPLETE:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          const todoId = action.payload;
          if (todo.id === todoId) {
            return { 
              ...todo, completed: !todo.completed 
          }}
          return todo;
        })
      };
    default:
      return state;
  }
}
