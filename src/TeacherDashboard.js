import React, { useState } from 'react';
import API from './api'; // axios instance
import { useNavigate } from 'react-router-dom';

function TeacherDashboard() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [correct, setCorrect] = useState([false, false]); // not used in backend (yet)
  const [timeLimit, setTimeLimit] = useState(60);

  const navigate = useNavigate();

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleCorrectChange = (index, value) => {
    const newCorrect = [...correct];
    newCorrect[index] = value === 'yes';
    setCorrect(newCorrect);
  };

  const addOption = () => {
    setOptions([...options, '']);
    setCorrect([...correct, false]);
  };

  const handleTimeChange = (e) => {
    setTimeLimit(Number(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!question.trim() || options.some(opt => !opt.trim())) {
      alert("Please fill in the question and all options.");
      return;
    }

    try {
      // Send to backend
      const res = await API.post('/polls', {
        question: question.trim(),
        options: options.map(opt => opt.trim()),
        // optionally: timeLimit
      });

      alert('Poll created successfully!');
      navigate('/teacher/results'); // Or show results after students vote
    } catch (err) {
      console.error('Error creating poll:', err);
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h2>
        <span style={{ fontWeight: 'bold', color: '#4F0DCE' }}>Intervue Poll</span>
      </h2>
      <h1>
        Let’s <span style={{ fontWeight: 'bold' }}>Get Started</span>
      </h1>
      <p style={{ color: '#666' }}>
        Create and manage polls, ask questions, and monitor your students’ responses in real-time.
      </p>

      <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: '40px auto', textAlign: 'left' }}>
        <label>
          <strong>Enter your question</strong>
          <select value={timeLimit} onChange={handleTimeChange} style={{ float: 'right', borderRadius: 5 }}>
            <option value={60}>60 seconds</option>
            <option value={45}>45 seconds</option>
            <option value={30}>30 seconds</option>
          </select>
        </label>

        <textarea
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          maxLength={100}
          style={{
            width: '100%',
            minHeight: 60,
            margin: '10px 0 20px 0',
            borderRadius: 8,
            border: '1px solid #ccc',
            padding: 10,
            fontSize: 16
          }}
        />

        <div>
          <strong>Edit Options</strong>
          {options.map((opt, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
              <span style={{ marginRight: 8 }}>{idx + 1}.</span>
              <input
                type="text"
                value={opt}
                onChange={e => handleOptionChange(idx, e.target.value)}
                placeholder={`Option ${idx + 1}`}
                style={{
                  flex: 1,
                  padding: 8,
                  borderRadius: 5,
                  border: '1px solid #ccc',
                  marginRight: 10
                }}
              />
              <span style={{ marginRight: 8 }}>Is it Correct?</span>
              <label>
                <input
                  type="radio"
                  name={`correct${idx}`}
                  value="yes"
                  checked={correct[idx] === true}
                  onChange={e => handleCorrectChange(idx, e.target.value)}
                /> Yes
              </label>
              <label style={{ marginLeft: 8 }}>
                <input
                  type="radio"
                  name={`correct${idx}`}
                  value="no"
                  checked={correct[idx] === false}
                  onChange={e => handleCorrectChange(idx, e.target.value)}
                /> No
              </label>
            </div>
          ))}

          <button
            type="button"
            onClick={addOption}
            style={{
              marginTop: 10,
              padding: '6px 16px',
              borderRadius: 5,
              border: '1px solid #4F0DCE',
              background: '#fff',
              color: '#4F0DCE',
              cursor: 'pointer'
            }}
          >
            + Add More option
          </button>
        </div>

        <button
          type="submit"
          style={{
            display: 'block',
            margin: '40px auto 0 auto',
            padding: '12px 40px',
            borderRadius: '25px',
            border: 'none',
            background: 'linear-gradient(90deg, #7765DA, #4F0DCE)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Ask Question
        </button>
      </form>
    </div>
  );
}

export default TeacherDashboard;
