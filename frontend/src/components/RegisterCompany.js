import React, { useState } from 'react';
import axios from 'axios';

function RegisterCompany() {
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/companies/register', {
        companyName,
        address,
        contact,
      });
      alert('Company Registered');
    } catch (err) {
      console.error('Error registering company:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Company</h2>
      <div>
        <label>Company Name:</label>
        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <div>
        <label>Contact:</label>
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterCompany;
