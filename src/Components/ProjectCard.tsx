// src/components/ProjectCard.tsx
import React from 'react';

interface ProjectProps {
  project: {
    title: string;
    date: string;
    description: string;
    technologies: string[];
    livePreview?: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
    <p className="text-gray-500">{project.date}</p>
    <p className="text-gray-700 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech) => (
        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
          {tech}
        </span>
      ))}
    </div>
    {project.livePreview && (
      <iframe
        src={project.livePreview}
        className="w-full h-64 rounded-lg border border-gray-300"
        title={project.title}
      />
    )}
  </div>
);

export default ProjectCard;
