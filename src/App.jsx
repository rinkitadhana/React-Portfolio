import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Project from "./pages/project";
import Blog from "./pages/blog";
import Navbar from "./Component/navbar";
import Footer from "./Component/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
