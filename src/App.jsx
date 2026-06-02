import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./comps/navbar";
import LandingPage from "./pages/LandingPage";
import ProjectsAll from "./pages/ProjectsAll";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects/all" element={<ProjectsAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/*
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./comps/navbar";

import LandingPage from "./pages/LandingPage";
import ProjectsAll from "./pages/ProjectsAll";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects/all" element={<ProjectsAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/






/*import Navbar from "./comps/navbar"
import Home from './sects/home.jsx'
import Projects from './sects/projects.jsx'
import Blog from './sects/blog.jsx'
import Contact from './sects/contact.jsx'
import Tools from './sects/tools'



function App() {
  return (
    <div>
      <Navbar />


      <Home />
      <Tools />
      <Projects />
      <Blog />
      <Contact />
    </div>
  )
}

export default App
*/