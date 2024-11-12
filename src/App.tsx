import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import MainComponent from './Components/MainComponent';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <MainComponent />
      </div>
    </Router>
  );
};

export default App; 