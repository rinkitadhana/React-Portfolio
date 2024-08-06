import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="hidden md:flex gap-4 justify-end items-center mt-5 mx-8 text-gray-700">
        <span className="underline font-serif cursor-pointer border-theme-blue hover:text-theme-blue">
          <Link to="https://x.com/rnkktt" className=" visited:text-pink-500">
            Hire Me
          </Link>
        </span>
        <FaMoon className="text-xl cursor-pointer text-theme-blue " />
      </div>

      <nav className="flex justify-between items-center text-gray-700 py-6 px-8 md:px-32  md:mx-10 md:drop-shadow-none drop-shadow-lg bg-white">
        <Link className=" font-semibold text-lg hover:text-theme-blue " to="/">
          <span className="text-theme-blue">@</span>
          therinkit
        </Link>
        <ul className="hidden xl:flex items-center gap-6 font-semibold text-base">
          <li className="hover:text-theme-blue cursor-pointer">
            <Link to="/">home</Link>
          </li>
          <li className="hover:text-theme-blue cursor-pointer">
            {" "}
            <Link to="/about">about</Link>
          </li>
          <li className="hover:text-theme-blue cursor-pointer">
            {" "}
            <Link to="/project">projects</Link>
          </li>
          <li className="hover:text-theme-blue cursor-pointer">
            {" "}
            <Link to="/blog">blogs</Link>
          </li>
        </ul>

        <IoMenu
          className="xl:hidden block text-4xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div
          className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-2 font-semibold text-base transform transition-transform ${
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

export default Navbar;
