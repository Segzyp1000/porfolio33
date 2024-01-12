import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import '../style/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav>
      <h1>
       <span className='web'>Web</span>
  <     span className='dev'>Dev</span>
        </h1>

        <ul className='List'>
          <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
          <li><ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink></li>
          <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
