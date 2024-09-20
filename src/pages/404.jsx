const ErrorMessage = () => {
  return (
    <div className="flex justify-center min-h-80 text-gray-700 dark:text-white">
      <div className=" flex flex-col justify-center text-start items-center  gap-10 md:w-3/5 ">
        <div className=" px-2 mx:px-0 ">
          <div className=" font-bold text-3xl ">Uh-Oh..</div>
          <div className=" md:text-lg font-medium">
            Something went wrong. If the issue is with a broken URL, try
            navigating using the navbar. If any links still aren't working,
            please reach out to me.
          </div>
        </div>
        <div className=" flex flex-col items-center gap-1.5">
          <div className=" font-bold md:text-8xl text-7xl">
            <span className=" text-theme-blue">404</span> Error
          </div>
          <div className=" text-xl mt-3 font-sans font-semibold hidden md:block">
            Apparently, the page does not exist, or you could say I never
            created it.
          </div>
          <div className="md:hidden font-sans font-semibold text-xl">
            The page does not exist.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
