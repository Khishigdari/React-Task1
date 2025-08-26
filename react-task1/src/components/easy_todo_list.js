"use client";
import React, { useState } from "react";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    // if (inputValue === 0) {
    //   return {
    //     ...todos,
    //   };
    // }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((el, i) => index !== i);
    setTodos(newTodos);
  };
  const handleCheckbox = () => {};

  return (
    <div className="p-2 w-50 rounded-md bg-indigo-200">
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="Type new list..."
      />
      <button onClick={handleAddTodo} className="p-1 bg-gray-50 rounded-md">
        Add Todo
      </button>
      {/* <ul></ul> */}
      {todos.map((todo, index) => (
        <div key={index}>
          <input type="checkbox" onClick={handleCheckbox}></input>
          {todo} <button onClick={() => handleDeleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
