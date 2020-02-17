import React, { useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";
import Todo from "../components/Todo";
const TodoList = ({state}) => {
  

  return (
    <div>
      {state.todoList.map(todo => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
export default TodoList;
