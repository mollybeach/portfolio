// src/components/Education.tsx
import React from 'react';

const Education: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Education</h2>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">BrainStation - Web Development Diploma</h3>
      <p className="text-gray-500">January 2020 - April 2020, Ontario, CA</p>
      <p className="text-gray-700">React, JavaScript, SCSS, HTML5, SQL, Front End Responsive Design</p>
    </div>
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold">University of Washington - Bachelor of Science</h3>
      <p className="text-gray-500">September 2014 - August 2017, Seattle, WA</p>
      <p className="text-gray-700">Molecular Cellular Developmental Biology (MCDB), Computer Science Software Engineering Minor</p>
    </div>
  </div>
);

export default Education;
