import React from 'react';

// Simulated poll history data
const pollHistory = [
  {
    question: "Which planet is known as the Red Planet?",
    options: [
      { text: "Mars", percent: 75 },
      { text: "Venus", percent: 5 },
      { text: "Jupiter", percent: 5 },
      { text: "Saturn", percent: 15 }
    ]
  },
  {
    question: "Which planet is closest to the Sun?",
    options: [
      { text: "Mercury", percent: 60 },
      { text: "Venus", percent: 20 },
      { text: "Earth", percent: 10 },
      { text: "Mars", percent: 10 }
    ]
  }
];

function TeacherPollHistory() {
  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h2>View <span style={{ fontWeight: 'bold' }}>Poll History</span></h2>
      <div style={{ maxWidth: 600, margin: '30px auto' }}>
        {pollHistory.map((poll, idx) => (
          <div key={idx} style={{
            background: '#f2f2f2',
            borderRadius: 10,
            padding: 20,
            marginBottom: 30,
            boxShadow: '0 2px 8px #eee'
          }}>
            <div style={{
              background: '#373737',
              color: '#fff',
              padding: '10px 15px',
              borderRadius: '8px 8px 0 0',
              fontWeight: 'bold'
            }}>
              {`Question ${idx + 1}: ${poll.question}`}
            </div>
            <div style={{ padding: 20 }}>
              {poll.options.map((opt, oidx) => (
                <div key={oidx} style={{
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
        ))}
      </div>
    </div>
  );
}

export default TeacherPollHistory;