// path: src/components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "CryptoGene",
    date: "Mar 2020 - Dec 2020",
    description: "DApp/Web3JS app converting DNA data from Ancestry.com into NFTs.",
    technologies: ["React", "Web3.js", "Solidity", "GLSL", "Firebase"],
    link: "https://chromagenetic.firebaseapp.com"
  },
  {
    title: "Ihaehada",
    date: "Mar 2020 - Dec 2020",
    description: "Learn Korean language application. Browse the Ihaehada collection of words and phrases.",
    technologies: ["Vue", "JavaScript", "Firebase"],
    link: "https://ihaehada.firebaseapp.com"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
        />
      ))}
    </div>
  );
};

export default Projects;
