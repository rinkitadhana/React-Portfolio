import Home from "./pages/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/about"
import Project from "./pages/project"
import Blog from "./pages/blog"
import Navbar from "./Layouts/Navbar"
import ErrorMessage from "./pages/404"
import Dark from "./tool/dark"

function App() {
  return (
    <>
      <BrowserRouter>
        <Dark>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<ErrorMessage />} />
          </Routes>
        </Dark>
      </BrowserRouter>
    </>
  )
}

export default App
