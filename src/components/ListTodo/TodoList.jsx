import React from "react";

import { useState } from "react";

import { addTodo } from "../../features/todoReducer";

import { useDispatch } from "react-redux";

const TodoList = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    if (text) {
      dispatch(
        addTodo({
          text: text,
          completed: false,
        })
      );
    }
    setText('')
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Нужен текст"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>добавить</button>
    </form>
  );
};

export default TodoList;
