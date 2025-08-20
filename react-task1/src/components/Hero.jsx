export const Hero = (props) => {
  return (
    <div>
      <div className="text-5xl font-semibold mb-5">{props.title}</div>
      <div>{props.subtitle}</div>
    </div>
  );
};
