import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  livePreview?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "CryptoGene",
      date: "Mar 2020 - Dec 2020",
      description: "DApp/Web3JS application that converts raw DNA data from Ancestry.com into raymarching shader art, transformed into Ethereum-based NFTs.",
      technologies: ["React", "Web3.js", "Solidity", "GLSL", "Firebase"],
      livePreview: "https://your-project-url.com"
    },
    // Add more projects here
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;