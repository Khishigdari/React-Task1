export const Header = (props) => {
  return (
    <div>
      <div className="text-2xl font-semibold">{props.logo}</div>

      <div className="font-medium">{props.menu}</div>
    </div>
  );
};
