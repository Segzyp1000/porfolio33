import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import '../style/Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("mjvnkeqy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className='contact' id='contact'>
        <div className='infopart'>
      <h1 className='contactme'>Contact</h1>
      <p>I would love to hear about your project and how I could help. Please fill the form, and I'll get back to you as soon as possible.</p>
    </div>
    <div className='formf'>
     <form onSubmit={handleSubmit}> 
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
    <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
    <label for="name">Email:</label>
    <input type="email" id="email" name="email" required />
    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea>
    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    <button type="submit" disabled={state.submitting}>Send Message</button>
    </form>
    </div>
    </div>
  )
};

export default Contact
