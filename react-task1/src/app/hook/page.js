"use client";
import { useState } from "react";
const TodoPage = () => {
  const [count, setCount] = useState(0);
  //   const [todos, setTodos] = useState(0);

  //   const array = [
  //     {
  //       title: "cooking",
  //       isCompleted: false,
  //     },
  //     {
  //       title: "cleaning",
  //       isCompleted: true,
  //     },
  //   ];

  //   count.push[1];
  //   setCount[count];

  return (
    <div className="p-5 flex gap-4 items-center">
      {count}
      <button
        className="bg-indigo-200 p-3 rounded-md cursor-pointer hover:shadow-[0_5px_5px_rgba(0,0,0,0.25)] hover:bg-indigo-500 hover:text-white"
        onClick={() => setCount(count + 1)}
      >
        add count
      </button>
    </div>
  );
};
export default TodoPage;
