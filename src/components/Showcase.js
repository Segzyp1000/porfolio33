import React from 'react'
import '../style/Showcase.css';

const Showcase = () => {
  return (
    <div className='showcase' id='home'>
        <div className='details'>
          <div className='skills-info'>
        <h2 className='skills'>Frond-End Developer</h2>
        <h5 className='info'>I am Passionate About Building Accessible,responsive and user-friendly Web Apps That Users Love</h5>

        <div className='stack'>
          <div className='techstack'>
          <h2>TechStacks</h2>
          </div>
          <ul className='skillssets'>
            <div className='skillz'>
          <li><button>HTML</button></li>
          <li><button>CSS</button></li>
          <li><button>JavaScript</button></li>
          <li><button>Git & Github</button></li>
          <li><button>Bootstrap</button></li>
          <li><button>React</button></li>
          </div>
          </ul>
        </div>
        </div>
      </div>
        <img src='segx.jpg' className='segzy' alt='' />
    </div> 
  )
}

export default Showcase
