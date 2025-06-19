// filepath: c:\Users\swaya\OneDrive\Desktop\intervuefrontend\frontend\src\RoleSelection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedRole === 'student') {
      navigate('/student');
    } else if (selectedRole === 'teacher') {
      navigate('/teacher');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Welcome to the <span style={{ fontWeight: 'bold' }}>Live Polling System</span></h2>
      <p>Please select the role that best describes you to begin using the live polling system</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', margin: '40px 0' }}>
        <div
          onClick={() => setSelectedRole('student')}
          style={{
            border: selectedRole === 'student' ? '2px solid #4F0DCE' : '2px solid #eee',
            borderRadius: '10px',
            padding: '30px 40px',
            cursor: 'pointer',
            background: selectedRole === 'student' ? '#f2f2f2' : '#fff'
          }}
        >
          <strong>I'm a Student</strong>
          <p style={{ fontSize: '14px', color: '#666' }}>Participate in polls and see results in real-time.</p>
        </div>
        <div
          onClick={() => setSelectedRole('teacher')}
          style={{
            border: selectedRole === 'teacher' ? '2px solid #4F0DCE' : '2px solid #eee',
            borderRadius: '10px',
            padding: '30px 40px',
            cursor: 'pointer',
            background: selectedRole === 'teacher' ? '#f2f2f2' : '#fff'
          }}
        >
          <strong>I'm a Teacher</strong>
          <p style={{ fontSize: '14px', color: '#666' }}>Create polls and view live poll results.</p>
        </div>
      </div>
      <button
        onClick={handleContinue}
        disabled={!selectedRole}
        style={{
          padding: '12px 40px',
          borderRadius: '25px',
          border: 'none',
          background: selectedRole ? 'linear-gradient(90deg, #7765DA, #4F0DCE)' : '#eee',
          color: selectedRole ? '#fff' : '#aaa',
          fontWeight: 'bold',
          fontSize: '16px',
          cursor: selectedRole ? 'pointer' : 'not-allowed'
        }}
      >
        Continue
      </button>
    </div>
  );
}

export default RoleSelection;