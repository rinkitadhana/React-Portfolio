const Title = ({ title, icon }) => {
  return (
    <div className=" font-bricolage flex items-center gap-1 text-2xl font-semibold">
      {title}
      {icon}.
    </div>
  );
};

export default Title;
