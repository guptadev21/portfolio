import React from 'react';
import './navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className='vertical-writing'>About Me</li>
        <li className='vertical-writing'>B</li>
        <li className='vertical-writing'>C</li>
        <li className='vertical-writing'>D</li>
        <li className='vertical-writing'>E</li>
        {/* Add more alphabets as needed */}
      </ul>
    </div>
  );
};

export default Navbar;
