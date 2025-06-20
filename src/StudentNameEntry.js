// filepath: src/StudentNameEntry.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from './api';

function StudentNameEntry() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Generate a unique tabId (persisted per tab using sessionStorage)
    if (!sessionStorage.getItem('tabId')) {
      const tabId = Math.random().toString(36).substring(2, 10);
      sessionStorage.setItem('tabId', tabId);
    }
  }, []);

  const handleContinue = async () => {
    if (!name.trim()) return;

    const trimmedName = name.trim();
    const tabId = sessionStorage.getItem('tabId');

    try {
      // Register student with backend
      const res = await API.post('/students', { name: trimmedName, tabId });
      const { studentId } = res.data;

      // Save in sessionStorage
      sessionStorage.setItem('studentName', trimmedName);
      sessionStorage.setItem('studentId', studentId);

      navigate('/student/dashboard');
    } catch (error) {
      console.error('Failed to register student:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>
        <span style={{ fontWeight: 'bold', color: '#4F0DCE' }}>Intervue Poll</span>
      </h2>
      <h1>
        Let’s <span style={{ fontWeight: 'bold' }}>Get Started</span>
      </h1>
      <p>
        Enter your Name
      </p>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Your Name"
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '250px',
          marginBottom: '20px'
        }}
      />
      <br />
      <button
        onClick={handleContinue}
        disabled={!name.trim()}
        style={{
          padding: '12px 40px',
          borderRadius: '25px',
          border: 'none',
          background: name.trim() ? 'linear-gradient(90deg, #7765DA, #4F0DCE)' : '#eee',
          color: name.trim() ? '#fff' : '#aaa',
          fontWeight: 'bold',
          fontSize: '16px',
          cursor: name.trim() ? 'pointer' : 'not-allowed'
        }}
      >
        Continue
      </button>
    </div>
  );
}

export default StudentNameEntry;
