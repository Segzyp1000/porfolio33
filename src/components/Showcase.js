import React, {useEffect, useRef} from 'react'
import '../style/Showcase.css';
import TechSkills from './TechSkills';


  const Showcase = () => {
    const showcaseRef = useRef(null);
  
    useEffect(() => {
      const showcaseElement = showcaseRef.current;
      showcaseElement.classList.add('ease-in');
    }, []);

  return (
    <div ref={showcaseRef} className='showcase'>
        <div className='flexxy'>
        <div className='skillset'>
        <h2 className='skills'>Frond-End Developer</h2>
          <h5 className='info'>I am Passionate About Building Accessible,responsive and user-friendly Web Apps That Users Love</h5>
        </div>
        <div className='easy'>
        <div className='techy'>
          <TechSkills />
        </div>
        </div>
        </div>
        
       <div className='imagz'>
        <img src='segx.jpg' className='segzy' alt='' />
        </div>
        
    </div> 
  )
}

export default Showcase
