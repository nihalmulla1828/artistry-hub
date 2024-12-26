import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Workshops.css'; // Import the CSS file for styles

const Workshops = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    { 
      event_id: 1, artist_id: 1, event_name: 'Portrait Workshop', date: '2024-06-20', 
      image: 'https://via.placeholder.com/400x300/FF6347/FFFFFF?text=Portrait+Workshop',
      description: 'Learn the art of portraiture from professional artists. All skill levels welcome!'
    },
    { 
      event_id: 2, artist_id: 2, event_name: 'Canvas Expo', date: '2024-06-22', 
      image: 'https://via.placeholder.com/400x300/ADD8E6/FFFFFF?text=Canvas+Expo', 
      description: 'An exhibition showcasing beautiful canvas paintings from artists around the world.'
    },
    { 
      event_id: 3, artist_id: 3, event_name: 'Bridal Mehendi Fair', date: '2024-06-23', 
      image: 'https://via.placeholder.com/400x300/FFB6C1/FFFFFF?text=Bridal+Mehendi+Fair', 
      description: 'A grand exhibition of bridal mehendi artists and their intricate designs.'
    },
    { 
      event_id: 4, artist_id: 4, event_name: 'T-Shirt Showcase', date: '2024-06-25', 
      image: 'https://via.placeholder.com/400x300/98FB98/FFFFFF?text=T-Shirt+Showcase', 
      description: 'Showcasing customized t-shirt designs from independent artists.'
    },
    { 
      event_id: 5, artist_id: 5, event_name: 'Embroidery Fest', date: '2024-06-26', 
      image: 'https://via.placeholder.com/400x300/FFE4E1/FFFFFF?text=Embroidery+Fest', 
      description: 'A celebration of beautiful handmade embroidered designs, from clothing to accessories.'
    },
    { 
      event_id: 6, artist_id: 6, event_name: 'Chocolate Fest', date: '2024-06-28', 
      image: 'https://via.placeholder.com/400x300/FFD700/FFFFFF?text=Chocolate+Fest', 
      description: 'A sweet event where chocolate lovers can explore handmade chocolates and unique flavors.'
    },
    { 
      event_id: 7, artist_id: 7, event_name: 'Painting Workshop', date: '2024-06-29', 
      image: 'https://via.placeholder.com/400x300/FF6347/FFFFFF?text=Painting+Workshop', 
      description: 'Learn different painting techniques in this hands-on workshop with professional artists.'
    },
    { 
      event_id: 8, artist_id: 8, event_name: 'Digital Art Fair', date: '2024-06-30', 
      image: 'https://via.placeholder.com/400x300/8A2BE2/FFFFFF?text=Digital+Art+Fair', 
      description: 'A digital art fair featuring the latest trends and technologies in digital painting and illustrations.'
    },
    { 
      event_id: 9, artist_id: 9, event_name: 'Mehendi Exhibition', date: '2024-07-01', 
      image: 'https://via.placeholder.com/400x300/F0E68C/FFFFFF?text=Mehendi+Exhibition', 
      description: 'Explore stunning mehendi designs and get your own henna art done at the exhibition.'
    },
    { 
      event_id: 10, artist_id: 10, event_name: 'Craft Expo', date: '2024-07-02', 
      image: 'https://via.placeholder.com/400x300/FAEBD7/FFFFFF?text=Craft+Expo', 
      description: 'A celebration of handmade crafts, from pottery to jewelry, all created by talented artisans.'
    },
  ];

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  return (
    <div className="workshops-section">
      <h2 className="workshops-heading">Upcoming and Ongoing Workshops</h2>
      <div className="carousel">
        <button className="carousel-button" onClick={prevEvent}>Previous</button>
        
        <div className="carousel-content">
          <img 
            src={events[currentIndex].image} 
            alt={events[currentIndex].event_name} 
            className="event-image" 
          />
          <h3 className="event-title">{events[currentIndex].event_name}</h3>
          <p className="event-date">{events[currentIndex].date}</p>
          <Link to={`/workshop-details/${events[currentIndex].event_id}`}>
            <button className="view-details-button">View Details</button>
          </Link>
        </div>
        
        <button className="carousel-button" onClick={nextEvent}>Next</button>
      </div>
    </div>
  );
};

export default Workshops;
