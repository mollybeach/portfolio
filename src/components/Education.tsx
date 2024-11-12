// path: src/components/Education.tsx
import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold text-gray-900">Education</h2>
      <div>
        <h3 className="text-xl font-bold text-gray-800">BrainStation</h3>
        <p className="text-gray-600">Jan 2020 - Apr 2020, Ontario, CA</p>
        <p className="text-gray-700">Web Development Diploma</p>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800">University of Washington</h3>
        <p className="text-gray-600">Sep 2014 - Aug 2017, Seattle, WA</p>
        <p className="text-gray-700">Bachelor of Science in Molecular Cellular Developmental Biology, Minor in Computer Science</p>
      </div>
    </section>
  );
};

export default Education;
