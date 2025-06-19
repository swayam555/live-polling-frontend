// filepath: c:\Users\swaya\OneDrive\Desktop\intervuefrontend\frontend\src\StudentPollResults.js
import React from 'react';

// Simulated poll results data
const pollResults = {
  question: "Which planet is known as the Red Planet?",
  options: [
    { text: "Mars", percent: 75 },
    { text: "Venus", percent: 5 },
    { text: "Jupiter", percent: 5 },
    { text: "Saturn", percent: 15 }
  ]
};

function StudentPollResults() {
  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h2>Question 1 <span style={{ fontSize: 16, color: '#4F0DCE', marginLeft: 20 }}>⏰ 00:00</span></h2>
      <div style={{
        maxWidth: 500,
        margin: '30px auto',
        background: '#f2f2f2',
        borderRadius: 10,
        padding: 20,
        boxShadow: '0 2px 8px #eee'
      }}>
        <div style={{
          background: '#373737',
          color: '#fff',
          padding: '10px 15px',
          borderRadius: '8px 8px 0 0',
          fontWeight: 'bold'
        }}>
          {pollResults.question}
        </div>
        <div style={{ padding: 20 }}>
          {pollResults.options.map((opt, idx) => (
            <div key={idx} style={{
              margin: '10px 0',
              background: '#fff',
              border: '1px solid #ccc',
              borderRadius: 6,
              padding: '12px 18px',
              position: 'relative'
            }}>
              <div style={{
                background: '#7765DA',
                width: `${opt.percent}%`,
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                borderRadius: 6,
                opacity: 0.2,
                zIndex: 0
              }} />
              <span style={{ position: 'relative', zIndex: 1 }}>{opt.text}</span>
              <span style={{ float: 'right', position: 'relative', zIndex: 1 }}>{opt.percent}%</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 20, fontWeight: 'bold' }}>
        Wait for the teacher to ask a new question..
      </div>
    </div>
  );
}

export default StudentPollResults;