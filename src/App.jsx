import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { motion } from "framer-motion";
import Contact from "./components/Contact";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  

  if (showIntro) {
    return (
      <motion.div
        className="h-screen m-20 flex font-black items-center justify-center text-4xl text-darkPink font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        &lt;hello welcome to my portfolio/&gt;
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen transition-colors">
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
