const ErrorMessage = () => {
  return (
    <div className="flex justify-center min-h-80 text-gray-700 dark:text-white">
      <div className=" flex flex-col justify-center items-center  gap-10 md:w-3/5 ">
        <div className="hidden md:block">
          <div className=" font-bold text-3xl ">Uh-Oh..</div>
          <div className=" text-lg font-medium">
            Looks like someone is trying to be smart... Use the damn navbar. I
            spent an hour making it.
          </div>
        </div>
        <div className=" flex flex-col items-center  gap-1.5">
          <div className=" font-bold text-5xl ">
            <span className=" text-theme-blue">404</span> Error
          </div>
          <div className=" text-lg font-serif hidden md:block">
            Apparently, the page does not exist, or you could say I never
            created it.
          </div>
          <div className="md:hidden font-serif">The page does not exist</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
