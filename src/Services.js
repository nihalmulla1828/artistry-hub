// Services.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css'; // For styling
import Footer from './Footer';
import Navbar from './Navbar';

// Services Data
const servicesData = [
  { service_id: 1, service_name: 'Portrait Drawing', description: 'Custom portrait art in pencil.', image_url: 'https://via.placeholder.com/300x200/FFB6C1/000000?text=Portrait+Drawing' },
  { service_id: 2, service_name: 'Modern Canvas Art', description: 'Unique canvas designs.', image_url: 'https://via.placeholder.com/300x200/ADD8E6/000000?text=Modern+Canvas+Art' },
  { service_id: 3, service_name: 'Bridal Mehendi', description: 'Bridal mehendi service for weddings.', image_url: 'https://via.placeholder.com/300x200/FFFFE0/000000?text=Bridal+Mehendi' },
  { service_id: 4, service_name: 'T-Shirt Printing', description: 'Personalized t-shirts.', image_url: 'https://via.placeholder.com/300x200/98FB98/000000?text=T-Shirt+Printing' },
  { service_id: 5, service_name: 'Embroidery', description: 'Customized embroidery.', image_url: 'https://via.placeholder.com/300x200/FFE4E1/000000?text=Embroidery' },
  { service_id: 6, service_name: 'Chocolate Making', description: 'Handmade premium chocolates.', image_url: 'https://via.placeholder.com/300x200/FFD700/000000?text=Chocolate+Making' },
  { service_id: 7, service_name: 'Canvas Painting', description: 'Realistic and abstract paintings.', image_url: 'https://via.placeholder.com/300x200/FF6347/000000?text=Canvas+Painting' },
  { service_id: 8, service_name: 'Digital Art', description: 'Professional illustrations.', image_url: 'https://via.placeholder.com/300x200/DDA0DD/000000?text=Digital+Art' },
  { service_id: 9, service_name: 'Mehendi Service', description: 'Full mehendi design.', image_url: 'https://via.placeholder.com/300x200/B0E0E6/000000?text=Mehendi+Service' },
  { service_id: 10, service_name: 'Handmade Crafts', description: 'Unique handcrafted items.', image_url: 'https://via.placeholder.com/300x200/FAEBD7/000000?text=Handmade+Crafts' },
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`); // Navigate to the service's artist list page
  };

  return (
    <>
   
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-list">
        {servicesData.map((service) => (
          <div
            key={service.service_id}
            className="service-card"
            onClick={() => handleServiceClick(service.service_id)}
          >
            <img
              src={service.image_url}
              alt={service.service_name}
              className="service-image"
            />
            <div className="service-content">
              <h3 className="service-title">{service.service_name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Services;
