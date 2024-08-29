const HighlightText = (props) => {
  return (
    <div className=" border-b-2 dark:border-white/30 ">
      <div className=" py-4 text-center  md:text-start">{props.text}</div>
    </div>
  );
};

export default HighlightText;
