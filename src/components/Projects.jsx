// components/Projects.js
import React from 'react';
import './style.css';

function Projects() {
  return (
    <div className='container'>
      <h2 className='heading'>Projects</h2>

      <div className="project">
        <h3>ToDo-WebApp</h3>
        <p>Championed the development of a task management web application using Next.js, Prisma, and PostgreSQL, resulting in a 25% increase in user productivity.</p>
        <p>Tech Stack: Node.js, Prisma, PostgreSQL</p>
        <a href="https://github.com/guptadev21/todo-webapp" className="github-link">GitHub Link</a>
      </div>

      <div className="project">
        <h3>LetSampark</h3>
        <p>Initiated LetSampark, a digital marketing website aiding local businesses during the COVID-19 pandemic, resulting in a 50% increase in online visibility for partner businesses.</p>
        <p>Tech Stack: Digital Marketing, SEO, HTML</p>
        <a href="https://github.com/guptadev21/letsampark" className="github-link">GitHub Link</a>
      </div>
    </div>
  );
}

export default Projects;
