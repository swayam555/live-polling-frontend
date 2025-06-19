import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
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
  );
}

export default App;
