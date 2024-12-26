import React, { useEffect, useState } from 'react';
import './Description.css'; // Import the CSS file for styles

const Description = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'https://99designs-start-static.imgix.net/homepage/little-danube.jpg?auto=format&w=370&h=370&q=45&dpr=2', // Replace with your image paths
        'https://99designs-start-static.imgix.net/homepage/the-studio.jpg?auto=format&w=370&h=370&q=45&dpr=2',
        'https://99designs-start-static.imgix.net/homepage/feel-good-tea.jpg?auto=format&w=370&h=370&q=45&dpr=2',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    return (
        <div className="description-section">
            <div className="carousel">
                <div className="carousel-images">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className={index === currentIndex ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
            <div className="description">
            <h2 className="description-heading">Grow with Great Design</h2>
            <p className="about-text">
                    Welcome to <strong>Artistry Hub</strong>, we are passionate about helping businesses grow through exceptional design. Our team of creative professionals specializes in transforming ideas into visually compelling designs that resonate with your target audience.
                </p>
                <p className="about-text">
                    In addition to empowering businesses, we are also committed to helping freelance artists grow. Artistry Hub serves as a platform where artists can showcase their unique talents, connect with potential clients, and build their creative businesses. Whether you're a designer, painter, photographer, or any other creative professional, we are here to support your journey toward success.
                </p>
                
            </div>
        </div>
    );
};

export default Description;