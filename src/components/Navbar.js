import React from 'react'
import '../style/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav>
      <h1>
       <span className='web'>Segun</span>
        </h1>
        <ul className='List'>
        <li><a href="https://twitter.com/segzyp1000" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/in/segun-olowoyeye-04909b76/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
        <li><a href='https://wa.link/sntbnx'><i className="fab fa-whatsapp" target="_blank" rel="noopener noreferrer"></i></a></li>
        <li><a href='https://github.com/Segzyp1000' target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
