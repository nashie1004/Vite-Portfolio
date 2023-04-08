import React, {useState, useRef} from 'react'
import '../Styles/Contact.scss'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  function handleSubmit(e){
    e.preventDefault()

    emailjs.sendForm(
      'contact_service', 'contact_form', 
      form.current, 'UKVcXK-rR9uj-cZLi'
    ).then((result) => {
      console.log(result.text);
      alert('Email Sent')
    }, (error) => {
      console.log(error.text);
      alert('Error')
    });
  }

  return (
    <>
      <p className='heading-p'>Contact</p>
      <div className="contact-form">
        <form ref={form} className="form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="text" placeholder='Email...' name='user_email' required />
            <input type="text" placeholder='Subject...' name='subject'  required />
          </div>
          <textarea cols="30" rows="15" placeholder='Message...' name='message' required ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
