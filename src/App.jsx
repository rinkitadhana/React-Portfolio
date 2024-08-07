import Home from "./pages/home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Project from "./pages/project";
import Blog from "./pages/blog";
import { FaMoon, FaSun } from "react-icons/fa";
import Navbar from "./Component/navbar";
import Footer from "./Component/footer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className=" dark:bg-slate-800">
          <BrowserRouter>
            <div className="flex gap-4 justify-end items-center pt-5 mx-8 text-gray-700 dark:text-white">
              <span className="underline font-serif cursor-pointer border-theme-blue hover:text-theme-blue">
                <Link
                  to="https://x.com/rnkktt"
                  className=" visited:text-pink-500"
                >
                  Hire Me
                </Link>
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
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
