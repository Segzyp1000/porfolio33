import React from 'react';
import '../style/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://web.facebook.com/segun.olowo" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        <a href="https://twitter.com/segzyp1000" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/segzyp1000/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/segun-olowoyeye-04909b76/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href='https://wa.link/sntbnx' target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        <a href='https://github.com/Segzyp1000' target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a>
      </div>
      <div className="copyright">
        <p>Segun's Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;