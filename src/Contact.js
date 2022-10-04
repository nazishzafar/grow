


import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./styles/Contact.css";
import { Button } from 'react-bootstrap';
import contact from "./Images/contact.png"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iyuh2iw', 'template_0geg3kj', e.target, 'Zb9K82Otk7ROFdFFa')
      .then((result) => {
          alert("Your Message has been sent successfully");
      }, (error) => {
          alert(error.text)
      });
  };

  return (
    //  <div className="contactImg">
    //     <img src={contact} alt="Contact image" />
    //   </div>
    <form ref={form} onSubmit={sendEmail} className='container'>
      <h2>Get into Touch</h2>
      
     
      <div className='input-field'>
    
          <label htmlFor='name'>Full Name</label>
          <input type='text'autoComplete='off'  name='name' id='name'required/>
        </div>

        <div className='input-field'>
          <label htmlFor='email'>  Email</label>
          <input type='email'  autoComplete='off'  name='email' id='email' required/>
        </div>
        <div className='input-field'>
          <label htmlFor='Message'> Message</label>
          <textarea  autoComplete='off'  name='message' id='Message' rows='7' placeholder='Message' required></textarea>
        </div>

        <Button type='submit'>Submit</Button>
    </form>
  );
};
export default Contact;