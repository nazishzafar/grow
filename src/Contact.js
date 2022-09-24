


import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./styles/Contact.css";
import { Button } from 'react-bootstrap';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ksc70pg', 'template_3sr1159', e.target, 'CzTosi5QN3aEoI4l8')
      .then((result) => {
        
          
          alert("Your Message has been sent successfully");
      }, (error) => {
          alert(error.text)
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='container'>
      <h2>Contact Us</h2>
      <div className='input-field'>
          <label htmlFor='name'>Full Name</label>
          <input type='text'autoComplete='off'  name='name' id='name'/>
        </div>

        <div className='input-field'>
          <label htmlFor='email'>  Email</label>
          <input type='email'  autoComplete='off'  name='email' id='email'/>
        </div>
        <div className='input-field'>
          <label htmlFor='Message'> Message</label>
          <textarea  autoComplete='off'  name='message' id='Message' rows='7' placeholder='Message'></textarea>
        </div>

        <Button  type='submit'>Submit</Button>
    </form>
  );
};
export default Contact;