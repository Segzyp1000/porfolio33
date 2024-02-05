// Project.js

import React from 'react';
import '../style/Project.css';

const Project = () => {
  return (
    <div className='project'>
      <div className='task'>
        <div className='pro'>
          <h2>Projects</h2>
        </div>
        <div className='plot'>
          <div className='assignments'>
            <a href="https://segzyp1000.github.io/loansite/" target="_blank" rel="noopener noreferrer">
              <img src='Project1.png' className= 'imgg' alt=""/>
            </a>
            <p className='paragraph'>HTML, CSS, JavaScript, Bootstrap, React</p>
          </div>
          <div className='assignments'>
            <a href="https://segzyp1000.github.io/hngtask2/" target="_blank" rel="noopener noreferrer">
              <img src='Project2.png' className= 'imgg' alt=""/>
            </a>
            <p className='paragraph'>HTML, CSS, JavaScript React</p>
          </div>
          <div className='assignments'>
            <a href="https://segzyp1000.github.io/statipage/" target="_blank" rel="noopener noreferrer">
              <img src='Project3.png' className= 'imgg' alt="" />
            </a>
            <p className='paragraph'>HTML, CSS </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
