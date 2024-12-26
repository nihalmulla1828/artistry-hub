import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import CSS for styling
import Footer from './Footer';

const Login = ({ setRole }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Dummy user data for login verification
    const dummyUsers = [
        { role: 'user', email: 'user@example.com', password: 'user123' },
        { role: 'artist', email: 'artist@example.com', password: 'artist123' },
        { role: 'admin', email: 'admin@example.com', password: 'admin123' }
    ];

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for matching user credentials
        const user = dummyUsers.find((u) => u.email === email && u.password === password);

        if (user) {
            setRole(user.role); // Set the role state from parent
            // Navigate based on the role
            navigate(
                user.role === 'admin' ? '/admin-dashboard' :
                user.role === 'artist' ? '/artist-dashboard' :
                '/user-dashboard'
            );
        } else {
            alert('Invalid credentials. Please try again!');
        }
    };

    return (
        <>
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                <p className="register-link">
                    Don't have an account? <a href="/register">Register here</a>
                </p>
            </div>
        </div>
        <Footer/>
        </>
        
    );
};

export default Login;
