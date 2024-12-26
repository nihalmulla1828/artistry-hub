import React, { useState } from 'react';
import './RegistrationForm.css';
import Footer from './Footer';
import Navbar from './Navbar';

const RegistrationForm = () => {
  const [role, setRole] = useState('User');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    location: '',
    portfolio: '',
    skillTags: '',
    certifications: '',
    bio: '',
    profilePicture: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending data to the backend
    console.log(formData);
  };

  return (
    <>
      <div className="registration-form">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          {/* User Info */}
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter your location"
            />
          </div>

          {/* Role Selection */}
          <div className="form-group">
            <label>Role:</label>
            <div>
              <input
                type="radio"
                name="role"
                value="User"
                checked={role === 'User'}
                onChange={(e) => setRole(e.target.value)}
              />{' '}
              User
              <input
                type="radio"
                name="role"
                value="Artist"
                checked={role === 'Artist'}
                onChange={(e) => setRole(e.target.value)}
              />{' '}
              Artist
            </div>
          </div>

          {/* Artist-specific fields */}
          {role === 'Artist' && (
            <>
              <div className="form-group">
                <label>Portfolio Link:</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="Enter your portfolio link"
                  required
                />
              </div>
              <div className="form-group">
                <label>Skill Tags:</label>
                <input
                  type="text"
                  name="skillTags"
                  value={formData.skillTags}
                  onChange={handleChange}
                  placeholder="Enter your skills (comma-separated)"
                  required
                />
              </div>
              <div className="form-group">
                <label>Certifications:</label>
                <input
                  type="text"
                  name="certifications"
                  value={formData.certifications}
                  onChange={handleChange}
                  placeholder="Enter your certifications"
                />
              </div>
              <div className="form-group">
                <label>Bio:</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us about yourself"
                  rows="4"
                />
              </div>
              <div className="form-group">
                <label>Profile Picture URL:</label>
                <input
                  type="url"
                  name="profilePicture"
                  value={formData.profilePicture}
                  onChange={handleChange}
                  placeholder="Enter your profile picture URL"
                />
              </div>
            </>
          )}

          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationForm;
