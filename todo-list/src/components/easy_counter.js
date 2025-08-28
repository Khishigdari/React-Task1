"use client";
import React, { useState } from "react";

// export const Counter = () => {
function Counter() {
  const [count, setCount] = useState(0);
  function handleOnClick() {
    setCount(count + 1);
  }
  return (
    <div className="p-2 w-50 rounded-md bg-indigo-200">
      <button onClick={handleOnClick} className="p-1 bg-gray-50 rounded-md">
        Increment
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;
