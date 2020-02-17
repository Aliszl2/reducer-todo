import React, { useReducer } from "react";

export const initialState = {
  addTodo: {
    item: '', 
   
  },
  todoList: [
    { item: "Paint shed", completed: false, id:1},
    { item: "clean kitchen", completed: false, id:2}
  ]
};

export const INPUT_CHANGE = "INPUT_CHANGE";
export const SUBMIT_TODO = "SUBMIT_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";


export function reducer(state, action) {
  switch (action.type) {
  case INPUT_CHANGE:
 
    const { todoItem, todoValue } = action.payload

    return {
      ...state,
      addTodo: {
        ...state.addTodo,
              [todoItem]:  todoValue,
      }
    }
    default:
      return state
  }
}

