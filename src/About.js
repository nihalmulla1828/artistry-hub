// src/About.js
import React from 'react';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
    return (
        <>
        
        <div className="about-container">
            <h1 className="about-heading">About Us</h1>
            <div className="about-content">
                <p className="about-text">
                    At <strong>Artistry Hub</strong>, we are passionate about helping businesses grow through exceptional design. Our team of creative professionals specializes in transforming ideas into visually compelling designs that resonate with your target audience.
                </p>
                <p className="about-text">
                    In addition to empowering businesses, we are also committed to helping freelance artists grow. Artistry Hub serves as a platform where artists can showcase their unique talents, connect with potential clients, and build their creative businesses. Whether you're a designer, painter, photographer, or any other creative professional, we are here to support your journey toward success.
                </p>
                <p className="about-text">
                    Founded in 2024, our mission is to provide high-quality, personalized design services to clients of all sizes. Whether you're a small business just getting started or an established company looking to refresh your brand, we are here to help you succeed.
                </p>
                <p className="about-text">
                    We believe that great design goes beyond aesthetics. It tells a story, builds trust, and creates meaningful connections. That's why we take the time to understand your brand and audience, ensuring that every design we create is a perfect match for your vision.
                </p>
                <h2 className="about-subheading">Our Values</h2>
                <ul className="about-list">
                    <li><strong>Creativity:</strong> We push boundaries to bring unique and innovative ideas to life.</li>
                    <li><strong>Quality:</strong> We strive for excellence in every design we produce.</li>
                    <li><strong>Collaboration:</strong> We work closely with our clients to ensure their needs and goals are met.</li>
                    <li><strong>Customer-Centric:</strong> Our clients’ satisfaction is at the heart of everything we do.</li>
                </ul>
                <p className="about-text">
                    We are excited to be a part of your journey and look forward to helping you create something amazing.
                </p>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default About;
