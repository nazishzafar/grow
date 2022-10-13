import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./styles/Contact.css";
import { Button } from "react-bootstrap";
import contact from "./Images/contact.png";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iyuh2iw",
        "template_0geg3kj",
        e.target,
        "Zb9K82Otk7ROFdFFa"
      )
      .then(
        (result) => {
          alert("Your Message has been sent successfully");
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div className="main-contact">
      <div className="contact">      
       
    <form ref={form} onSubmit={sendEmail} >
    <h2>Get into Touch</h2>
        <div className="contact-input-feild">
          <input
            type="text"
            autoComplete="off"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="contact-input-feild">
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="contact-input-feild">
          <textarea
            autoComplete="off"
            name="message"
            id="Message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <Button type="submit">Submit</Button>
    </form>
    </div>
    </div>

  );
};
export default Contact;
