// AboutMe.js
import React from 'react';
import './style.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import icon definitions

function AboutMe() {
  return (
    <div className="container">
      <h2 className="heading">Dev Gupta</h2>
      <h3 className="subheading">Cybersecurity Specialist | DevOps Enthusiast | Full-Stack Developer</h3>
      <div className="content">
        <p>Hello! I'm Dev Gupta, a passionate professional with a diverse skill set. Here's a glimpse into my journey:</p>

        <h4>Background:</h4>
        <ul>
          <li>🌐 Specialized in <strong>Cybersecurity</strong>, safeguarding digital landscapes from threats.</li>
          <li>🚀 Currently exploring the exciting world of <strong>DevOps</strong>, automating and optimizing workflows.</li>
          <li>💻 Proficient in <strong>Backend Development</strong>, building robust server-side applications.</li>
          <li>🎨 With a touch of expertise in <strong>Frontend Development</strong>, creating seamless user experiences.</li>
        </ul>

        <h4>Why Me?</h4>
        <ul>
          <li>🧠 <strong>Analytical Mindset</strong>: I love dissecting complex problems and finding elegant solutions.</li>
          <li>🛠️ <strong>Toolbox</strong>: My toolkit includes Python, Java, Docker, and more.</li>
          <li>🌟 <strong>Passion</strong>: I thrive on continuous learning and pushing boundaries.</li>
        </ul>

        <p>Let's connect! Feel free to explore my portfolio and reach out. 📩</p>

        {/* Icons with Links */}
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
