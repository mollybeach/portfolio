// src/components/Experience.tsx
import React from 'react';

const Experience: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Experience</h2>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">Parades - Software Engineer</h3>
      <p className="text-gray-500">January 2024 - Present, Remote</p>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Developed applications with technologies such as TypeScript, Solidity, React, NodeJS, and more.</li>
      </ul>
    </div>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">Accenture - Blockchain Metaverse React Software Engineer</h3>
      <p className="text-gray-500">October 2022 - December 2023, Remote</p>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Developed AI chat and advanced graphics applications using React, Three.js, and WebGL.</li>
      </ul>
    </div>
    
    {/* Add other experience entries in similar format */}
  </div>
);

export default Experience;
