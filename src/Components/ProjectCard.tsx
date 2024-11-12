import React from 'react';

interface ProjectProps {
  project: {
    title: string;
    date: string;
    description: string;
    technologies: string[];
    livePreview?: string;
  }
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <div className="mb-4">
        <p className="text-gray-600">{project.date}</p>
        <p className="text-gray-700">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-200 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.livePreview && (
        <div className="mt-4">
          <iframe
            src={project.livePreview}
            className="w-full h-64 rounded-lg"
            title={project.title}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;