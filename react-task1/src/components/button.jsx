export const Button = (props) => {
  return (
    <div>
      <div className="flex gap-[6px]">
        <button className="py-1 px-3 bg-[#F3F4F6] hover:bg-[#3C82F6] rounded-[6px] text-[#363636] hover:text-white ml-4">
          {props.all}
        </button>
        <button className="py-1 px-3 bg-[#F3F4F6] hover:bg-[#3C82F6] rounded-[6px] text-[#363636] hover:text-white">
          {props.active}
        </button>
        <button className="py-1 px-3 bg-[#F3F4F6] hover:bg-[#3C82F6] rounded-[6px] text-[#363636] hover:text-white">
          {props.completed}
        </button>
      </div>
    </div>
  );
};
