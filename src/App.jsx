import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import NavBar from "./components/navbar/navbar";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let maxVisibleRatio = 0;
      let visibleSection = "";

      sections.forEach((section) => {
        const bounding = section.getBoundingClientRect();
        const visibleRatio = (bounding.bottom - bounding.top) / window.innerHeight;

        if (visibleRatio > maxVisibleRatio) {
          maxVisibleRatio = visibleRatio;
          visibleSection = section.id;
        }
      });

      setActiveSection(visibleSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const HomePage = () => (
    <>
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </>
  );

  return (
    <Router>
      <div className="App">
        <NavBar activeSection={activeSection} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// // App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AboutMe from "./components/AboutMe";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import "./App.css"; // Import the CSS file
// import "./components/navbar/navbar";
// import NavBar from "./components/navbar/navbar";

// function App() {
//   const HomePage = () => (
//     <>
//       <AboutMe />
//       <Experience />
//       <Projects />
//       <Contact />
//     </>
//   );

//   return (
//     <Router>
//       <div className="App">
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about-me" element={<AboutMe />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
