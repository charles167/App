import React, { useState } from 'react';
import RegisterUser from './components/RegisterUser';
import RegisterCompany from './components/RegisterCompany';
import AddGoods from './components/AddGoods';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import './App.css';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegistration = () => {
    setIsRegistered(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>Welcome to the Dashboard</h1>
      {!isLoggedIn ? (
        <div>
          {!isRegistered ? (
            <RegisterUser onRegister={handleRegistration} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </div>
      ) : (
        <UserDashboard />
      )}
    </div>
  );
}

export default App;
