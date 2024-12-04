const ErrorMessage = () => {
  return (
    <div className="flex justify-center min-h-80 text-gray-700 dark:text-white mx-2 md:mx-0">
      <div className=" flex flex-col justify-center text-start items-center  gap-4 md:w-3/5 my-6 ">
        <div className=" font-bold md:text-8xl text-7xl">
          <span className=" text-theme-blue">404</span> Error
        </div>
        <div className=" rounded-lg">
          <img src="/IMG/404.gif" className=" rounded-lg" alt="img" />
        </div>
        <div className=" text-lg mt-3 font-sans font-semibold hidden md:block">
          Apparently, the page does not exist, or you could say I never created
          it.
        </div>
        <div className="md:hidden font-sans font-semibold text-xl">
          The page does not exist.
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage
