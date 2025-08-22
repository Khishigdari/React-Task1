import { Button, List } from "@/components";

const ToDo = () => {
  const task = {
    taskName: "Meeting 1",
    isCompleted: true,
  };
  return (
    <div className="w-full h-screen bg-gray-100 pt-[60px] flex justify-center box-border">
      <div className="w-[377px] h-fit bg-white rounded-[16px] drop-shadow-[0_0_12px_rgba(0,0,0,0.16)] py-6 px-2 box-border inter">
        <h3 className="text-[20px] font-semibold flex justify-center mb-5 ">
          To-Do list
        </h3>
        <div className="flex gap-[6px]">
          <input
            className="w-70 h-10 border-[1px] rounded-[6px] py-2 px-4 border-[#E4E4E7] ml-4 "
            placeholder="Add a new task..."
          ></input>
          <button className="bg-[#3C82F6] py-2 px-4 rounded-[6px] text-white mr-4 cursor-pointer">
            Add
          </button>
        </div>
        <div className="mt-[19px] ">
          {/* <Button>
            {["All", "Active", "Completed"].map((el, index) => {
              return all, active, completed;
            })}
          </Button> */}

          <Button all="All" active="Active" completed="Completed"></Button>
        </div>
        {/* <p className="mt-[32px] text-[14px] text-[#6B7280] flex justify-center">
          No tasks yet. Add one above!
        </p> */}
        <div>
          <List taskName={task.taskName} isCompleted={task.isCompleted}></List>
        </div>

        <div className="mt-5 mb-4 w-[333px] h-[1px] mx-4 border[1px] bg-[#E4E4E7]"></div>
        <div className="flex justify-between mr-4 items-center">
          <div className="text-[#6B7280] text-[14px] mx-4">
            1 of 2 tasks completed
          </div>
          <button className="text-[#EF4444] text-[14px] cursor-pointer">
            Clear completed
          </button>
        </div>

        <span className="flex gap-1 text-3 text-[#6B7280] mt-10 mb-[24px] justify-center">
          Powered by{" "}
          <a href="#Pinecone" className="text-[#3B73ED]">
            Pinecone academy
          </a>
        </span>
      </div>
    </div>
  );
};

export default ToDo;
