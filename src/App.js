
import Footer from './Footer';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';

import "./Navbar"; 
import Navbar from './Navbar';
import Home from './Home';
import FindArtist from './FindArtist';
import RegistrationForm from './RegistrationForm';
import Services from './Services';
import About from './About';
import Blogs from './Blogs';
import Contact from './Contact';
import Portfolio from './Portfolio';
import ServiceArtists from './ServiceArtists';
import UserDashboard from './UserDashboard';
import ArtistDashboard from './ArtistDashboard';
import AdminDashboard from './AdminDashboard';
import Chat from './Chat';
import WorkshopDetails from './WorkshopDetails';


function App() {
  const [role, setRole] = useState(localStorage.getItem('userRole')); // Get role from localStorage initially

  const handleLogout = () => {
    localStorage.removeItem('userRole'); // Remove role from localStorage
    setRole(null); // Clear role from state
  };

  return (
     <Router>
     <Navbar role={role} onLogout={handleLogout} />
     <Routes>
     <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login setRole={setRole} />} />
         <Route path="/find-artist" element={<FindArtist />} />
         <Route path="/services" element={<Services />} />
         <Route path="/register" element={<RegistrationForm />} />
         <Route path="/about" element={<About />} />
         <Route path="/blogs" element={<Blogs />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/portfolio/:id" element={<Portfolio />} />
         <Route path="/service/:id" element={<ServiceArtists />} />
         <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/artist-dashboard" element={<ArtistDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/workshop-details/:event_id" element={<WorkshopDetails />} />
      </Routes>
     
      
 </Router>
  );
}

export default App;
