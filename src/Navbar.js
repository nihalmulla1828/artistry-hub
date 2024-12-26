import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import logo from './logo.png';

export default function Navbar({ role, onLogout }) {
    console.log('Navbar received role:', role); // Debug role

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Artistry-Hub Logo" />
            </div>
            <ul>
                {/* Common Links */}
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/find-artist" activeClassName="active">Find Artist</NavLink></li>
                <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>

                {/* Role-Specific Links for Users */}
                {role === 'user' && (
                    <>
                        <li><NavLink to="/wishlist" activeClassName="active">Wishlist</NavLink></li>
                        <li><NavLink to="/my-orders" activeClassName="active">My Orders</NavLink></li>
                        <li>
                            <NavLink to="/" onClick={onLogout}>Logout</NavLink>
                        </li>
                    </>
                )}

                {/* Role-Specific Links for Artists */}
                {role === 'artist' && (
                    <>
                        <li><NavLink to="/create-event" activeClassName="active">Create Event</NavLink></li>
                        <li><NavLink to="/set-availability" activeClassName="active">Set Availability Time</NavLink></li>
                        <li><NavLink to="/reviews" activeClassName="active">Review & Rating</NavLink></li>
                        <li><NavLink to="/orders" activeClassName="active">Orders</NavLink></li>
                        <li>
                            <NavLink to="/" onClick={onLogout}>Logout</NavLink>
                        </li>
                    </>
                )}

                {/* Role-Specific Links for Admin */}
                {role === 'admin' && (
                    <>
                        <li><NavLink to="/admin-users" activeClassName="active">Users</NavLink></li>
                        <li><NavLink to="/admin-artists" activeClassName="active">Artists</NavLink></li>
                        <li><NavLink to="/admin-events" activeClassName="active">All Events</NavLink></li>
                        <li><NavLink to="/event-approval" activeClassName="active">Event Approval</NavLink></li>
                        <li><NavLink to="/feedback" activeClassName="active">Feedback</NavLink></li>
                        <li>
                            <NavLink to="/" onClick={onLogout}>Logout</NavLink>
                        </li>
                    </>
                )}

                {/* Default Links for Non-Logged-In Users */}
                {!role && (
                    <>
                        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                        <li><NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink></li>
                    </>
                )}
            </ul>

            {/* Search Container */}
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        </div>
    );
}
