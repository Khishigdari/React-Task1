"use client";
import React, { useState } from "react";

function InputField() {
  const [input, setInput] = useState("");

  function handleOnChange(event) {
    setInput(event.target.value);
  }
  return (
    <div className="p-2 w-50 rounded-md bg-indigo-200">
      <input
        type="text"
        value={input}
        onChange={handleOnChange}
        placeholder="Type here..."
      />
      <p>Input text: {input}</p>
    </div>
  );
}

export default InputField;
