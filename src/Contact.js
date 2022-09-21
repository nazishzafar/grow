


import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./styles/Signup.css";
import { Button } from 'react-bootstrap';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ksc70pg', 'template_3sr1159', e.target, 'CzTosi5QN3aEoI4l8')
      .then((result) => {
          console.log(result.text);
          alert("Your Message has been sent successfully");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
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
          <input type='TextArea'  autoComplete='off'  name='message' id='Message'/>
        </div>

        <Button  type='submit'>Registeration</Button>
    </form>
  );
};
export default Contact;