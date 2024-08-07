import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 md:static">
      <nav className="flex justify-between items-center text-gray-700 py-4 px-8 md:px-40  md:mx-10  bg-white z-50">
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
          className={`absolute xl:hidden top-16 left-0 w-full bg-white flex flex-col items-center border-2 drop-shadow-sm font-semibold text-base transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <Link
            to="/"
            className="list-none w-full text-center p-4 hover:bg-theme-blue hover:text-white transition-all cursor-pointer"
          >
            <li>Home</li>
          </Link>
          <Link
            to="/about"
            className="list-none w-full text-center p-4 hover:bg-theme-blue hover:text-white transition-all cursor-pointer"
          >
            <li>About</li>
          </Link>
          <Link
            to="/project"
            className="list-none w-full text-center p-4 hover:bg-theme-blue hover:text-white transition-all cursor-pointer"
          >
            <li>Projects</li>
          </Link>
          <Link
            to="/blog"
            className="list-none w-full text-center p-4 hover:bg-theme-blue hover:text-white transition-all cursor-pointer"
          >
            <li>Blogs</li>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
