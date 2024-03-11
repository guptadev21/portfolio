import React from 'react';
import './style.css';

function Contact() {
  return (
    <div className='container'>
      <h2 className='heading'>Contact</h2>
      <div className='contact-card'>
        {/* <h3>Contact Information</h3> */}
        <p>Email: guptadev.2102@gmail.com</p>
        <p>Phone: +919870938209</p>
        <p>Github: <a href="https://github.com/guptadev21">guptadev21</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yourusername">yourusername</a></p>
      </div>
    </div>
  );
}

export default Contact;
