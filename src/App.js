import React, { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';

import RoleSelection from './RoleSelection';
import StudentNameEntry from './StudentNameEntry';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';
import StudentPoll from './StudentPoll';
import StudentPollResults from './StudentPollResults';
import TeacherPollResults from './TeacherPollResults';
import TeacherPollHistory from './TeacherPollHistory';
import KickedOut from './KickedOut';
import ChatPopup from './ChatPopup';

// ✅ Create and export socket context
export const SocketContext = createContext();

// ✅ Connect to backend socket server
const socket = io('http://localhost:53842'); // adjust if backend is hosted elsewhere

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          <Route path="/student" element={<StudentNameEntry />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/poll" element={<StudentPoll />} />
          <Route path="/student/results" element={<StudentPollResults />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/teacher/results" element={<TeacherPollResults />} />
          <Route path="/teacher/history" element={<TeacherPollHistory />} />
          <Route path="/student/kicked" element={<KickedOut />} />
        </Routes>
        <ChatPopup />
      </Router>
    </SocketContext.Provider>
  );
}

export default App;
