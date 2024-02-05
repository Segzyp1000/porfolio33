import React from 'react'
import '../style/Contact.css';

const Contact = () => {
  return (
    <section className='talk'>
    <div className='contact'>
        <div className='infopart'>
      <h1 className='contactme'>Contact</h1>
      <p>I would love to hear about your project and how I could help. Please fill the form, and I'll get back to you as soon as possible.</p>
    </div>
    <div className='formf'>
    <form action="https://formspree.io/f/mjvnkeqy" method="post">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" autoComplete="name" name="name" required   />
    <label htmlFor="name">Email:</label>
    <input type="email" id="email" autoComplete="email" name="email" required />
    <label htmlFor="message">Message:</label>
    <textarea id="message" name="message" autoComplete="message" rows="3" required></textarea>
    <button type="submit">Send Message</button>
    </form>
    </div>
    </div>
    </section>
  )
};

export default Contact
