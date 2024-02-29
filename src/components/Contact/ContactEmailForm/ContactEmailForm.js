import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import ContactNavigation from '../ContactNavigation/ContactNavigation';

const ContactEmailForm = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const form = document.querySelector('#contact-form');
    const statusMessage = document.querySelector('.status-message');
    generateTicketNumber();

    emailjs.sendForm('service_tg62axq', 'template_ta905it', form, {
      publicKey: 'pa3KSAbmxQ86AV5VE',
    })
      .then(function (response) {
        setStatusMessage("Message sent successfully!");
        form.reset();
        statusMessage.className = "status-message p-10 text-center success";
        setTimeout(() => {
          statusMessage.className = 'status-message'
        }, 5000);
      }, function (error) {
        setStatusMessage("Failed to send message! " + error.text);
        statusMessage.className = "status-message p-10 text-center failure";
        setTimeout(() => {
          statusMessage.className = 'status-message'
        }, 5000);
      });
  };

  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;
  const [ticketNumber, setTicketNumber] = useState("000000");

  const generateTicketNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setTicketNumber(numStr.substring(numStr.length - 6));
  }

  return (
    <div className="contact-container">
      <ContactNavigation/>
      <h1>Contact Email Form</h1>
      <h2>Send us a message!</h2>
      <p className="status-message">{statusMessage}</p>

      <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <input type='hidden' name='ticket_id' value={ticketNumber} />

        <div className='input-container'>
          <label htmlFor='user_name' className='input-label'>Name (optional)</label>
          <div className='input-wrapper'>
            <input
              name='user_name'
              className="input-text"
              type='text'
              maxLength='30'
              aria-invalid={errors.user_name ? 'true' : 'false'}
              {...register('user_name', { required: false })}
              placeholder='Name (optional)'/>
            {errors.user_name && errors.user_name.type === "required" && (
              <div className='input-alert' role='alert'>Name is required</div>
            )}
          </div>
        </div>
        <br />

        <div className='input-container'>
          <label htmlFor='user_email' className='input-label'>Email </label>
          <div className='input-wrapper'>
            <input
              name='user_email'
              className="input-text"
              type='email'
              aria-invalid={errors.user_email ? 'true' : 'false'}
              {...register('user_email', { required: true })}
              placeholder='Email' />
            {errors.user_email && errors.user_email.type === "required" && (
              <div className='input-alert' role='alert'>Email is required</div>
            )}
          </div>
        </div>
        <br />
        
        <div className='input-container'>
          <label htmlFor='message' className='input-label'>How may we help you?</label>
          <textarea
            name='message'
            className="input-text message-block"
            maxLength='1500'
            aria-invalid={errors.message ? 'true' : 'false'}
            {...register('message', { required: true })}
            placeholder='Message' />
          <div className='text-under-message mb-5'>
            <p className='char-limit'>Remaining Character Count: {messageCharsLeft}</p>
            {errors.message && errors.message.type === "required" && (
              <div className='input-alert' role='alert'>Message is required</div>
            )}
          </div>
        </div>
        <br />
        
        <p>By pressing the Send Message button below, you agree to the terms of our <a target="_self" href="/contact/email-form/privacy">Privacy Policy</a>.</p>
        <input className='unselectable contact-btn mb-5' type='submit' value='Send Message' />
      </form>
    </div>
  );
}

export default ContactEmailForm;