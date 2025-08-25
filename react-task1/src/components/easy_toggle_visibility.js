"use client";
import React, { useState } from "react";

function ToggleVisibility() {
  const [hide, setHide] = useState(true);
  function handleOnClick() {
    // const hide = false;
    // hide ? setHide("") : setHide("Toggle me!");
    // hide = !hide;
    // setHide = hide;
    // if (hide) {
    //   ("");
    // } else {
    //   ("Toggle me!");
    // }
    setHide(!hide);
  }

  return (
    <div className="p-2 w-50 rounded-md bg-indigo-200">
      <button onClick={handleOnClick} className="p-1 bg-gray-50 rounded-md">
        Show/Hide Text
      </button>
      {/* {hide && <p>Toggle me!</p>} */}
      {hide ? <p>Toggle me!</p> : null}
    </div>
  );
}

export default ToggleVisibility;
