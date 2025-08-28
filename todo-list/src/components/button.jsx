export const Button = (props) => {
  return (
    <div>
      <div className="flex gap-[6px]">
        <button className="py-1 px-3 bg-[#F3F4F6] hover:bg-[#3C82F6] rounded-[6px] text-[#363636] hover:text-white ml-4 cursor-pointer">
          {props.all}
        </button>
        <button className="py-1 px-3 bg-[#F3F4F6] hover:bg-[#3C82F6] rounded-[6px] text-[#363636] hover:text-white cursor-pointer">
          {props.active}
        </button>
        <button className="py-1 px-3 bg-[#F3F4F6] hover:bg-[#3C82F6] rounded-[6px] text-[#363636] hover:text-white cursor-pointer">
          {props.completed}
        </button>
      </div>
    </div>
  );
};
{
  /* <div className="flex gap-[6px]">
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
      </div> */
}
