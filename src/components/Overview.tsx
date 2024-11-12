// src/components/Overview.tsx
import React from 'react';

const Overview: React.FC = () => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Molly Beach</h2>
    <p className="text-lg text-gray-500 mb-6">Software Engineer</p>
    <p className="mb-2">
      <a href="https://github.com/mollybeach" className="text-blue-500 hover:underline">
        GitHub
      </a>
    </p>
    <p className="mb-2">
      <a href="https://www.linkedin.com/in/mollybeach" className="text-blue-500 hover:underline">
        LinkedIn
      </a>
    </p>
    <p className="text-gray-700 mb-2">📞 206.947.6991</p>
    <p className="text-gray-700 mb-2">✉️ mollyjbeach@gmail.com</p>
  </div>
);

export default Overview;
