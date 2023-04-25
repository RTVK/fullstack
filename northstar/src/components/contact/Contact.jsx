import { useState } from "react";
import "./contact.scss";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [messageDisplay, setMessageDisplay] = useState(false);
  const form = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_8kuqi0r', 'template_i7uhcic', form.current, 'Us_Y5PGhgEyQIEgWL')
      .then((result) => {
          console.log(result.text);
          setMessageDisplay(true);

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact us</h2>
    <form ref={form} onSubmit={sendEmail}>
    <div className="right">
      <input type="text" name="from_name" placeholder="Name" /> <br/>
      <input type="email" name="user_email" placeholder="email@gmail.com" /><br/>
      <input type="phone" name="user_phone" placeholder="91 9444444444" /><br/>
      <textarea name="message" placeholder='I am interested to invest into ' /><br/><br/>
      <input type="submit" value="Send" />
      {messageDisplay && <span>Thanks, we'll reply shortly :)</span>}
      </div>
    </form>
      </div>
    </div>
  );
}




