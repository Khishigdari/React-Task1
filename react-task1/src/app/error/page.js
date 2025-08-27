"use client";
import { Button } from "@/components";
import React, { useState } from "react";

const Home = () => {
  const currentIndex = 0;
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFIlterStatus] = useState("all");

  //   const [isChecked, setIsChecked] = useState(false);

  //   const isCompleted = false;
  //   const [checkBox, setCheckBox] = useState(false); // ===========

  const handleFilterStatus = (status) => {
    setFIlterStatus(status);
  };

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { title: inputValue, isCompleted: false, id: uuidv4() },
    ]); // object array bolgoh heregtei uchraas {} dotor bichsen
    setInputValue("");
  };

  const handleOnChangeCheckbox = (event, index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) todo.isDone = event.target.checked;
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((el, i) => index !== i);
    setTodos(newTodos);
  };

  const handleClearAll = () => {
    // inputValue = "";
    // setInputValue("");
    setTodos;
    console.log("clicked");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "all") return true;
    if (filterStatus === "active") return !todo.isDone;
    return todo.isDone;
  });

  // const handleCheckboxChange = (event) => {
  //   setIsChecked(event.target.checked);
  // };

  //   const handleOnClick = () => {
  //     setNoList(!noList);
  //   };

  //   const handleChange = () => {
  //   setTodos(!isCompleted);
  //     setTodos([{ isCompleted: true }]);
  //   }; // ===========
  console.log("TODOS", todos);
  return (
    <div className="w-full h-screen bg-gray-100 pt-[60px] flex justify-center box-border">
      <div className="w-[377px] h-fit bg-white rounded-[16px] drop-shadow-[0_0_12px_rgba(0,0,0,0.16)] py-6 px-2 box-border inter">
        <h3 className="text-[20px] font-semibold flex justify-center mb-5 ">
          To-Do list
        </h3>

        <div className="flex gap-[6px] flex-col px-2">
          <div className="flex gap-[6px] ">
            <input
              value={inputValue}
              onChange={handleOnChange}
              type="text"
              className="w-70 h-10 border-[1px] rounded-[6px] py-2 px-4 border-[#E4E4E7] ml-4 "
              placeholder="Add a new task..."
            ></input>
            <button
              onClick={handleAddTodo}
              className="bg-[#3C82F6] py-2 px-4 rounded-[6px] text-white mr-4 cursor-pointer"
            >
              Add
            </button>
          </div>
          <div className="mt-[19px] ">
            {/* <Button all="All" active="Active" completed="Completed"></Button> */}
            <div className="flex gap-[6px]">
              <button
                onClick={() => handleFilterStatus("all")}
                className={
                  "py-1 px-3 bg-[#F3F4F6]  rounded-[6px] ml-4 text-[#363636]" +
                  `${
                    filterStatus === "all"
                      ? "!!bg-[#3C82F6] !text-white !cursor-pointer"
                      : ""
                  }`
                }
              >
                {props.all}
              </button>
              <button
                onClick={() => handleFilterStatus("all")}
                className={
                  "py-1 px-3 bg-[#F3F4F6]  rounded-[6px] ml-4 text-[#363636] " +
                  `${
                    filterStatus === "all"
                      ? "!!bg-[#3C82F6] !text-white !cursor-pointer"
                      : ""
                  }`
                }
              >
                {props.active}
              </button>
              <button
                onClick={() => handleFilterStatus("all")}
                className={
                  "py-1 px-3 bg-[#F3F4F6]  rounded-[6px] ml-4 text-[#363636] " +
                  `${
                    filterStatus === "all"
                      ? "!bg-[#3C82F6] !text-white !cursor-pointer"
                      : ""
                  }`
                }
              >
                {props.completed}
              </button>
            </div>
          </div>

          {filteredTodos.map((todo, index) => (
            <div
              key={todo.id}
              className="bg-[#F9FAFB] rounded-md p-4 w-[333px] h-[62px] mt-5 mx-4 box-border flex items-center relative"
            >
              <div className="flex gap-[10px] items-center text-[14px]">
                {/* {chechBox= checked ? (
                  <input type="checkbox" className="w-5 h-5 line-through" />
                ) : (
                  <input type="checkbox" className="w-5 h-5" />
                )} */}
                {/* <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 line-through"
                /> */}
                <input
                  onChange={(event) => handleOnChangeCheckbox(event, index)}
                  //   onChange={handleChange} // <========== onchange hiine
                  //   checked={todo.isCompleted}
                  type="checkbox"
                  className="w-5 h-5"
                  defaultChecked={todo.isDone}
                />
                {/* <input type="checkbox" onClick={handleCheckbox}></input> */}
                {todo.title}{" "}
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className="bg-[#FEF2F2] py-[6px] px-3 rounded-[6px] text-[#EF4444] text-[14px] mr-4 absolute right-1 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {todos.length == 0 ? (
            <p className="mt-[32px] text-[14px] text-[#6B7280] flex justify-center">
              No tasks yet. Add one above!
            </p>
          ) : (
            <>
              <div className="mt-5 mb-4 w-[333px] h-[1px] mx-4 border[1px] bg-[#E4E4E7]"></div>
              <div className="flex justify-between mr-4 items-center">
                <div className="text-[#6B7280] text-[14px] mx-4">
                  {currentIndex} of {todos.length} tasks completed
                  {/* 1 of 2 tasks
                  completed */}
                </div>
                <button
                  onClick={handleClearAll}
                  className="text-[#EF4444] text-[14px] cursor-pointer"
                >
                  Clear completed
                </button>
              </div>
            </>
          )}

          <span className="flex gap-1 text-3 text-[#6B7280] mt-10 mb-[24px] justify-center">
            Powered by{" "}
            <a href="#Pinecone" className="text-[#3B73ED]">
              Pinecone academy
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
