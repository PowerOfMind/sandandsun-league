// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PairDetailsPage from './pages/PairDetailsPage';
import AppBar from './components/layout/AppBar';

const App: React.FC = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pair/:id" element={<PairDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
