import Home from "./pages/home"
import { Route, Routes } from "react-router-dom"
import About from "./pages/about"
import Project from "./pages/project"
import Blog from "./pages/blog"
import ErrorMessage from "./pages/404"
import Dark from "./tool/dark"
import NavLayout from "./Layouts/NavLayout"
import FirstBlog from "./Blog/TheDailyCrimes"
import { HelmetProvider } from "react-helmet-async"
import OGMeta from "./Component/OGMeta"

function App() {
  return (
    <>
      <HelmetProvider>
        <OGMeta
          title="Rinkit Adhana"
          description="Check out my cool site!"
          imageUrl="public\IMG\OG.png"
        />
        <Dark>
          <Routes>
            <Route path="/" element={<NavLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/blog" element={<Blog />} />
            </Route>
            <Route path="*" element={<ErrorMessage />} />
            <Route path="blog/the-daily-crimes" element={<FirstBlog />} />
          </Routes>
        </Dark>
      </HelmetProvider>
    </>
  )
}

export default App
