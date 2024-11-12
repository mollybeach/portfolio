// src/components/Overview.tsx
import React from 'react';

const Overview: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-4">Molly Beach</h2>
    <p className="text-gray-600 mb-4">Software Engineer</p>
    <p className="mb-2">
      <a href="https://github.com/mollybeach" className="text-blue-600 underline">
        GitHub
      </a>
    </p>
    <p className="mb-2">
      <a href="https://www.linkedin.com/in/mollybeach" className="text-blue-600 underline">
        LinkedIn
      </a>
    </p>
    <p className="mb-2">📞 206.947.6991</p>
    <p className="mb-2">✉️ mollyjbeach@gmail.com</p>
  </div>
);

export default Overview;
