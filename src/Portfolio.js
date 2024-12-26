import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Add useNavigate
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Portfolio.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Portfolio = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // For navigation
  const [artist, setArtist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const artistData = [
    {
      id: 1,
      name: 'John Doe',
      skills: ['Portrait Drawing', 'Pencil Art'],
      location: 'Pune',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Art+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Art+2',
      ],
	  availability: {
        "2024-12-22": ["10:00 AM", "1:00 PM", "2:00 PM"], // Available slots
        "2024-12-23": ["9:00 AM", "11:00 AM", "4:00 PM"],
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      skills: ['Modern Canvas Art', 'Acrylic Painting'],
      location: 'Mumbai',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Canvas+1',
        'https://via.placeholder.com/300x200/98FB98/000000?text=Canvas+2',
      ],
	  availability: {
        "2024-12-22": ["10:00 AM", "1:00 PM", "2:00 PM"], // Available slots
        "2024-12-23": ["9:00 AM", "11:00 AM", "4:00 PM"],
      },
    },
    {
      id: 3,
      name: 'Alex Johnson',
      skills: ['Bridal Mehendi', 'Henna Art'],
      location: 'Delhi',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Mehendi+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Mehendi+2',
      ],
	  availability: {
        "2024-12-22": ["10:00 AM", "1:00 PM", "2:00 PM"], // Available slots
        "2024-12-23": ["9:00 AM", "11:00 AM", "4:00 PM"],
      },
    },
    {
      id: 4,
      name: 'Emma Brown',
      skills: ['T-Shirt Printing', 'Custom Designs'],
      location: 'Bangalore',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=T-Shirt+1',
        'https://via.placeholder.com/300x200/98FB98/000000?text=T-Shirt+2',
      ],
	  availability: {
        "2024-12-22": ["10:00 AM", "1:00 PM", "2:00 PM"], // Available slots
        "2024-12-23": ["9:00 AM", "11:00 AM", "4:00 PM"],
      },
    },
    {
      id: 5,
      name: 'Liam Wilson',
      skills: ['Embroidery', 'Hand-Stitched Designs'],
      location: 'Chennai',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Embroidery+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Embroidery+2',
      ],
	  availability: {
        "2024-12-22": ["10:00 AM", "1:00 PM", "2:00 PM"], // Available slots
        "2024-12-23": ["9:00 AM", "11:00 AM", "4:00 PM"],
      },
    },
    {
      id: 6,
      name: 'Olivia Taylor',
      skills: ['Handmade Chocolates', 'Dessert Crafting'],
      location: 'Hyderabad',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Chocolate+1',
        'https://via.placeholder.com/300x200/98FB98/000000?text=Chocolate+2',
      ],
	  availability: {
        "2024-12-22": ["10:00 AM", "1:00 PM", "2:00 PM"], // Available slots
        "2024-12-23": ["9:00 AM", "11:00 AM", "4:00 PM"],
      },
    },
    {
      id: 7,
      name: 'Noah Davis',
      skills: ['Canvas Painting', 'Oil Painting'],
      location: 'Kolkata',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Canvas+Painting+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Canvas+Painting+2',
      ],
	  availability: {
        "2024-12-22": ["10:00 AM", "1:00 PM", "2:00 PM"], // Available slots
        "2024-12-23": ["9:00 AM", "11:00 AM", "4:00 PM"],
      },
    },
    {
      id: 8,
      name: 'Ava Thomas',
      skills: ['Digital Art', 'Illustrations'],
      location: 'Pune',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Digital+Art+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Digital+Art+2',
      ],
	  availability: {
        "2024-12-22": ["10:00 AM", "1:00 PM", "2:00 PM"], // Available slots
        "2024-12-23": ["9:00 AM", "11:00 AM", "4:00 PM"],
      },
    },
    {
      id: 9,
      name: 'Mason Moore',
      skills: ['Henna Art', 'Body Mehendi'],
      location: 'Jaipur',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Henna+1',
        'https://via.placeholder.com/300x200/98FB98/000000?text=Henna+2',
      ],
	  availability: {
        "2024-12-22": ["10:00 AM", "1:00 PM", "2:00 PM"], // Available slots
        "2024-12-23": ["9:00 AM", "11:00 AM", "4:00 PM"],
      },
    },
    {
      id: 10,
      name: 'Mia White',
      skills: ['Handmade Crafts', 'Home Decor'],
      location: 'Surat',
      profilePicture: 'https://via.placeholder.com/150',
      portfolio: [
        'https://via.placeholder.com/300x200/FFB6C1/000000?text=Craft+1',
        'https://via.placeholder.com/300x200/ADD8E6/000000?text=Craft+2',
      ],
	  availability: {
        "2024-12-22": ["10:00 AM", "1:00 PM", "2:00 PM"], // Available slots
        "2024-12-23": ["9:00 AM", "11:00 AM", "4:00 PM"],
      },
    },
  ];

  useEffect(() => {
    const selectedArtist = artistData.find((item) => item.id === parseInt(id));
    setArtist(selectedArtist);
  }, [id]);

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
    if (artist?.availability[formattedDate]) {
      setTimeSlots(artist.availability[formattedDate]);
    } else {
      setTimeSlots([]);
    }
  };

  const handleSendMessage = () => {
    navigate(`/chat/${id}`); // Navigate to the chat page with the artist's ID
  };

  if (!artist) {
    return (
      <div className="error-container">
        <h2>Artist Not Found</h2>
        <p>Sorry, the artist you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      
      <div className="portfolio-container">
        <div className="portfolio-header">
          <img
            src={artist.profilePicture}
            alt={artist.name}
            className="artist-profile-picture"
          />
          <div className="portfolio-details">
            <h2>{artist.name}</h2>
            <p>
              <strong>Skills:</strong> {artist.skills.join(", ")}
            </p>
            <p>
              <strong>Location:</strong> {artist.location}
            </p>
          </div>
        </div>

        <div className="portfolio-gallery-section">
          <h3>Portfolio</h3>
          <div className="portfolio-gallery">
            {artist.portfolio.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`Art ${index + 1}`}
                className="portfolio-image"
              />
            ))}
          </div>
        </div>

        <div className="calendar-container">
          <h3>Availability Calendar</h3>
          <Calendar
            onChange={handleDateChange}
            tileClassName={({ date, view }) => {
              const formattedDate = date.toISOString().split("T")[0];
              if (artist?.availability[formattedDate]) {
                return "available-date";
              }
              return view === "month" ? "unavailable-date" : null;
            }}
          />

          {selectedDate && (
            <div className="time-slots">
              <h4>Time Slots for {selectedDate}</h4>
              {timeSlots.length > 0 ? (
                timeSlots.map((slot, index) => (
                  <div key={index} className="time-slot available-slot">
                    {slot}
                  </div>
                ))
              ) : (
                <div className="time-slot unavailable-slot">
                  No Slots Available
                </div>
              )}
            </div>
          )}
        </div>

        {/* Send Message Button */}
        <button className="send-message-btn" onClick={handleSendMessage}>
          Send Message
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
