// path: src/components/Experience.tsx
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold text-gray-900">Experience</h2>
      <div>
        <h3 className="text-xl font-bold text-gray-800">Parades</h3>
        <p className="text-gray-600">January 2024 - Present, Remote</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Developed web applications using TypeScript, React, and Node.js.</li>
          <li>Worked on blockchain integrations and implemented secure smart contracts.</li>
        </ul>
      </div>
      {/* Add other experience entries similarly */}
    </section>
  );
};

export default Experience;
