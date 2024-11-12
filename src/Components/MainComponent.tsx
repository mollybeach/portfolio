import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Projects from './Projects';

const MainComponent: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto">
      <Routes>
        <Route path="/" element={<div>Overview</div>} />
        <Route path="/experience" element={<div>Experience</div>} />
        <Route path="/skills" element={<div>Skills</div>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<div>Education</div>} />
      </Routes>
    </main>
  );
};

export default MainComponent;