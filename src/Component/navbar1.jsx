import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <Link className=" font-semibold text-xl md:text-base " to="/home">
          <span className="text-theme-blue">@</span>therinkit
        </Link>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="hover:text-theme-blue cursor-pointer">Home</li>
          <li className="hover:text-theme-blue cursor-pointer">About</li>
          <li className="hover:text-theme-blue cursor-pointer">Projects</li>
          <li className="hover:text-theme-blue cursor-pointer">Blogs</li>
        </ul>
        <div className="flex gap-5 items-center">
          <span className=" hidden md:block underline font-serif cursor-pointer border-theme-blue hover:text-theme-blue">
            Hire Me
          </span>
          <FaMoon className="text-xl cursor-pointer " />
        </div>
        <IoMenu
          className="xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div
          className={`absolute xl:hidden top-28 left-0 w-full bg-white flex flex-col items-center gap-2 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li className="list-none w-full text-center p-4 hover:bg-theme-blue hover:text-white transition-all cursor-pointer">
            Home
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-theme-blue hover:text-white transition-all cursor-pointer">
            About
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-theme-blue hover:text-white transition-all cursor-pointer">
            Projects
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-theme-blue hover:text-white transition-all cursor-pointer">
            Blogs
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;
