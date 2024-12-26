import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for styling
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Optionally, here you can handle form submission logic (e.g., send an email or save to database)
  };

  return (
    <>
    
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-info">
        <p>If you have any questions, feel free to reach out to us!</p>
        <p>Email: support@artistryhub.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message"
          />
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>

        {isSubmitted && <p className="success-message">Your message has been sent successfully!</p>}
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
