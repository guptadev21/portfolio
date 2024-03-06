// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // Import the CSS file
import './components/navbar/navbar'
import NavBar from './components/navbar/navbar';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<AboutMe />} />
    //       <Route path="/experience" element={<Experience />} />
    //       <Route path="/projects" element={<Projects />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    // </Router>
    <div className="App">
      <NavBar />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
