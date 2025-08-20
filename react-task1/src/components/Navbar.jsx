export const Navbar = (props) => {
  return (
    <div className="flex justify-between items-center p-10 w-full h-[50px] ">
      <h5 className="font-semibold text-2xl">Simple Blog</h5>
      <div className="flex gap-4">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact</a>
      </div>
    </div>
  );
};
