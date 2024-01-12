import React from 'react'
import Segz from '../myimage/Segz.JPG'
import '../style/Showcase.css';

const Showcase = () => {
  return (
    <div className='showcase' id='home'>
        <div className='details'>
      <h1 className='name'>
        I'm Segun
      </h1>
        <h3 className='skills'>A Frond-End Developer</h3>
        <h5 className='info'>I am Passionate About Building Accessible,responsive and user-friendly Web Apps That Users Love</h5>
        <div className="social">
        <a href="https://web.facebook.com/segun.olowo"><i className="fab fa-facebook"></i></a>
        <a href="https://twitter.com/segzyp1000"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/segzyp1000/"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/segun-olowoyeye-04909b76/"><i className="fab fa-linkedin"></i></a>
        <a href='https://wa.link/sntbnx'><i className="fab fa-whatsapp"></i></a>
        <a href='https://github.com/Segzyp1000'><i className='fab fa-github'></i></a>
      </div>
        </div>
        <img src={Segz} className='segzy' alt=''></img>
    </div>
  )
}

export default Showcase
