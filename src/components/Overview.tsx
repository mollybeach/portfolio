// src/components/Overview.tsx
import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      {/* Header with name and avatar */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Molly Beach</h1>
          <p className="text-lg text-gray-600 mb-4">Software Engineer</p>
          
          {/* Social Links */}
          <div className="flex gap-3">
            <a 
              href="https://github.com/mollybeach" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/images/githubsquare.png`}
                alt="GitHub"
                className="w-10 h-10 rounded shadow-sm hover:shadow-md"
              />
            </a>
            <a 
              href="https://www.linkedin.com/in/mollybeach" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/images/linkedinsquare.png`}
                alt="LinkedIn"
                className="w-10 h-10 rounded shadow-sm hover:shadow-md"
              />
            </a>
          </div>
        </div>
        <img 
          src={`${process.env.PUBLIC_URL}/images/beach_molly_avi.png`}
          alt="Molly Beach"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 shadow-lg"
        />
      </div>

      {/* Contact Info */}
      <div className="mb-6 text-gray-700">
        <p className="mb-2">📞 206.947.6991</p>
        <p className="mb-2">✉️ mollyjbeach@gmail.com</p>
      </div>

      {/* Overview content */}
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          Software Engineer with expertise in blockchain development, full-stack web applications, 
          and emerging technologies. Experienced in React, TypeScript, Solidity, and cloud platforms.
        </p>
        
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Blockchain</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">React</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">TypeScript</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Solidity</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Web3</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
