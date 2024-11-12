// path: src/components/Skills.tsx
import React from 'react';

const skills = [
  'TypeScript', 'JavaScript', 'Solidity', 'React', 'Node.js', 'SQL', 'Python', 
  'Swift', 'Scala', 'Java', 'Rust', 'Docker', 'HTML', 'CSS', 'SCSS', 'GraphQL',
  'AWS', 'Azure', 'Firebase', 'GCP', 'Jest', 'Mocha', 'Remix'
];

const Skills: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold text-gray-900">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
