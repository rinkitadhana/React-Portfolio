import Home from "./pages/home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Project from "./pages/project";
import Blog from "./pages/blog";
import { FaMoon, FaSun } from "react-icons/fa";
import Navbar from "./Component/navbar";
import Footer from "./Component/footer";
import { useState } from "react";
import ErrorMessage from "./inbuild/404";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className=" dark:bg-black min-h-screen">
          <BrowserRouter>
            <div className="flex gap-4 justify-end items-center pt-5 mx-8 text-gray-700 dark:text-white">
              <span className="underline font-serif cursor-pointer text-pink-500 border-theme-blue hover:text-gray-700 dark:hover:text-white">
                <Link to="mailto:therinkit@gmail.com">Hire Me</Link>
              </span>
              <button
                className=" top-3 text-xl cursor-pointer text-gray-600 dark:text-white hover:text-theme-blue "
                onClick={toggleDarkMode}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>

            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<ErrorMessage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
