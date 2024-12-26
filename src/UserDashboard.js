import React from 'react';
import Navbar from './Navbar';

const UserDashboard = () => {
    return (
        <>
       
        <div style={{ padding: '20px' }}>
            <h2>User Dashboard</h2>
            <p>Welcome to your dashboard! Here you can:</p>
            <ul>
                <li>Browse and hire artists.</li>
                <li>View and manage your orders.</li>
                <li>Track the progress of your projects.</li>
            </ul>
        </div>
        </>
    );
};

export default UserDashboard;
