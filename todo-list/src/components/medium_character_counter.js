"use client";
import React, { useState } from "react";

function CharacterCounter() {
  const [count, setCount] = useState("");
  function handleOnChange(event) {
    setCount(event.target.value);
  }

  return (
    <div className="p-2 w-50 rounded-md bg-indigo-200">
      <textarea
        value={count}
        onChange={handleOnChange}
        placeholder="Type here..."
      />
      <p>Character Count: {count.length}</p>
    </div>
  );
}

export default CharacterCounter;
