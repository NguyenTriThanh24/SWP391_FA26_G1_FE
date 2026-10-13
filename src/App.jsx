import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FacilitiesPage from './pages/FacilitiesPage'; // Trang Cơ sở vật chất

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/hlv" element={<HomePage />} />
        {/* Route trang Cơ sở vật chất */}
        <Route path="/co-so-vat-chat" element={<FacilitiesPage />} />
      </Routes>
    </Router>
  );
}