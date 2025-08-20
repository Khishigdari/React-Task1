import { Button } from "@/components";

const ToDo = () => {
  return (
    <div className="w-full h-screen bg-gray-100 pt-[60px] flex justify-center box-border">
      <div className="w-[377px] h-[290px] bg-white rounded-[16px] drop-shadow-[0_0_12px_rgba(0,0,0,0.16)] py-4 px-2 box-border">
        <h3 className="text-[20px] font-semibold flex justify-center mb-5">
          To-Do list
        </h3>
        <div className="flex gap-[6px]">
          <input
            className="w-70 h-10 border-[1px] rounded-[6px] py-2 px-4 border-[#E4E4E7] ml-4 "
            placeholder="Add a new task..."
          ></input>
          <button className="bg-[#3C82F6] py-2 px-4 rounded-[6px] text-white mr-4">
            Add
          </button>
        </div>
        <div className="mt-[19px] ">
          <Button all="All" active="Active" completed="Completed"></Button>
        </div>
        <p className="mt-[32px] text-[14px] text-[#6B7280] flex justify-center">
          No tasks yet. Add one above!
        </p>
        <span className="flex gap-1 text-3 text-[#6B7280] mt-10 mb-[24px] justify-center">
          Powered by <span className="text-[#3B73ED]">Pinecone academy</span>
        </span>
      </div>
    </div>
  );
};

export default ToDo;
