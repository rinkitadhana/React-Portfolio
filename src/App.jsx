import Home from "./pages/home";
import Navbar from "./Component/navbar";
import Navbar1 from "./Component/navbar1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Project from "./pages/project";
import Blog from "./pages/blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        <Navbar />
        <Home />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
