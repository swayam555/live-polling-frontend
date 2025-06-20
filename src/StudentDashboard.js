// filepath: c:\Users\swaya\OneDrive\Desktop\intervuefrontend\frontend\src\StudentDashboard.js

import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from './App';

function StudentDashboard() {
  const name = sessionStorage.getItem('studentName') || 'Student';
  const socket = useContext(SocketContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for new poll broadcast
    socket.on('poll:created', (pollData) => {
      console.log('📢 New poll received:', pollData);
      // You can optionally store poll data in localStorage/sessionStorage
      sessionStorage.setItem('activePoll', JSON.stringify(pollData));
      navigate('/student/poll');
    });

    // Clean up socket on unmount
    return () => {
      socket.off('poll:created');
    };
  }, [socket, navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Welcome, {name}!</h2>
      <p>Waiting for the teacher to start a poll...</p>
    </div>
  );
}

export default StudentDashboard;
