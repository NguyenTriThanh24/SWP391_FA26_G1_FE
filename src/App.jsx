import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import các trang
import HomePage from './pages/HomePage';
import FacilitiesPage from './pages/FacilitiesPage';
import CoachPage from './pages/CoachPage'; // Import trang HLV vừa tạo

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route mặc định về trang chủ */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        
        {/* Route Cơ sở vật chất */}
        <Route path="/co-so-vat-chat" element={<FacilitiesPage />} />
        
        {/* Route Huấn luyện viên */}
        <Route path="/hlv" element={<CoachPage />} />

        {/* Fallback cho các URL khác */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}