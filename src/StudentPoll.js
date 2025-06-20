// filepath: src/StudentPoll.js

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from './App';
import API from './api';

function StudentPoll() {
  const navigate = useNavigate();
  const socket = useContext(SocketContext);

  const poll = JSON.parse(sessionStorage.getItem('activePoll'));
  const studentId = sessionStorage.getItem('studentId');
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (!poll || !studentId) {
      navigate('/student');
      return;
    }

    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Listen for poll results
    socket.on('poll:results', (results) => {
      sessionStorage.setItem('pollResults', JSON.stringify(results));
      navigate('/student/results');
    });

    return () => {
      clearInterval(timer);
      socket.off('poll:results');
    };
  }, []);

  const handleSubmit = async () => {
    if (selected === null || submitted) return;

    try {
      await API.post(`/polls/${poll.id}/answer`, {
        studentId,
        option: poll.options[selected]
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  const handleAutoSubmit = () => {
    if (!submitted) {
      setSubmitted(true);
      socket.emit('student:timeout', { studentId });
      navigate('/student/results');
    }
  };

  const formatTime = (sec) => `00:${sec < 10 ? '0' + sec : sec}`;

  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h2>
        Question 1
        <span style={{ fontSize: 16, color: '#4F0DCE', marginLeft: 20 }}>
          ⏰ {formatTime(timeLeft)}
        </span>
      </h2>

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
          {poll.question}
        </div>
        <div style={{ padding: 20 }}>
          {poll.options.map((opt, idx) => (
            <div key={idx}
              style={{
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
