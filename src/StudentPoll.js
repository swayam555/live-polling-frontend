// filepath: c:\Users\swaya\OneDrive\Desktop\intervuefrontend\frontend\src\StudentPoll.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// For now, we'll use a hardcoded poll. Later, this will come from the backend.
const samplePoll = {
  question: "Which planet is known as the Red Planet?",
  options: ["Mars", "Venus", "Jupiter", "Saturn"],
  timeLimit: 60
};

function StudentPoll() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
      setTimeout(() => {
        navigate('/student/results');
      }, 1000); // Simulate a short wait before showing results
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h2>Question 1 <span style={{ fontSize: 16, color: '#4F0DCE', marginLeft: 20 }}>⏰ 00:15</span></h2>
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
          {samplePoll.question}
        </div>
        <div style={{ padding: 20 }}>
          {samplePoll.options.map((opt, idx) => (
            <div key={idx} style={{
              margin: '10px 0',
              background: selected === idx ? '#7765DA' : '#fff',
              color: selected === idx ? '#fff' : '#373737',
              border: selected === idx ? '2px solid #4F0DCE' : '1px solid #ccc',
              borderRadius: 6,
              padding: '12px 18px',
              cursor: submitted ? 'not-allowed' : 'pointer',
              opacity: submitted ? 0.7 : 1
            }}
              onClick={() => !submitted && setSelected(idx)}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>
      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          style={{
            padding: '12px 40px',
            borderRadius: '25px',
            border: 'none',
            background: selected !== null ? 'linear-gradient(90deg, #7765DA, #4F0DCE)' : '#eee',
            color: selected !== null ? '#fff' : '#aaa',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: selected !== null ? 'pointer' : 'not-allowed',
            marginTop: 20
          }}
        >
          Submit
        </button>
      ) : (
        <div style={{ marginTop: 20, color: '#4F0DCE', fontWeight: 'bold' }}>
          Answer submitted! Waiting for results...
        </div>
      )}
    </div>
  );
}

export default StudentPoll;