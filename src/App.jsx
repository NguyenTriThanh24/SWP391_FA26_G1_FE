import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        {/* Route danh sách Huấn Luyện Viên */}
        <Route path="/hlv" element={<HomePage />} />
      </Routes>
    </Router>
  );
}