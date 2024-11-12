// src/components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'CryptoGene',
      date: 'Mar 2020 - Dec 2020',
      description: 'DApp/Web3JS application that converts raw DNA data from Ancestry.com into Ethereum-based NFTs.',
      technologies: ['React', 'Web3.js', 'Solidity', 'GLSL', 'Firebase'],
      livePreview: 'https://your-project-url.com',
    },
    {
      title: 'Shader Park',
      date: 'Sept 2019 - Feb 2020',
      description: 'Resolved front-end issues and developed shaders using GLSL.',
      technologies: ['VueJS', 'GLSL'],
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="space-y-6">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
