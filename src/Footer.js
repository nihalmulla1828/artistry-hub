import React from 'react';
import './Footer.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom'; // Import Link for navigation

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Design Services</h3>
          <ul className="footer-list">
            <li><Link to="/design-contests">Design Contests</Link></li>
            <li><Link to="/one-to-one-projects">1-to-1 Projects</Link></li>
            <li><Link to="/find-artist">Find a Designer</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Get a Design</h3>
          <ul className="footer-list">
            <li><Link to="/service/1">Portrait Drawing</Link></li>
            <li><Link to="/service/2">Modern Canvas Art</Link></li>
            <li><Link to="/service/3">Bridal Mehendi</Link></li>
            <li><Link to="/service/4">T-Shirt Printing</Link></li>
            <li><Link to="/service/5">Embroidery</Link></li>
            <li><Link to="/services">Browse All Categories</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Artistry Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
