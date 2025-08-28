export const Card = (props) => {
  return (
    <div className="w-[350px] h-[450px] bg-gray-100 rounded-md flex flex-col relative">
      <img src={props.img} className="mt-4 h-[184px]" />
      <div className="p-4">
        <p className="text-gray-500 text-[12px]">{props.p}</p>
        <h3 className="text-[15px] font-semibold my-4">{props.h3}</h3>
        <span className="text-[12px] text-gray-600 leading-none">
          {props.span}
        </span>
        <button className="bg-blue-600 rounded-sm text-white w-[320px] absolute bottom-7 left-[15px] hover:bg-blue-500">
          Read More
        </button>
      </div>
    </div>
  );
};
