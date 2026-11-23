import React, { useState } from 'react';
import './contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaSpinner, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function Contact() {
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://formsubmit.co/ajax/esraagamal12002@gmail.com', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card reveal-up">
              <FaPhone className="contact-card-icon" />
              <h3>Phone</h3>
              <a href="tel:01129472282">01129472282</a>
            </div>
            <div className="contact-card reveal-up">
              <FaEnvelope className="contact-card-icon" />
              <h3>Email</h3>
              <a href="mailto:esraagamal12002@gmail.com">esraagamal12002@gmail.com</a>
            </div>
            <div className="contact-card reveal-up">
              <FaMapMarkerAlt className="contact-card-icon" />
              <h3>Location</h3>
              <p>Zagazig, Sharkia, Egypt</p>
            </div>
            <div className="contact-social reveal-up">
              <a href="https://www.linkedin.com/in/esraa-gamal-khater-7a0b00217/" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
              <a href="https://github.com/ESRAAGamalKhater" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="Portfolio Contact" />
            <input type="hidden" name="_captcha" value="false" />
            <label className="sr-only" htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-input"
              required
            />
            <label className="sr-only" htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-input"
              required
            />
            <label className="sr-only" htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your Message"
              className="form-input form-textarea"
              rows="6"
              required
            ></textarea>

            <button type="submit" className="form-btn" disabled={status === 'loading'}>
              {status === 'loading' ? <><FaSpinner className="spin" /> Sending...</> : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="form-msg success"><FaCheckCircle /> Message sent successfully!</div>
            )}
            {status === 'error' && (
              <div className="form-msg error"><FaTimesCircle /> {errorMsg}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
