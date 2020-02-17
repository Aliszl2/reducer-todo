import React, { useReducer } from "react";
import { initialState } from "../reducers/reducer";
import Todo from "../components/Todo";
const TodoList = () => {

  return (
    <div>
      {initialState.todoList.map(todo => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
                    />
        );
      })}
    </div>
  );
};
export default TodoList;
