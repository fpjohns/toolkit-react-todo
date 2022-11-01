import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, statusTodo } from "../../features/todoReducer";
// import { checkedTodo, removeTodo } from "./features/todoReducer";
const AddTodo = () => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleCheckbox = (id) => {
    dispatch(statusTodo(id));
  };

  const todos = useSelector((state) => state.todo);
  return (
    <main>
      {todos.map((item, index) => {
        return (
          <div
            key={index}
            style={
              item.completed
                ? { backgroundColor: "grey" }
                : { backgroundColor: "white" }
            }
          >
            <input
              type="checkbox"
              onChange={() => handleCheckbox(index)}
              checked={item.completed}
            />
            <span>{item.text}</span>
            <button onClick={() => handleRemove(index)}>X</button>
          </div>
        );
      })}
    </main>
  );
};

export default AddTodo;
