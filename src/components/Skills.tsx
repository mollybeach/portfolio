// src/components/Skills.tsx
import React from 'react';

const skills = [
  'TypeScript', 'JavaScript', 'Solidity', 'React', 'NodeJS', 'Vue', 'SQL', 'Python', 
  'Swift', 'Scala', 'Java', 'Rust', 'Ruby', 'C++', 'R', 'Docker', 'HTML/CSS/SCSS', 
  'GraphQL', 'GCP', 'HTML5', 'Django', 'Git', 'MySQL', 'PostgreSQL', 'AWS', 'Firebase', 
  'Azure', 'GoLang', 'GLSL', 'Canvas API', 'Hardhat', 'Truffle', 'Jest', 'Mocha', 'Remix'
];

const Skills: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Skills</h2>
    <div className="grid grid-cols-3 gap-4">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-gray-200 rounded text-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Skills;
