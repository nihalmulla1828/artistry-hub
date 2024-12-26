// src/FindArtist.js
import React, { useState, useEffect } from 'react';
import './FindArtist.css'; // For styling
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const FindArtist = () => {
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate(); // For navigation to portfolio page

  // Load mock data (simulate API call)
  useEffect(() => {
    setArtists([
      {
        id: 1,
        name: 'John Doe',
        skills: ['Portrait Drawing', 'Pencil Art'],
        location: 'Pune',
        profilePicture: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        name: 'Jane Smith',
        skills: ['Modern Canvas Art', 'Acrylic Painting'],
        location: 'Mumbai',
        profilePicture: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        name: 'Alex Johnson',
        skills: ['Bridal Mehendi', 'Henna Art'],
        location: 'Delhi',
        profilePicture: 'https://via.placeholder.com/150',
      },
      {
        id: 4,
        name: 'Emma Brown',
        skills: ['T-Shirt Printing', 'Custom Designs'],
        location: 'Bangalore',
        profilePicture: 'https://via.placeholder.com/150',
      },
      {
        id: 5,
        name: 'Liam Wilson',
        skills: ['Embroidery', 'Hand-Stitched Designs'],
        location: 'Chennai',
        profilePicture: 'https://via.placeholder.com/150',
      },
      {
        id: 6,
        name: 'Olivia Taylor',
        skills: ['Handmade Chocolates', 'Dessert Crafting'],
        location: 'Hyderabad',
        profilePicture: 'https://via.placeholder.com/150',
      },
      {
        id: 7,
        name: 'Noah Davis',
        skills: ['Canvas Painting', 'Oil Painting'],
        location: 'Kolkata',
        profilePicture: 'https://via.placeholder.com/150',
      },
      {
        id: 8,
        name: 'Ava Thomas',
        skills: ['Digital Art', 'Illustrations'],
        location: 'Pune',
        profilePicture: 'https://via.placeholder.com/150',
      },
      {
        id: 9,
        name: 'Mason Moore',
        skills: ['Henna Art', 'Body Mehendi'],
        location: 'Jaipur',
        profilePicture: 'https://via.placeholder.com/150',
      },
      {
        id: 10,
        name: 'Mia White',
        skills: ['Handmade Crafts', 'Home Decor'],
        location: 'Surat',
        profilePicture: 'https://via.placeholder.com/150',
      },
    ]);
  }, []);

  const handleViewProfile = (id) => {
    // Navigate to the Portfolio page for the selected artist
    navigate(`/portfolio/${id}`);
  };

  return (
    <>
   
    <div className="artist-container">
      <h2 className="artist-heading">
        Find <span>Artists</span>
      </h2>
      <div className="artist-list">
        {artists.map((artist) => (
          <div key={artist.id} className="artist-card">
            <img src={artist.profilePicture} alt={artist.name} className="artist-image" />
            <h3 className="artist-name">{artist.name}</h3>
            <p className="artist-skills">Skills: {artist.skills.join(', ')}</p>
            <p className="artist-location">Location: {artist.location}</p>
            <button onClick={() => handleViewProfile(artist.id)} className="view-profile-button">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FindArtist;
