import React from "react";
import Todo from "../components/Todo";
const TodoList = ({ state, dispatch }) => {
  return (
    <div>
      {state.todoList.map(todo => {
        return (
          <Todo
           key={todo.id}
            todo={todo} 
            state={state} 
            dispatch={dispatch} />
        );
      })}
    </div>
  );
};
export default TodoList;
