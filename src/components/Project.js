import React from 'react'
import Project1 from '../myimage/Project1.png';
import Project2 from '../myimage/Project2.png';
import Project3 from '../myimage/Project3.png';
import '../style/Project.css';

const Project = () => {
  return (
    <div className='project' id="projects">
    <div>
      <header className='pro'>Projects</header>
    </div>
     <div className='task'>
     <div className='assignments1'>
     <a href="https://segzyp1000.github.io/loansite/">
      <img src={Project1} alt="Loansite replica"></img>
    </a>
    <p className='paragraph'>HTML, CSS, JavaScript, Bootstrap, React</p>
     </div>
     <div className='assignments2'>
     <a href="https://segzyp1000.github.io/hngtask2/">
      <img src={Project2} alt=""></img>
    </a>
    <p className='paragraph'>HTML, CSS, JavaScript React</p>
     </div>
     <div className='assignments3'>
     <a href="https://segzyp1000.github.io/statipage/">
      <img src={Project3} alt=""></img>
    </a>
    <p className='paragraph'>HTML, CSS </p>
     </div>
     </div>

    </div>

  )
}

export default Project
