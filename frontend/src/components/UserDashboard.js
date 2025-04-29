import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/me');
        setUserData(response.data);
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      {userData ? (
        <div>
          <h3>Welcome, {userData.username}</h3>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default UserDashboard;
