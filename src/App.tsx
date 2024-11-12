// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainComponent from './components/MainComponent';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50 text-gray-800">
        <Sidebar />
        <MainComponent />
      </div>
    </Router>
  );
};

export default App;
