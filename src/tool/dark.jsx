import { Link } from "react-router-dom"
import { useState } from "react"
import LiveClockUpdate from "./Clock"

const Dark = ({ children }) => {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
  const [darkMode, setDarkMode] = useState(systemPrefersDark)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className=" dark:bg-black min-h-screen">
        <div className="flex gap-4 justify-between items-center pt-5 px-4 md:px-8 text-gray-700 dark:text-white mb-4">
          <div className=" flex flex-row items-center gap-2 text-base font-sans text-gray-500 font-medium  dark:text-gray-400">
            <span className="">Local time</span>
            <div className="text-sm ">
              <LiveClockUpdate />
            </div>
          </div>
          <div className=" flex flex-row gap-3">
            <span className="animate-pulse underline font-serif cursor-pointer text-pink-500 border-theme-blue hover:text-gray-700 dark:hover:text-white">
              <Link to="mailto:therinkit@gmail.com">Hire Me</Link>
            </span>
            <button
              className=" top-3 text-xl cursor-pointer text-gray-600 dark:text-white hover:text-theme-blue "
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <img src="./icon/sun.png" className="size-6" />
              ) : (
                <img src="./icon/full-moon.png" className="size-6" />
              )}
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Dark
