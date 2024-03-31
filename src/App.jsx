import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/navbar/navbar";
import "./App.css";

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

  const smoothScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar activeSection={activeSection} smoothScrollToSection={smoothScrollToSection} />
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </Router>
  );
}

export default App;
