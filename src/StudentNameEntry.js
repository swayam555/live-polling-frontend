// filepath: c:\Users\swaya\OneDrive\Desktop\intervuefrontend\frontend\src\StudentNameEntry.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentNameEntry() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (name.trim()) {
      // Save name in sessionStorage so it persists on refresh but not across tabs
      sessionStorage.setItem('studentName', name.trim());
      navigate('/student/dashboard');
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