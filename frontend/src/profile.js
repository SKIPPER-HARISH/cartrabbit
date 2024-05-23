// UserProfile.js
import React, { useEffect, useState } from 'react';
import { fetchToken } from './Auth.js';

const UserProfile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = fetchToken();
        
        if (token) {
            fetchUserData(token);
        }
    }, []);

    const fetchUserData = async (token) => {
        try {
            const response = await fetch('https://localhost:5001/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            {/* Render other user data as needed */}
        </div>
    );
};

export default UserProfile;
