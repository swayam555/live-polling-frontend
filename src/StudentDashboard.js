// filepath: c:\Users\swaya\OneDrive\Desktop\intervuefrontend\frontend\src\StudentDashboard.js
import React from 'react';

function StudentDashboard() {
  const name = sessionStorage.getItem('studentName') || 'Student';

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Welcome, {name}!</h2>
      <p>This is your student dashboard. Polls will appear here soon.</p>
    </div>
  );
}

export default StudentDashboard;