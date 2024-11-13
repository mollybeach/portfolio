// src/components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  project: {
    title: string;
    date: string;
    description: string;
    technologies: string[];
    link: string;
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a 
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-full h-48 relative p-2">
        <img
          src={`https://api.microlink.io?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`}
          alt={project.title}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm text-gray-500">{project.date}</p>
        <p className="mt-2">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
