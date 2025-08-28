"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFIlterStatus] = useState("all");

  const handleFilterStatus = (status) => {
    setFIlterStatus(status);
  };

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, { title: inputValue, isDone: false, id: uuidv4() }]); // object array bolgoh heregtei uchraas {} dotor bichsen
    setInputValue("");
  };

  const handleOnChangeCheckbox = (event, id) => {
    //id aar baridag bolson uchraas index bish id hereglene
    const newTodos = todos.map((todo) => {
      if (id === todo.id) todo.isDone = event.target.checked;
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((el, i) => index !== i);
    setTodos(newTodos);
  };

  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo, i) => {
      return !todo.isDone;
    });
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "all") return true;
    if (filterStatus === "active") return !todo.isDone;
    return todo.isDone;
  });

  const isButtonDisabled = inputValue === ""; // <========== disable button

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
              disabled={isButtonDisabled} // <========== disable button
              onClick={handleAddTodo}
              className="bg-[#3C82F6] py-2 px-4 rounded-[6px] text-white mr-4 cursor-pointer"
            >
              Add
            </button>
          </div>
          <div className="mt-[19px] ">
            <div className="flex gap-[6px]">
              <button
                onClick={() => handleFilterStatus("all")}
                className={
                  "py-1 px-3 ml-4 bg-[#F3F4F6]  rounded-[6px]  text-[#363636] " +
                  `${
                    filterStatus === "all"
                      ? "!bg-[#3C82F6] !text-white !cursor-pointer"
                      : ""
                  }`
                }
              >
                All
              </button>
              <button
                onClick={() => handleFilterStatus("active")}
                className={
                  "py-1 px-3 bg-[#F3F4F6]  rounded-[6px]  text-[#363636] " +
                  `${
                    filterStatus === "active"
                      ? "!bg-[#3C82F6] !text-white !cursor-pointer"
                      : ""
                  }`
                }
              >
                Active
              </button>
              <button
                onClick={() => handleFilterStatus("completed")}
                className={
                  "py-1 px-3 bg-[#F3F4F6]  rounded-[6px]  text-[#363636] " +
                  `${
                    filterStatus === "completed"
                      ? "!bg-[#3C82F6] !text-white !cursor-pointer"
                      : ""
                  }`
                }
              >
                Completed
              </button>
            </div>
          </div>

          {filteredTodos.map((todo, index) => (
            <div
              key={todo.id}
              className="bg-[#F9FAFB] rounded-md p-4 w-[333px] h-[62px] mt-5 mx-4 box-border flex items-center relative"
            >
              <div className="flex gap-[10px] items-center text-[14px]">
                <input
                  onChange={(event) => handleOnChangeCheckbox(event, todo.id)}
                  type="checkbox"
                  className="w-5 h-5"
                  defaultChecked={todo.isDone}
                />
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
                  {todos.filter((todo) => todo.isDone === true).length} of{" "}
                  {todos.length} tasks completed
                </div>
                <button
                  onClick={handleClearCompleted}
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
