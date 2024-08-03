const Navbar = () => {
  return (
    <div className=" p-4 m-8 border border-gray-200 shadow-lg md:static top-0 bg-white z-50 md:border-0 ">
      <nav className="flex justify-between items-center md:w-[90%]">
        <div>
          <h1 className=" font-bold text-2xl text-[#2978b5]">
            <a href="#">RA.</a>
          </h1>
        </div>
        <div>
          <ul className=" flex flex-row  items-center md:gap-7 gap-2 font-semibold">
            <li className=" px-1 rounded-md hover:cursor-pointer hover:text-[#2978b5]">
              <a href="#project">Project</a>
            </li>
            <li className=" px-1 rounded-md hover:cursor-pointer hover:text-[#2978b5]">
              <a href="#skill">Skills</a>
            </li>
            <li className=" px-1 rounded-md hover:cursor-pointer hover:text-[#2978b5]">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
