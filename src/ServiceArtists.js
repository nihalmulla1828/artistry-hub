import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceArtists.css'; // Import the CSS file for styling
import Footer from './Footer';
import Navbar from './Navbar';

// Mock data for services and artists
const servicesData = [
  { service_id: 1, service_name: 'Portrait Drawing' },
  { service_id: 2, service_name: 'Modern Canvas Art' },
  { service_id: 3, service_name: 'Bridal Mehendi' },
  { service_id: 4, service_name: 'T-Shirt Printing' },
  { service_id: 5, service_name: 'Embroidery' },
  { service_id: 6, service_name: 'Chocolate Making' },
  { service_id: 7, service_name: 'Canvas Painting' },
  { service_id: 8, service_name: 'Digital Art' },
  { service_id: 9, service_name: 'Mehendi Service' },
  { service_id: 10, service_name: 'Handmade Crafts' },
];

const artistsData = [
  { id: 1, name: 'John Doe', services: [1, 7], location: 'Pune', profilePicture: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jane Smith', services: [2, 7], location: 'Mumbai', profilePicture: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Alex Johnson', services: [3, 9], location: 'Delhi', profilePicture: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Emma Brown', services: [4, 5], location: 'Bangalore', profilePicture: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Liam Wilson', services: [5], location: 'Chennai', profilePicture: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Olivia Taylor', services: [6], location: 'Hyderabad', profilePicture: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Noah Davis', services: [7], location: 'Kolkata', profilePicture: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Ava Thomas', services: [8], location: 'Pune', profilePicture: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Mason Moore', services: [9], location: 'Jaipur', profilePicture: 'https://via.placeholder.com/150' },
  { id: 10, name: 'Mia White', services: [10], location: 'Surat', profilePicture: 'https://via.placeholder.com/150' },
];

const ServiceArtists = () => {
  const { id } = useParams(); // Get service ID from URL params
  const serviceId = parseInt(id);

  // Get the service name for the current serviceId
  const service = servicesData.find((service) => service.service_id === serviceId);

  // Filter artists offering this service
  const filteredArtists = artistsData.filter((artist) =>
    artist.services.includes(serviceId)
  );

  return (
    <>
   
    <div className="artists-container">
      <h1 className="artists-heading">{service ? `${service.service_name} - Artists` : 'Artists Offering This Service'}</h1>
      {filteredArtists.length > 0 ? (
        <div className="artists-list">
          {filteredArtists.map((artist) => (
            <div key={artist.id} className="artist-card">
              <img
                src={artist.profilePicture}
                alt={artist.name}
                className="artist-image"
              />
              <h3 className="artist-name">{artist.name}</h3>
              <p className="artist-location">{artist.location}</p>
              <Link to={`/portfolio/${artist.id}`}>
                <button className="view-profile-button">View Profile</button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No artists found for this service.</p>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default ServiceArtists;
