"use client";
import { useState } from "react";
const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    // const newTodos = [...todos, "new value"];
    // setTodos(newTodos);
    setTodos([...todos, { title: inputValue, isDone: false }]);
    setInputValue("");
  };

  //   console.log(todos, "todos");

  return (
    <div className="p-5 flex gap-4 items-center flex-col">
      <div className="flex gap-4">
        <input
          className="w-70 h-10 border-[1px] rounded-[6px] py-2 px-4 border-[#E4E4E7] ml-4 "
          value={inputValue}
          type="text"
          placeholder="Add a new task..."
          onChange={handleOnChange}
        />

        <button
          onClick={handleOnClick}
          className="bg-indigo-200 py-2 px-5 rounded-md cursor-pointer hover:shadow-[0_5px_5px_rgba(0,0,0,0.25)] hover:bg-indigo-500 hover:text-white"
        >
          add
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {todos.map((todo, index) => {
          return (
            <div
              className="flex gap-3 items-center"
              key={index + Math.random()}
            >
              <input
                type="checkbox"
                defaultChecked={todo.isDone}
                className="w-5 h-5 "
              ></input>
              <div className="text-[24px]">{todo.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TodoPage;
