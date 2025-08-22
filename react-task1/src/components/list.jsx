export const List = (props) => {
  return (
    <div className="bg-[#F9FAFB] rounded-md p-4 w-[333px] h-[62px] mt-5 mx-4 box-border flex items-center relative">
      <div className="flex gap-[10px] items-center text-[14px]">
        <input type="checkbox" className="w-5 h-5" />
        <p className={props.isCompleted ? "line-through" : ""}>
          {props.taskName}
        </p>
        {props.isCompleted && (
          <button className="bg-[#FEF2F2] py-[6px] px-3 rounded-[6px] text-[#EF4444] text-[14px] mr-4 absolute right-1 cursor-pointer">
            Delete
          </button>
        )}
      </div>
    </div>

    // {/* <div className="bg-[#F9FAFB] rounded-md p-4 w-[333px] h-[62px] mt-5 mx-4 box-border flex items-center ">
    //   <div className="flex justify-between text-[14px]">
    //     <div className="flex gap-[10px] items-center">
    //       <input type="checkbox" className="w-5 h-5 checked:bg-[#0275FF]" />if
    //       <p>Create PR 2</p>
    //     </div>

    //     <button className="bg-[#FEF2F2] py-[6px] px-3 rounded-[6px] text-[#EF4444] text-[14px] mr-4">
    //       Delete
    //     </button>
    //   </div>
    // </div> */}
  );
};
