import Home from "./pages/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/about"
import Project from "./pages/project"
import Blog from "./pages/blog"
import ErrorMessage from "./pages/404"
import Dark from "./tool/dark"
import NavLayout from "./Layouts/NavLayout"
import FirstBlog from "./Blog/FirstBlog"

function App() {
  return (
    <>
      <Dark>
        <Routes>
          <Route path="/" element={<NavLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
          <Route path="*" element={<ErrorMessage />} />
          <Route path="/blog/first" element={<FirstBlog />} />
        </Routes>
      </Dark>
    </>
  )
}

export default App
